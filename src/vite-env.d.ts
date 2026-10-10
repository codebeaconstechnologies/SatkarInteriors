/// <reference types="vite/client" />

declare module 'virtual:site-images' {
  /** Every photo under public/images/{hero,before-after,gallery,about,testimonials}, as `/images/...` URLs. */
  const images: string[];
  export default images;
}
