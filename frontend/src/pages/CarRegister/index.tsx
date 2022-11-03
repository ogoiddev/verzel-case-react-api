import { useRef, useState } from "react";
import { CarRegisterContainer } from "./styles";

export default function CarRegister() {
  const [img, setImg] = useState([])
  const filesElement = useRef(null);


  const sendFile = async () => {
    const dataForm = new FormData();
    
    for (const file of filesElement.current.files) {
      dataForm.append('file', file);
    }
    const res = await fetch(`http://localhost:3001/upload`, {
      method: 'POST',
      body: dataForm,
    });
    const data = await res.json();
    setImg(data.files)
    console.log(data);
  };


  return (
    <CarRegisterContainer>
      <div>
        <input type="file" multiple ref={filesElement} />
        <button onClick={sendFile}>Send file</button>

    </div>
    </CarRegisterContainer>
  );
}
