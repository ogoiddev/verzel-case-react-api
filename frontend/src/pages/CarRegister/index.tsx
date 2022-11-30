import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../Context/LocalStorage';
import { saveNewCar, sendImgOfNewCar } from '../../services/CarsDataApi';
import { CarRegisterContainer } from "./styles";

export default function CarRegister() {
  const [infoSended, setInfoSended] = useState<boolean>(false);
  const [idDataFormFilled, setIdDataFormFilled] = useState<string>('');
  const [file, setFile] = useState<any>(undefined);
  const [userToken, setUserToken] = useState<string>("");
  const navigate = useNavigate()

  useEffect(() => {
    if (!getTokenFromLocalStorage('token')) {
      navigate('/login');
    } else {
      setUserToken(getTokenFromLocalStorage('token') || "")
    }
  }, [])

  const handleInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataForm = new FormData(e.currentTarget);

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

    const result = await saveNewCar(userToken, dataToSave)

    if (!result) {
      return alert('Tem algo errado com as informações, tente novamente!');
    }
    
    setInfoSended(true);
    setIdDataFormFilled(result._id);

    alert('Cadastro realizado com sucesso, agora envie uma foto para o anuncio')
    
  }

  const handleImgSubmit = async () => {
    if (!file) {
      return alert('Arquivo nao carregado');
    }

    const data = new FormData()
    data.append('file', file)
    
    const result = await sendImgOfNewCar(userToken, idDataFormFilled, data)

    if (!result) {
      return alert('Tem algo errado com o arquivo, tente novamente!');
    }

    alert('Fotos enviadas com sucesso')
    console.log(result)

    setInfoSended(false);
  }

  return (
    <CarRegisterContainer>
      <h2>Cadastre seu veiculo</h2>
      
      {!infoSended &&
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
      }
      {infoSended &&
        <>
          <form className='car-img-form' action="#">
            <input type="file" id="file" accept='.*' onChange={e => {
              const file = e.target.files ? e.target.files[0] : '';
              setFile(file)
            }} />
          <button type="button" onClick={handleImgSubmit}>Enviar Fotos</button>
          </form>
        </>
      
      }

    </CarRegisterContainer>
  );
}