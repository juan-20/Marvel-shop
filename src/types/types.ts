export interface Comic {
  id: number;
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
