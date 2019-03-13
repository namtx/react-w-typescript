import { Hero } from "@app/models/Hero"
import { AxiosResponse } from "axios"
import { api } from "../axios/instance"

export const heroesApi = {
  getAll: async () : Promise<Hero[]> => {
    const path = ""
    try {
      const response: AxiosResponse<{heroes: Hero[]}> = await api.get(path, {})
      return response.data.heroes
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
