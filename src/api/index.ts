interface Key {
  queryKey: (string | { type: string; searchQuery: string | null })[];
  //   queryKey: [] | undefined;
}

interface KeyDetails {
  queryKey: (string | { type: string; id: number })[];
  //   queryKey: [] | undefined;
}
export const fetchDataList = async ({ queryKey }: Key) => {
  console.log('sdsd', queryKey);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDM2OGMzNjdmYzI2ODYxYzU0MjQxMWRmOGEyMTIzMyIsInN1YiI6IjYxZmY4MDA5ZTU0ZDVkMDA5NTcwZDVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ayOfnet3FoyIeiNS6WvinWj023anS60e31_f3iGBaxQ',
    },
  };
  let url;
  const type = typeof queryKey[1] === 'object' ? queryKey[1].type : '';
  const query = typeof queryKey[1] === 'object' ? queryKey[1].searchQuery : '';
  url = `https://api.themoviedb.org/3/${type}/top_rated?include_adult=false&language=en-US`;

  if (query) {
    url = `https://api.themoviedb.org/3/search/${type}/top_rated?query=${query}&include_adult=false&language=en-US`;
  }

  // console.log(query);
  // console.log(url);
  const response = await fetch(url, options);

  //#######################
  // if (!response.ok) {
  //   const error = new Error('An error occurred while fetching data');
  //   error.code = response.status;
  //   error.info = await response.json();
  //   throw error;
  // }
  const data = await response.json();
  //###########################
  // console.log(result);

  // if (query) {
  //   let filteredResult = result;
  //   filteredResult.results = filteredResult.results
  //     .filter((el) => el.media_type !== 'person')
  //     .sort((a, b) => {
  //       return b.popularity - a.popularity;
  //     });
  //   // console.log(filteredResult);
  //   return filteredResult;
  // }
  return data.results;
};

export const fetchDataDetails = async ({ queryKey }: KeyDetails) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDM2OGMzNjdmYzI2ODYxYzU0MjQxMWRmOGEyMTIzMyIsInN1YiI6IjYxZmY4MDA5ZTU0ZDVkMDA5NTcwZDVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ayOfnet3FoyIeiNS6WvinWj023anS60e31_f3iGBaxQ',
    },
  };
  // let url;
  const type = typeof queryKey[1] === 'object' ? queryKey[1].type : '';
  const id = typeof queryKey[1] === 'object' ? queryKey[1].id : '';
  // const type = queryKey[1].type;
  // const query = queryKey[1].searchTerm;

  const url = `https://api.themoviedb.org/3/${type}/${id}?language=en-US&`;
  console.log(url, 'dddd');
  // if (query) {
  //   url = `https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=en-US&page=${pageParam}`;
  // }

  // if (type === 'multi' && !query) {
  //   url = `https://api.themoviedb.org/3/trending/all/week?language=en-US&page=${pageParam}`;
  // }
  // console.log(type);
  // console.log(url);
  const response = await fetch(url, options);

  //#######################
  // if (!response.ok) {
  //   const error = new Error('An error occurred while fetching data');
  //   error.code = response.status;
  //   error.info = await response.json();
  //   throw error;
  // }
  const data = await response.json();
  //###########################
  // console.log(result);

  // if (query) {
  //   let filteredResult = result;
  //   filteredResult.results = filteredResult.results
  //     .filter((el) => el.media_type !== 'person')
  //     .sort((a, b) => {
  //       return b.popularity - a.popularity;
  //     });
  //   // console.log(filteredResult);
  //   return filteredResult;
  // }
  console.log('ddd', data);
  return data;
};
