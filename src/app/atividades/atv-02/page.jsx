import Link from 'next/link';

import styles from "./page.module.css";
function Atividades02() {
    return(
        <div>
            <h1>Atividade 2</h1>
            <p>Segunda Atividade de React</p>
            <p>Atividade feita em Aula, baseada nos conhecimentos aprendidos em Sala</p>
            <Link href="/exemplos/atv-02">Atividade 2</Link>
        </div>
    )
}

export default Atividades02;