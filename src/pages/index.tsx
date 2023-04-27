import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>blog</h1>
      </main>
    </div>
  );
}
