export interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  }
  prices: any
  images: string;
  variantDescription: number;
}

export interface Stock {
  id: number;
  amount: number;
}
