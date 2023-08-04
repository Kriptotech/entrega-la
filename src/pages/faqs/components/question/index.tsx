import style from "./style.module.css";
import Question from "./question";

export default function Questions() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.item}>
                    <span>Mais Comuns</span>

                    <div className={style.right}>
                        <Question
                            question="Como faço para rastrear minha encomenda?"
                            response={`Para rastrear sua encomenda, acesse a página "Rastreamento" e insira o número de rastreio fornecido em seu e-mail de confirmação. Em seguida, clique em "Buscar" para acompanhar o status em tempo real.`}
                        />

                        <Question
                            question="Quais são as formas de pagamento aceitas?"
                            response="Aceitamos pagamentos em dinheiro no ato da entrega e também oferecemos opções de pagamento online, como cartões de crédito e transferências bancárias para maior comodidade."
                        />

                        <Question
                            question="Qual é o prazo de entrega padrão?"
                            response="O prazo de entrega varia dependendo da localização da entrega e do tipo de encomenda. Em geral, para entregas locais, o prazo é de 1 a 3 dias úteis, e para entregas interprovinciais, pode levar de 3 a 7 dias úteis. Entretanto, esforçamo-nos para entregar o mais rápido possível."
                        />
                    </div>
                </div>

                <div className={style.item}>
                    <span>Outras Perguntas</span>

                    <div className={style.right}>
                        <Question
                            question="Posso cancelar ou modificar meu pedido após a confirmação?"
                            response="Sim, é possível cancelar ou modificar seu pedido, desde que entre em contato com nossa equipe de suporte o mais rápido possível. Se o pedido ainda não tiver sido processado para entrega, faremos o possível para atender sua solicitação."
                        />

                        <Question
                            question="Existe um limite de peso ou tamanho para as encomendas?"
                            response="Sim, para garantir uma entrega segura e eficiente, temos limites de peso e tamanho para as encomendas. Normalmente, o peso máximo é de XX kg e o tamanho deve estar dentro de XX cm de altura, XX cm de largura e XX cm de comprimento. Para encomendas acima desses limites, entre em contato conosco para discutir opções personalizadas."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
