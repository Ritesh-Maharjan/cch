const Loading = () => {
  return (
    <div className="py-20 animate-pulse">
      {/* Title */}
      <div className="mt-10 w-full max-w-7xl mx-auto px-4">
        <div className="h-8 w-64 rounded bg-white/20 mb-6" />
      </div>

      {/* Featured image */}
      <div className="w-full h-64 md:h-120 bg-white/20 mb-8" />

      {/* Content area */}
      <div className="pt-8 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 mb-40">
        {/* Left — logo + meta */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-48 rounded bg-white/20" />
          <div className="h-4 w-32 rounded bg-white/20" />
          <div className="h-4 w-28 rounded bg-white/20" />
          <div className="h-4 w-24 rounded bg-white/20" />
          <div className="h-8 w-40 rounded-4xl bg-white/20" />
        </div>

        {/* Right — description */}
        <div className="flex-1 flex flex-col gap-4 pt-4">
          <div className="h-4 w-full rounded bg-white/20" />
          <div className="h-4 w-5/6 rounded bg-white/20" />
          <div className="h-4 w-full rounded bg-white/20" />
          <div className="h-4 w-4/6 rounded bg-white/20" />
          <div className="h-4 w-full rounded bg-white/20" />
          <div className="h-4 w-3/4 rounded bg-white/20" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
