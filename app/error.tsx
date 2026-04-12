"use client";

import { useEffect } from "react";
import Button from "./components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-navy-dark">
      <h1 className="text-3xl font-extralight">Something went wrong</h1>
      <p className="text-zinc-500">We couldnt load the page. Please try again.</p>
      <Button variant="secondary" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
