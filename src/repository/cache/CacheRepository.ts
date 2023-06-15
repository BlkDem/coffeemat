import store from "@/store";
import { DrinkCardTypeResponse } from "@/types";

export function loadCacheData() {
  try {

    const { data } = store.state as DrinkCardTypeResponse
    return data;

  } catch (error) {
    console.error(error);
  }

}
