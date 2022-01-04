export const http = (url: string, method = 'GET'): Promise<any> =>
  fetch(url, {
    method,
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'd4136f41cdmsha620330627cd716p10ebabjsn342957036f7b',
    },
  });
