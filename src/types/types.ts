import { ReactNode } from "react"

export interface Comic {
  id: any;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: Items[];
  }
  prices: Price[];
  images: string;
  variantDescription: number;
  format: string;
  characters: {
    thumbnail: {
      extension: string;
    }
    available: number;
    extension: string;
    items: imageItens[];
  };
}

type imageItens = {
  resourceURI: string;
  name: string;
}

type Items = {
  resourceURI: string;
  name: string;
  role: string;
}

type Price = {
  type: string;
  price: number;
}

export type RoomParams = {
  id: string;
}

export type LocalStorage = {
  id: number;
}

export type CartContextData = {
  addProduct: (productId: Comic[]) => Promise<void>;
  GetComic: (productId: LocalStorage[]) => Promise<void>;
  cart: Comic[]
}
export type CartProviderProps = {
  children: ReactNode;
}

export type Product = {
  ID: number;
}