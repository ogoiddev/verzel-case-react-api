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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzNjQyNzk2YTM5YzJlOGJhZDA5NmZlNyIsIm5hbWUiOiJEaW9nbyIsImxhc3ROYW1lIjoiTWFydGluaSBQYW50YWxlYW8iLCJlbWFpbCI6Im9nb2lkbXBAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMDUkWkpqUW8uQXowaXpqa0NxL2tzaHpELndDSHFnWjkxTzZOeE1yR2UwU0VhQWFNblA5VXBjN0MiLCJyb2xlIjoiYWRtaW4iLCJ0aHVtYiI6InN0cmluZyJ9LCJpYXQiOjE2Njc1MTEwNzUsImV4cCI6MTY2NzU5NzQ3NX0.T1A-S3FcRTQQHUnG0PC05mt7sk4HpXIg6OHO1ci06T8"

export const saveNewCar = async (infoCarDTO: any) => {
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

export const sendImgOfNewCar = async (infoImgDTO: any) => {
  try {
    const { data } = await axios.post((SEND_IMG_CAR_URL), infoImgDTO,
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