import { Commit } from 'vuex';

export interface DrinkCardType {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  currency: string;
};

export interface DrinkCardTypeResponse {
  data: DrinkCardType[]
}

export interface CardReader {
  active: boolean,
  value: number,
}

export interface CashReader {
  active: boolean,
  value: number,
}

export interface Emulator {
  cardReader: CardReader,
  cashReader: CashReader,
}

export interface CommitFunction {
  commit: Commit;
}

export interface CommitStateFunction<T> extends CommitFunction {
  state: T;
}
