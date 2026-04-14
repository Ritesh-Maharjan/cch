const Loading = () => {
  return (
    <section className="flex flex-col">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="min-h-50 flex flex-col md:flex-row md:border-2 animate-pulse"
        >
          <div className="w-full h-60 md:w-113 md:h-auto bg-navy-mid/40" />
          <div className="py-10 md:py-0 px-4.5 self-center flex flex-col gap-4 w-full">
            <div className="h-6 w-48 rounded bg-navy-mid/40" />
            <div className="h-4 w-full max-w-[70ch] rounded bg-navy-mid/40" />
            <div className="h-4 w-3/4 max-w-[70ch] rounded bg-navy-mid/40" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Loading;
