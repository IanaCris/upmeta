import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = { //faz a tipagens do parâmetros que serão recebidos
  saleId: number;
}

function handleClick(id: number) {
  axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      console.log("Sucesso");
    });
}

function NotificationButton({saleId}: Props) { //coloca como argumento da função //enviar o props na funcao do click
  return (
    <div className="dsmeta-red-btn" onClick={() => {handleClick(saleId)}}> 
      <img src={icon} alt="Notificar" />
    </div>
  )
}

export default NotificationButton;
