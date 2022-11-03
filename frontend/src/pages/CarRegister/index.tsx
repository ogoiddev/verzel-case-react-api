import axios from 'axios';
import { CarRegisterContainer } from "./styles";

export default function CarRegister() {


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataForm = new FormData(e.currentTarget);
    
    const DTO = dataForm.getAll('avatar');

    DTO.forEach(file => {
      dataForm.append('file', file);
    })
    
    
    
    console.log(DTO);
    
    try {

      const { data } = await axios.post(('http://localhost:3001/upload'), DTO);
      
      
      console.log(data);

    } catch (AxiosError) {
      console.log(AxiosError);
    };
  }

  return (
    <CarRegisterContainer>

    <form name="profile_form" onSubmit={handleSubmit}>
        <input
          id="avatar"
          name="avatar"
          accept="image/*"
          type="file"
          multiple
        />
      <button type="submit">Submit</button>
    </form>

    </CarRegisterContainer>
  );
}