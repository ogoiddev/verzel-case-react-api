import axios from "axios"
import { LOGIN_URL } from "./endpoints"


interface IUserLogDTO {
  email: string,
  password: string,
}


export const loginToToken = async (userLogDTO: IUserLogDTO) => {
  try {
    const { data } = await axios.post((LOGIN_URL), userLogDTO)
    return data
    
  } catch (AxiosError) {
    console.log(AxiosError)
  }

}