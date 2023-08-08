import style from "./style.module.css";

export default function Row() {
    return (
        <div className={style.container}>
            <div className={style.item1}>
                <strong>01.</strong>

                <div>
                    <h3>Confiável</h3>
                    <p>
                        Oferecemos um serviço de delivery rápido e confiável,
                        garantindo que suas encomendas cheguem no menor tempo
                        possível, sem abrir mão da segurança e proteção das
                        embalagens. Com nossa entrega expressa, você pode contar
                        com a comodidade de receber seus produtos no conforto do
                        seu lar, sem preocupações.
                    </p>
                </div>

                <div></div>
            </div>

            <div className={style.item2}>
                <strong>02.</strong>

                <div>
                    <h3>Atendimento</h3>
                    <p>
                        Nossa equipe está comprometida em fornecer o melhor
                        atendimento ao cliente, sempre pronta para ajudar e
                        responder a quaisquer dúvidas que possam surgir durante
                        o processo de entrega. Além disso, garantimos a
                        satisfação de nossos clientes, pois estamos empenhados
                        em superar suas expectativas em cada pedido.
                    </p>
                </div>

                <div></div>
            </div>

            <div className={style.item3}>
                <strong>03.</strong>

                <div>
                    <h3>Segurança</h3>
                    <p>
                        Com nossos serviços, você pode ter a tranquilidade de
                        que suas encomendas serão tratadas com cuidado e
                        carinho, chegando ao destino de forma segura e intacta.
                        A sua satisfação é a nossa prioridade, e trabalhamos
                        incansavelmente para garantir que sua experiência de
                        entrega seja sempre positiva.
                    </p>
                </div>

                <div></div>
            </div>
        </div>
    );
}
