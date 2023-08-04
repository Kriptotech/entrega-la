import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import style from "./style.module.css";

export default function Question({ question, response }: any) {
    const [IsOpen, setIsOpen] = useState(false);

    return (
        <div className={style.container}>
            <div onClick={() => setIsOpen(!IsOpen)}>
                <strong>{question}</strong>
                {IsOpen ? (
                    <CaretUp color="#e1e1e8" weight="bold" size={20} />
                ) : (
                    <CaretDown color="#e1e1e8" weight="bold" size={20} />
                )}
            </div>

            {IsOpen && <p>{response}</p>}
        </div>
    );
}
