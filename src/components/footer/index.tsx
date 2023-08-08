import style from "./style.module.css";
// import img from "./logo.png";

export default function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.row}>
                <div>
                    {/* <img src={img} alt="" /> */}
                    <p>
                        Entrega-lá - a solução perfeita para atender às suas
                        necessidades de entrega em Moçambique!
                    </p>
                </div>

                <div>
                    <h3>Informações de Contacto</h3>
                    <a href="#">
                        CHAMANCULO A, RUA MARCELINO DOS SANTOS, Q23, CASA Nº 515
                    </a>
                    <a href="#">Ligações: +258 84 2033333 </a>
                    <a href="#">WhatsApp: 258 84 2033333 </a>
                    <a href="#">info@maxanamicrocredito.co.mz </a>
                </div>

                <div>
                    <h3>Acesso Rápido</h3>
                    <a href="/">Início</a>
                    <a href="/about">Sobre Nós </a>
                    <a href="/services">Serviços</a>
                    <a href="/contact">Contactos </a>
                    <a href="/faqs">faq's </a>
                </div>
            </div>

            <div className={style.reference}>
                Copyright © 2023 Maxana Microcrédito
            </div>
        </footer>
    );
}
