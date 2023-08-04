import {
    Code,
    Globe,
    PaperPlaneTilt,
    PersonSimple,
    Star,
} from "phosphor-react";
import Header from "./header";
import style from "./style.module.css";

export default function Goals() {
    return (
        <div className={style.container}>
            <Header />

            <div className={style.box}>
                <div className={style.item}>
                    <Star size={50} weight="fill" />
                    <strong>Eficiência nas Entregas</strong>
                    <p>
                        Garantir entregas rápidas e pontuais para proporcionar a
                        melhor experiência de serviço ao cliente.
                    </p>
                </div>

                <div className={style.item}>
                    <PaperPlaneTilt size={50} weight="fill" />
                    <strong>Ampla Cobertura Nacional</strong>
                    <p>
                        Expandir nossa rede para abranger todas as províncias de
                        Moçambique, tornando-nos a escolha número um em entregas
                        interprovinciais.
                    </p>
                </div>

                <div className={style.item}>
                    <PersonSimple size={50} weight="fill" />
                    <strong>Satisfação do Cliente</strong>
                    <p>
                        Priorizar a satisfação do cliente, oferecendo
                        atendimento excepcional, comunicação clara e resolução
                        ágil de problemas.
                    </p>
                </div>

                <div className={style.item}>
                    <Globe size={50} weight="fill" />
                    <strong>Responsabilidade Ambiental</strong>
                    <p>
                        Implementar práticas ecológicas para minimizar nosso
                        impacto ambiental e promover entregas sustentáveis.
                    </p>
                </div>

                <div className={style.item}>
                    <Code size={50} weight="fill" />
                    <strong>Inovação Tecnológica</strong>
                    <p>
                        Investir em tecnologia de ponta para aprimorar nossos
                        serviços, proporcionando um processo de entrega ainda
                        mais eficiente e seguro.
                    </p>
                </div>

                <div className={style.item}>
                    <Star size={50} weight="fill" />
                    <strong>Ética nos negócios</strong>
                    <p>
                        Priorizar a integridade, transparência e
                        responsabilidade em todas as operações, aderindo a
                        padrões éticos rigorosos e evitando práticas
                        prejudiciais à sociedade.
                    </p>
                </div>
            </div>
        </div>
    );
}
