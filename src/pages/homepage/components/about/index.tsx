import { Phone } from "phosphor-react";
import img from "./6.jpg";
import style from "./style.module.css";

export default function About() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <h1>Serviço de delivery...</h1>
                <p className={style.bold}>
                    Com o Entrega-lá, você pode desfrutar de um serviço de
                    delivery eficiente e confiável, tanto para encomendas de
                    comida quanto para objetos interprovinciais. Diga adeus às
                    preocupações com entregas atrasadas e incômodos logísticos.
                </p>
                <p>
                    Experimente o Entrega-lá hoje e experimente a conveniência
                    de um serviço de entrega de alto padrão. Seja para o almoço
                    no escritório ou para enviar um pacote para um ente querido
                    em outra província, conte conosco para proporcionar uma
                    experiência excepcional em cada entrega. Não espere mais,
                    junte-se ao Entrega-lá e descubra como tornar a vida mais
                    fácil nunca foi tão simples.
                </p>

                <div className={style.row}>
                    <Phone color="#f87423" weight="fill" size={40} />
                    <div>
                        <span>Fale connosco:</span>
                        <span>+258 84 2033333</span>
                    </div>
                </div>
            </div>

            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
}
