import axios from "axios";
import { DrinkCardTypeResponse } from "@/types";

export async function loadRestData() {

  //fake source
  const api = 'https://somewhere.far/api/v2/drinks/read'

  try {
    const response = await axios.get(api,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    )

    const { data } = response.data as DrinkCardTypeResponse;
    return data;

  } catch (error) {
    console.error(error);
  }

}
