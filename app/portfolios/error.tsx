"use client";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-navy-mid min-h-screen w-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <h2 className="text-2xl font-heading">Something went wrong</h2>
      <p className="text-blue-light max-w-md">
        We couldn&apos;t load the portfolios. Please try again.
      </p>
      <button
        onClick={reset}
        className="bg-gold text-off-white px-6 py-2 rounded-4xl cursor-pointer hover:bg-blue-light hover:text-blue-deep transition-all duration-200"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
