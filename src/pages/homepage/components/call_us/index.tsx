import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function CallUs() {
    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.box}>
                    <h1>Precisa de uma entrega?</h1>

                    <p>
                        Entre em contacto connosco de modo a obter o plano de
                        pagamento caso pretenda trabalhar connosco.
                    </p>

                    <div>
                        <Link to="#">Solicitar entrega</Link>
                        <Link to="#">Ligue para Nós</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
