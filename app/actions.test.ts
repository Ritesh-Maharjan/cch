import { describe, it, expect, vi, beforeEach } from "vitest";

const mockSend = vi.hoisted(() =>
  vi.fn().mockResolvedValue({ data: {}, error: null }),
);

vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("resend", () => ({
  Resend: function () {
    return { emails: { send: mockSend } };
  },
}));

const { submitForm } = await import("./actions");

const validState = { success: false, message: "", errors: {} };

function makeFormData(fields: Record<string, string>) {
  const fd = new FormData();
  Object.entries(fields).forEach(([k, v]) => fd.append(k, v));
  return fd;
}

const validFields = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  message: "Hello, I am interested in your services.",
  website: "",
};

beforeEach(() => {
  mockSend.mockClear();
});

describe("submitForm — honeypot", () => {
  it("returns fake success when website field is filled", async () => {
    const fd = makeFormData({ ...validFields, website: "http://bot.com" });
    const result = await submitForm(validState, fd);
    expect(result.success).toBe(true);
    expect(result.message).toBe("Message sent successfully!");
  });
});

describe("submitForm — validation", () => {
  it("returns error when firstName is too short", async () => {
    const fd = makeFormData({ ...validFields, firstName: "J" });
    const result = await submitForm(validState, fd);
    expect(result.success).toBe(false);
    expect(result.errors?.firstName).toBeDefined();
  });

  it("returns error when email is invalid", async () => {
    const fd = makeFormData({ ...validFields, email: "not-an-email" });
    const result = await submitForm(validState, fd);
    expect(result.success).toBe(false);
    expect(result.errors?.email).toBeDefined();
  });

  it("returns error when message is too short", async () => {
    const fd = makeFormData({ ...validFields, message: "Hi" });
    const result = await submitForm(validState, fd);
    expect(result.success).toBe(false);
    expect(result.errors?.message).toBeDefined();
  });
});

describe("submitForm — send", () => {
  it("returns success message when email sends", async () => {
    const fd = makeFormData(validFields);
    const result = await submitForm(validState, fd);
    expect(result.success).toBe(true);
    expect(result.message).toBe("Message sent successfully!");
  });

  it("returns failure message when Resend throws", async () => {
    mockSend.mockRejectedValueOnce(new Error("Network error"));
    const fd = makeFormData(validFields);
    const result = await submitForm(validState, fd);
    expect(result.success).toBe(false);
    expect(result.message).toBe("Failed to send message. Please try again.");
  });
});
