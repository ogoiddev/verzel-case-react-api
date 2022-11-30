import axios from "axios"
import { LIST_CARS_URL, SAVE_NEW_CAR_URL, SEND_IMG_CAR_URL } from "./endpoints"

export const getListOfCars = async () => {
  try {
    const { data } = await axios.get((LIST_CARS_URL))
    return data
    
  } catch (AxiosError) {
    console.log(AxiosError)
  }

}


export const saveNewCar = async (token: string, infoCarDTO: any) => {
  try {
    const { data } = await axios.post((SAVE_NEW_CAR_URL), infoCarDTO,
      {
      headers: {
        Authorization: token,
      },
    })
    return data
    
  } catch (AxiosError) {
    console.log(AxiosError)
  }

}

export const sendImgOfNewCar = async (token: string, id: string, infoImgDTO: any) => {
  console.log(token, id, infoImgDTO);
  try {    
    const { data } = await axios.post(`${SEND_IMG_CAR_URL}/${id}` , infoImgDTO,
      {
      headers: {
        Authorization: token
      },
    })
    return data
    
  } catch (AxiosError) {
    console.log(AxiosError)
  }

}