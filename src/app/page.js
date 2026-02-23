import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>React com Next JS</h1>
    </div>
  );
}

const Card = () => {
  return (
    <div>
      <h3>Aula Introdução</h3>
      <h3>Aula Estilização</h3>
      <h3>Aula Componentes</h3>
    </div>
  );
}