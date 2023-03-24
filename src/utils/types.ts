export type ImageSize = "small" | "medium" | "original" | "big";

export interface IImage {
  height: number;
  width: number;
  uri: string;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  seo?: {
    keywords?: string;
    description?: string;
  };
  images: Record<ImageSize, IImage>;
}
