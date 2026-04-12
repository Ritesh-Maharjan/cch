// Type shim for @splidejs/react-splide — the package's package.json does not
// expose its types via an "exports" field, so bundler-mode moduleResolution
// cannot find them automatically.
declare module "@splidejs/react-splide" {
  import React from "react";

  export interface Options {
    perPage?: number;
    gap?: string | number;
    breakpoints?: Record<number, Partial<Options>>;
    autoplay?: boolean;
    pagination?: boolean;
    arrows?: boolean;
    rewind?: boolean;
    height?: string | number;
    updateOnMove?: boolean;
    [key: string]: unknown;
  }

  export interface SplideProps extends React.HTMLAttributes<HTMLDivElement> {
    options?: Options;
  }

  export class Splide extends React.Component<SplideProps> {
    splide?: {
      go(control: string | number): void;
    };
  }

  export interface SplideSlideProps
    extends React.HTMLAttributes<HTMLLIElement> {
    children?: React.ReactNode;
  }

  export class SplideSlide extends React.Component<SplideSlideProps> {}
}

declare module "@splidejs/react-splide/css" {}

// Swiper CSS module declarations
declare module "swiper/css" {}
declare module "swiper/css/effect-cube" {}
declare module "swiper/css/navigation" {}
