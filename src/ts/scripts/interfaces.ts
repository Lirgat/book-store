export interface RetailPriceObj {
    amount: number | undefined;
    currencyCode: string;
  }

export interface BookVolume {
    volumeInfo: {
        title: string;
        imageLinks: BookImage | undefined;
        authors: string[];
        averageRating: number | undefined;
        ratingsCount: number | undefined;
        description: string;
    };
    saleInfo: {
        retailPrice: RetailPriceObj
    }
}

export interface BookImage {
    thumbnail: string; 
}

export interface BookResponse {
    items: BookVolume[];
}