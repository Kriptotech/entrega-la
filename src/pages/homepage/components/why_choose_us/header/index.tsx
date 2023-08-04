import style from "./style.module.css";

export default function Header() {
    return (
        <div className={style.container}>
            <div>
                <h2>Por que trabalhar connosco?</h2>

                <p>
                    Em nossa empresa, você encontrará um ambiente colaborativo,
                    onde valorizamos o trabalho em equipe e a troca de ideias.
                    Acreditamos que a diversidade de perspectivas enriquece
                    nosso trabalho e nos ajuda a alcançar resultados ainda
                    melhores.
                </p>
            </div>
        </div>
    );
}
