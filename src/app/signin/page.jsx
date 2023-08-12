import ButtonBack from "../components/buttonBack";
import ButtonSignin from "../components/buttonSignin";
import styles from "./page.module.css";

export default function SigninPage() {
  return (
    <>
      <main className={styles.main}>
        <h1>Fazer Login</h1>
        <p>
          Essa página é responsável pelos meios de autenticação - Para o usuário
          poder entrar no site, app etc, ele tem que fazer o login
        </p>
        <ButtonSignin />
        <ButtonBack />
      </main>
    </>
  );
}
