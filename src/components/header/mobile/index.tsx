import { List, X } from "phosphor-react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={style.container}>
            <nav>
                <span>Entrega-lá</span>

                {isOpen ? (
                    <X
                        size={30}
                        weight="bold"
                        color="#fff"
                        onClick={() => setIsOpen(false)}
                    />
                ) : (
                    <List
                        size={30}
                        weight="bold"
                        color="#fff"
                        onClick={() => setIsOpen(true)}
                    />
                )}
            </nav>

            {isOpen && (
                <div>
                    <Link to="/">Início</Link>
                    <Link to="/about">Sobre Nós</Link>
                    <Link to="/services">Serviços</Link>
                    <Link to="/contact">Contactos</Link>
                    <Link to="/faqs">FAQ’s</Link>
                    <Link
                        to="https://api.whatsapp.com/send?phone=258864660991&text=Ol%C3%A1,%20como%20podemos%20ajudar?"
                        target="_blank"
                    >
                        CONTACTAR GESTOR
                    </Link>
                </div>
            )}
        </header>
    );
}
