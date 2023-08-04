import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Desktop() {
    return (
        <header className={style.container}>
            <nav>
                <span>Entrega-lá</span>

                <div>
                    <Link to="/">Início</Link>
                    <Link to="/about">Sobre Nós</Link>
                    <Link to="/services">Serviços</Link>
                    <Link to="/contact">Contactos</Link>
                    <Link to="/faqs">FAQ’s</Link>
                    <Link
                        target="_blank"
                        to="https://api.whatsapp.com/send?phone=258842033333&text=Ol%C3%A1,%20como%20podemos%20ajudar?"
                    >
                        CONTACTAR GESTOR
                    </Link>
                </div>
            </nav>
        </header>
    );
}
