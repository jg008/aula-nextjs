'use client'
import styles from "./page.module.css";
import { useState } from "react";

export default function Exemplo03() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }

    return (
        <>
        <div className={styles.adicionarinfo}>
            <label>{`Contador: ${num}`}</label>            
            <button onClick={() => handleIncrementa()}>+1</button>
            </div>
        </>
    );
}
