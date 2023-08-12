"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import ButtonSignin from "../components/buttonSignin";

export default function HomePage() {
  /*Função responsável por não permitir que o usuário entre
  caso não esteja logado*/
  const { data: session } = useSession({
    required: true,
    //  onUnauthenticated - Responsável para redirecionamento
    //   para página de login quando o usuário n tá logado
    onUnauthenticated() {
      redirect("/signin?callbackUrl=/home");
    },
  });
  return (
    <>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <div>
          <h2>Seja bem-vindo(a) {`${session?.user?.name}`}</h2>
          <p>
            Essa página já fica responsável por ser a &ldquo;home&rdquo; -
            Primeira página após o usuário fazer login
          </p>
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={50}
            height={50}
          />
          <ButtonSignin />
        </div>
      </main>
    </>
  );
}
