"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Provider from "./provider";

export default function ButtonSignin() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Provider>
        {session ? (
          <>
            <button onClick={() => signOut({callbackUrl: 'http://localhost:3000/'})}>Sair</button>
          </>
        ) : (
          <>
            <button onClick={() => signIn("google", {callbackUrl: 'http://localhost:3000/home'})}>Entrar com Google</button>
            <button onClick={() => signIn("github", {callbackUrl: 'http://localhost:3000/home'})}>Entrar com Github</button>
          </>
        )}
      </Provider>
    </>
  );
}
