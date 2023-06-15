import { DrinkCardType } from "@/types";
import { loadFileData } from "@/repository/file/FileRepository";
import { loadCacheData } from "@/repository/file/CacheRepository";

export async function getData(repository = 'file') {
  console.log('repository', repository);
  switch (repository) {
    case 'file': {
      try {
        return await loadFileData() as DrinkCardType[];
      } catch (error) {
        console.error(error);
      }
      break;
    }
    case 'cache': {
      try {

        const data = loadCacheData() as DrinkCardType[];
        if (data.length === 0) {
          console.log('loading from file');
          return await loadFileData();
        } else {
          console.log('loading from cache');
          return data;
        }

      } catch (error) {
        console.error(error);
      }
      break;
    }
  }
}
