import Link from 'next/link';

import styles from "./page.module.css";
function Atividades02() {
    return(
        <div>
            <h1>Atividade 2</h1>
            <p>Segunda Atividade de React</p>
            <p>Atividade feita em Aula, baseada nos conhecimentos aprendidos em Sala</p>
            <h2>Curiosidades Sobre a Copa do Mundo</h2>
            <h3>Fatos históricos e recordes:</h3>
            <p>A primeira Copa do Mundo foi realizada em 1930 no Uruguai,
             com apenas 13 seleções, e o país anfitrião sagrou-se campeão ao vencer a Argentina por 4 a 2. 
             Desde então, o torneio ocorre a cada quatro anos, exceto em 1942 e 1946, devido à Segunda Guerra Mundial. 
             O Brasil é o país com mais títulos, totalizando cinco conquistas, e é a única seleção a ter participado de todas as edições. 
             Alemanha e Itália possuem quatro títulos cada, enquanto a Argentina tem três.
             Pelé é o único jogador a vencer três Copas do Mundo (1958, 1962 e 1970),. 
             O alemão Miroslav Klose é o maior artilheiro da história do torneio, com 16 gols, e o francês Just Fontaine detém o recorde de mais gols em uma única edição, com 13 em 1958. 
             Lionel Messi e Cristiano Ronaldo são os únicos a marcar em quatro edições diferentes, enquanto Ronaldo Fenômeno é o segundo maior artilheiro, com 15 gols. 
             Momentos inusitados Alguns episódios curiosos incluem: o jogador uruguaio Héctor Castro, apelidado de “o divino manco”, que venceu a Copa de 1930 sem uma das mãos; 
             o primeiro gol da história da Copa, marcado pelo francês Lucien Laurent em 1930; 
             e um cachorro que invadiu o campo durante Brasil x Inglaterra em 1962. 
             A maior goleada da história ocorreu em 1982, quando a Hungria venceu El Salvador por 10 a 1.</p>
       
        <br></br>

        <label>Esvcreva um Comentário sobre as curiosidades acima</label>

        <br></br>
        <br></br>

        <textarea></textarea>

        <button>Enviar</button>
        
        </div>

    )
}

export default Atividades02;