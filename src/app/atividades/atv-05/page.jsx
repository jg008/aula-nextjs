'use client'

import { useState } from "react"
import styles from "./page.module.css"

export default function Atividade04() {
  const [produto, setProduto] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [lista, setLista] = useState([])

  function adicionarItem(e) {
    e.preventDefault()

    if (!produto || !quantidade) return

    const novoItem = {
      id: Date.now(),
      produto,
      quantidade
    }

    setLista([...lista, novoItem])

    setProduto("")
    setQuantidade("")
  }

  function removerItem(id) {
    const novaLista = lista.filter((item) => item.id !== id)
    setLista(novaLista)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Lista de Compras</h1>

        <form onSubmit={adicionarItem} className={styles.form}>
          <input
            type="number"
            placeholder="Qtd"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />

          <input
            type="text"
            placeholder="Produto..."
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />

          <button type="submit">Adicionar</button>
        </form>

        {lista.length > 0 && <h2>Itens adicionados</h2>}

        <ul className={styles.lista}>
          {lista.map((item) => (
            <li key={item.id} className={styles.linha}>
              <span className={styles.conteudo}>
                {item.quantidade}x {item.produto}
              </span>

              <button
                className={styles.deleteBtn}
                onClick={() => removerItem(item.id)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}