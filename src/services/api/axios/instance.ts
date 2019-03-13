import axios, { AxiosRequestConfig } from "axios"

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: "https://api.opendota.com/api/heroes",
  timeout: 10000,
}

const instance = axios.create({...DEFAULT_API_CONFIG})

const api = {
  get: async (
    path: string,
    config: AxiosRequestConfig
  ) : Promise<any> => {
    try {
      return await instance.get(path, {
        ...config
      })
    } catch (err) {
      return Promise.reject(err)
    }
  }
}


export default instance
export { api }
