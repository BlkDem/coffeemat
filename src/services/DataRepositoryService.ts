import { DrinkCardType } from "@/types";
import { loadFileData } from "@/repository/file/FileRepository";
import { loadCacheData } from "@/repository/cache/CacheRepository";
import { loadRestData } from "@/repository/remote/RestRepository";

export async function getData(repository = 'file') {
  console.log('repository', repository);
  switch (repository) {

    //data from REST API
    case 'api': {
      try {
        return await loadRestData() as DrinkCardType[];
      } catch (error) {
        console.error(error);
      }
      break;
    }

    //data from local/remote file
    case 'file': {
      try {
        return await loadFileData() as DrinkCardType[];
      } catch (error) {
        console.error(error);
      }
      break;
    }

    //data from cache
    case 'cache': {
      try {

        //check cache persists
        const data = loadCacheData() as DrinkCardType[];

        //applying cache or load from file if not
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
