export interface DrinkCardType {
  id: number;
  name: string;
  description: string;
  image: string;
  cost: string;
  currency: string;
};

export interface DrinkCardTypeResponse {
  data: DrinkCardType[]
}
