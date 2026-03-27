'use client'

import { useState } from "react";

import styles from './page.module.css';

export default function Atividade3() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }
    function handleredução () {
        setNum(num - 1);
    }

    return (
        
        <div className={styles.container}>

            <h1>Atividade 2</h1>
            <p>Contador incrementando e decrementando com uso de useState do React</p>

            <label className={styles.texto}>{`Contador: ${num}`}</label>


            <label 
                onClick={() => handleIncrementa()}
                className={styles.botao}
            >+1</label>
            

            <label 
                onClick={() => handleredução()}
                className={styles.botao}
            >-1</label>
            
        </div>
    );
}