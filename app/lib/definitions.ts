export type Photo = {
  url: string
}

export type Currency = {
  USD: any[]
}

export type Product = {
  id: string;
  unique_id: string;
  name: string;
  photos: Photo[];
  current_price: Currency[];
  description: string;
}