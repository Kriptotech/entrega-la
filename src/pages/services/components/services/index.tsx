import { Car, Pill, Share, ShoppingBag, Star, File } from "phosphor-react";
import style from "./style.module.css";

export default function Services() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.item}>
                    <Star size={50} weight="fill" />
                    <strong>Entrega de Comida Rápida</strong>
                    <p>
                        Sabores incríveis entregues na sua porta. Peça sua
                        comida favorita e delicie-se sem sair de casa.
                    </p>
                </div>

                <div className={style.item}>
                    <Share size={50} weight="fill" />
                    <strong>Envio de Encomendas</strong>
                    <p>
                        Entregas seguras e ágeis para enviar pacotes e
                        encomendas interprovinciais. Confie em nossa eficiência.
                    </p>
                </div>

                <div className={style.item}>
                    <Car size={50} weight="fill" />
                    <strong>Entrega Expressa</strong>
                    <p>
                        Solução rápida para entregas urgentes. Conte com nossa
                        equipe dedicada para envios rápidos e seguros.
                    </p>
                </div>

                <div className={style.item}>
                    <Pill size={50} weight="fill" />
                    <strong>Entrega de Medicamentos</strong>
                    <p>
                        Cuidamos da sua saúde, entregando medicamentos e
                        produtos farmacêuticos com total responsabilidade.
                    </p>
                </div>

                <div className={style.item}>
                    <ShoppingBag size={50} weight="fill" />
                    <strong>Entrega de Compras</strong>
                    <p>
                        Compras de supermercado entregues em casa. Economize
                        tempo e energia com nosso serviço confiável.
                    </p>
                </div>

                <div className={style.item}>
                    <File size={50} weight="fill" />
                    <strong>Entrega de Documentos</strong>
                    <p>
                        Serviço especializado para entregas de documentos
                        importantes. Garantimos a confidencialidade e rapidez.
                    </p>
                </div>
            </div>
        </div>
    );
}
