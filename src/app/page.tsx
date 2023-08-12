import ButtonEnter from "./components/buttonEnter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Página inicial</h1>
        <p>Essa página pode ser de introdução do site, app etc</p>
        <ButtonEnter />
      </main>
    </>
  );
}
