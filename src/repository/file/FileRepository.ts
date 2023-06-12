import axios from "axios";
import { DrinkCardTypeResponse } from "@/types";

export async function loadFileData() {
  try {
    const response = await axios.get('/repository/file/data.json',
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
