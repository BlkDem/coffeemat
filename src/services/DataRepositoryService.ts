import { DrinkCardType } from "@/types";
import { loadFileData } from "@/repository/file/FileRepository";

export async function getData(repository = 'file') {
  switch (repository) {
    case 'file': {
      try {
        return await loadFileData() as DrinkCardType[];
      } catch (error) {
        console.error(error);
      }
    }
  }
}
