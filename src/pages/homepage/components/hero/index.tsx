import { Link } from "react-router-dom";
import Header from "../../../../components/header";
import style from "./style.module.css";
import { MapPin } from "phosphor-react";

export default function Hero() {
    return (
        <div className={style.container}>
            <Header />

            <div className={style.box}>
                <h1>Entrega-lá! o teu serviço de delivery preferido...</h1>

                {/* <strong>CRÉDITO COMERCIANTE</strong> */}

                <p>
                    Bem-vindo ao Entrega-lá - a solução perfeita para atender às
                    suas necessidades de entrega em Moçambique! Com o
                    Entrega-lá, você pode desfrutar de um serviço de delivery
                    eficiente e confiável!
                </p>

                <div>
                    <Link to="#">Requisitos</Link>
                    <Link to="/contact">Contacte-nos</Link>
                </div>

                <span>
                    <MapPin weight="fill" color="#fff" size={18} />
                    MAPUTO - CHAMANCULO A, RUA MARCELINO DOS SANTOS, Q23, CASA
                    Nº 515
                </span>
            </div>
        </div>
    );
}
