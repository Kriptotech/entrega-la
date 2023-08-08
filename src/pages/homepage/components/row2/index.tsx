import style from "./style.module.css";

export default function Row2() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <h1>Bônus Entrega Grátis</h1>
                <span>1 Mês</span>
                <p>
                    clientes com mais de 5 solicitações <br />
                    por 1 Mês
                </p>

                <div className={style.line} />

                <span>20 %</span>
                <p>
                    Desconto de 20% em Encomendas <br />
                    acima de 1000mt.
                </p>
            </div>

            <div className={style.right}>
                <h2>Requisitos</h2>
                <p>1 - Ter solicitado os nossos serviços dentro de 7 dias. </p>
                <p>2 - Encomendas recorrentes dentro e fora da cidade.</p>
            </div>
        </div>
    );
}
