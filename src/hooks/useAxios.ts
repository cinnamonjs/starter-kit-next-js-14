import axios, { AxiosResponse } from "axios";

interface ImportMeta {
  env: {
    NEXT_PUBLIC_BACKEND_URL: string;
  };
}
declare const importMeta: ImportMeta;

export const useAxios = axios.create({
  baseURL: importMeta.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
  headers: {
    // ...
  },
});
  
export async function handleApiResponse(response: AxiosResponse) {
  const data = await response.data;
  if (response.status == 200) {
    return Promise.resolve(data);
  } else {
    return Promise.reject();
  }
}