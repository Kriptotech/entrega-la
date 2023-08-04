import style from "./style.module.css";
import img from "./logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.row}>
                <div>
                    <img src={img} alt="" />
                    <p>
                        A Maxana está empenhada em dinamizar os seus objectivos
                        e impulsionar o seu negócio.
                    </p>
                </div>

                <div>
                    <h3>Informações de Contacto</h3>
                    <Link to="#">
                        CHAMANCULO A, RUA MARCELINO DOS SANTOS, Q23, CASA Nº 515
                    </Link>
                    <Link to="#">Ligações: +258 84 2033333 </Link>
                    <Link to="#">WhatsApp: 258 84 2033333 </Link>
                    <Link to="#">info@maxanamicrocredito.co.mz </Link>
                </div>

                <div>
                    <h3>Acesso Rápido</h3>
                    <Link to="/">Início</Link>
                    <Link to="/about">Sobre Nós </Link>
                    <Link to="/services">Serviços</Link>
                    <Link to="/contact">Contactos </Link>
                    <Link to="/faqs">faq's </Link>
                </div>
            </div>

            <div className={style.reference}>
                Copyright © 2023 Maxana Microcrédito
            </div>
        </footer>
    );
}
