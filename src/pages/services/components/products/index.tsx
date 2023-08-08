import { medicines } from "./medicines";
import { products } from "./products";
import style from "./style.module.css";
import { useState } from "react";

export default function Products() {
    const [index, setIndex] = useState(1);
    return (
        <div className={style.container}>
            <h1>Nossos produtos</h1>

            <div className={style.header}>
                <button
                    className={index == 1 ? style.active : style.dhsghhassa}
                    onClick={() => setIndex(1)}
                >
                    Produtos de 1º necessidade
                </button>
                <button
                    className={index == 2 ? style.active : style.dhsghhassa}
                    onClick={() => setIndex(2)}
                >
                    Medicamentos de 1º necessidade
                </button>
            </div>

            <div className={style.row}>
                {index == 1 ? (
                    <>
                        {products.map((v, i) => {
                            return (
                                <div key={i} className={style.item}>
                                    <h3>{v?.name}</h3>
                                    <span>{v?.price}</span>
                                    <small>{v?.text ? v?.text : "__"} </small>
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=258864660991&text=Olá, como podemos ajudar com o produto: ${
                                            v?.name
                                        }, preço ${v?.price} ${
                                            v?.text && `(${v?.text})`
                                        }?`}
                                    >
                                        Solicitar
                                    </a>
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <>
                        {medicines.map((v, i) => {
                            return (
                                <div key={i} className={style.item}>
                                    <h3>{v?.name}</h3>
                                    <span>{v?.price}</span>
                                    <small>{v?.text ? v?.text : "__"} </small>
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=258864660991&text=Olá, como podemos ajudar com o medicamento: ${
                                            v?.name
                                        }, preço ${v?.price} ${
                                            v?.text && `(${v?.text})`
                                        }?`}
                                    >
                                        Solicitar
                                    </a>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
}
