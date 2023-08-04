import { MapPin, MessengerLogo, Phone } from "phosphor-react";
import style from "./style.module.css";

export default function About() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.row}>
                    <MapPin color="#f87423" weight="fill" size={40} />
                    <div>
                        <span>Endereço:</span>
                        <span>
                            MAPUTO - CHAMANCULO A, RUA MARCELINO DOS SANTOS,
                            Q23, CASA Nº 515
                        </span>
                    </div>
                </div>
                <div className={style.row}>
                    <MessengerLogo color="#f87423" weight="fill" size={40} />
                    <div>
                        <span>Nosso Email Geral:</span>
                        <span>info@maxanamicrocredito.co.mz</span>
                    </div>
                </div>
                <div className={style.row}>
                    <Phone color="#f87423" weight="fill" size={40} />
                    <div>
                        <span>Fale connosco:</span>
                        <span>+258 84 2033333</span>
                    </div>
                </div>
            </div>

            <div className={style.right}>
                <h1>Estamos Sempre disponíveis para ajudar</h1>
                <p className={style.bold}>
                    Estamos aqui para ajudar! Entre em contato conosco para
                    qualquer dúvida, suporte ou feedback. Nossa equipe amigável
                    está pronta para atendê-lo. Use nossos canais de comunicação
                    para nos alcançar. Estamos ansiosos para ouvir de você e
                    tornar suas experiências de entrega ainda mais incríveis.
                </p>
                <p>
                    Valorizamos a transparência e a confiança em nossas relações
                    com os clientes. Nossos especialistas irão orientá-lo em
                    cada etapa do processo, esclarecendo dúvidas, oferecendo
                    opções personalizadas e garantindo que você tome boas
                    decisões.
                </p>
            </div>
        </div>
    );
}
