import { useState } from 'react';
import { saveNewCar, sendImgOfNewCar } from '../../services/CarsDataApi';
import { CarRegisterContainer } from "./styles";

export default function CarRegister() {
  const [infoSended, setInfoSended] = useState<boolean>(false)
  const [idDataFormFilled, setIdDataFormFilled] = useState<string>('')

  const handleInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataForm = new FormData(e.currentTarget);
    console.log(e.currentTarget);
    const DTO = dataForm.getAll('infoCar');

    const dataToSave = {
      model: DTO[0],
      year: Number(DTO[1]),
      color: DTO[2],
      buyValue: Number(DTO[3]),
      imgs: [],
      doorsQty: Number(DTO[4]),
      seatsQty: Number(DTO[5]),
      features: {
        city: DTO[6],
        state: DTO[7],
        gearShift: DTO[8],
        km: Number(DTO[9]),
      },
    }

    console.log(dataToSave);
    const result = await saveNewCar(dataToSave)
    
    if (result) {
      setIdDataFormFilled(result._id)
      setInfoSended(!infoSended)
    }
    
  }

  const handleImgSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataForm = new FormData(e.currentTarget);
    
    const DTO = dataForm.getAll('avatar');

    for (var file in DTO){
      dataForm.append('file', file);
    }
    
    idDataFormFilled
    
    console.log(dataForm);
    
    const result = await sendImgOfNewCar(DTO)
    console.log(result);
    
  }

  return (
    <CarRegisterContainer>
      <h2>Cadastre seu veiculo</h2>
      
      <form className='car-info-form' name="car_info_form" onSubmit={handleInfoSubmit}>
        <label>Modelo/Marca
          <input name="infoCar" type="text" placeholder='Ex: Astra Sedam GM'/>
        </label>
        <label>Ano de Fabricacao
          <input name="infoCar" type="number" placeholder='Ex: 2000'/>
        </label>
        <label>Cor do Veiculo
          <input name="infoCar" type="text" placeholder='Ex: Prata'/>
        </label>
        <label>Valor/Preco
          <input name="infoCar" type="number" placeholder='Ex: 35000'/>
        </label>
        <label>Quantas portas
          <input name="infoCar" type="number" min={2} max={9} placeholder='Ex: 4'/>
        </label>
        <label>Quantos assentos
          <input name="infoCar" type="number" min={2} max={9} placeholder='Ex: 5'/>
        </label>
        <label>Cidade
          <input name="infoCar" type="text" placeholder='Ex: Ubirata'/>
        </label>
        <label>Estado 
          <input name="infoCar" type="text" placeholder='Ex: Parana'/>
        </label>
        <label>Cambio
          <input name="infoCar" type="text" placeholder='Ex: Automatico'/>
        </label>
        <label>KMs rodados
          <input name="infoCar" type="number" placeholder='Ex: 1500'/>
        </label>

        <button type="submit">Enviar</button>
      </form>

      {infoSended && 
      <form className='car-img-form' name="profile_form" onSubmit={handleImgSubmit}>
          <input
            id="avatar"
            name="avatar"
            accept="image/*"
            type="file"
            multiple
            />
        <button type="submit">Enviar Fotos</button>
      </form>
      }

    </CarRegisterContainer>
  );
}