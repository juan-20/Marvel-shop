export interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: any

  prices: any;
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

export type RoomParams = {
  id: string;
}
