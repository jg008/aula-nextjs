'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Page() {
  const [tarefas, setTarefas] = useState([
    'Aprender React',
    'Estudar CRUD',
    'Criar projeto com Vite'
  ])

  const [texto, setTexto] = useState('')

  function adicionarTarefa() {
    if (texto.trim() === '') return

    setTarefas([...tarefas, texto])
    setTexto('')
  }

  function excluirTarefa(index) {
    const novaLista = tarefas.filter((_, i) => i !== index)
    setTarefas(novaLista)
  }

  function editarTarefa(index) {
    const novoTexto = prompt('Editar tarefa:')

    if (novoTexto === null || novoTexto.trim() === '') return

    const novaLista = [...tarefas]
    novaLista[index] = novoTexto

    setTarefas(novaLista)
  }

  return (
    <main className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Mockup CRUD</h1>

        <input
          type="text"
          placeholder="Digite algo..."
          className={styles.input}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <button
          className={styles.addButton}
          onClick={adicionarTarefa}
        >
          + Adicionar
        </button>

        {tarefas.map((tarefa, index) => (
          <div key={index} className={styles.item}>
            <span>{tarefa}</span>

            <div className={styles.buttons}>
              <button
                className={styles.editButton}
                onClick={() => editarTarefa(index)}
              >
                ✏
              </button>

              <button
                className={styles.deleteButton}
                onClick={() => excluirTarefa(index)}
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}