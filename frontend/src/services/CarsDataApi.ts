import axios from "axios"
import { LIST_CARS_URL } from "./endpoints"

export const getListOfCars = async () => {
  try {
    const { data } = await axios.get((LIST_CARS_URL))
    return data
    
  } catch (AxiosError) {
    console.log(AxiosError)
  }

}