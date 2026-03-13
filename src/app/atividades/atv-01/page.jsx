import Link from 'next/link';

import styles from "./page.module.css";
function Atividades01() {
    return(
        <div>
            <h1>Atividade 1</h1>
            <p>Primeira Atividade em sala de aula do React</p>
            <Link href="/exemplos/atv-01">Atividade 1</Link>
        </div>
    )
}

export default Atividades01;