import axios from "axios"
import { NEW_USER_URL } from "./endpoints"

interface IUserDTO {
  name: string,
  lastName: string,
  email: string,
  password: string,
  role: string,
  thumb: string
}

export const createNewUser = async (userDTO: IUserDTO) => {
  try {
    const { data } = await axios.post((NEW_USER_URL), userDTO)
    return data
    
  } catch (AxiosError) {
    console.log(AxiosError)
  }

}