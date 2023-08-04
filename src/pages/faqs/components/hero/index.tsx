import Header from "../../../../components/header";
import style from "./style.module.css";

export default function Hero() {
    return (
        <div className={style.container}>
            <div
                style={{
                    backgroundColor: "#192943",
                }}
            >
                <Header />
            </div>

            <div className={style.box}>
                <h1>Perguntas Frequêntes</h1>
            </div>
        </div>
    );
}
