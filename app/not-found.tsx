import Link from "next/link";
import Button from "./components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-navy-dark">
      <h1 className="text-3xl font-extralight">Page not found</h1>
      <Link href="/">
        <Button variant="secondary">Go home</Button>
      </Link>
    </div>
  );
}
