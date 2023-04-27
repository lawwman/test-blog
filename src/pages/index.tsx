import styles from "../styles/Home.module.css";
import Header from "../components/header";
import { useEffect } from "react";

export default function Home() {
  /* on start up */
  useEffect(() => {
    console.log('blog accessing local storage...')
    console.log(window.localStorage.getItem('testStuff'));
}, []);
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>blog</h1>
      </main>
    </div>
  );
}
