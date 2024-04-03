import styles from "./footnotes.module.css"

export default function Footnotes() {
  return (
    <div className={`footnotes ${styles.footnoteContainer}`}>
      <div className={styles.otherPagesContainer}>
        <p><b>Other Sites</b></p>
        <div className={styles.otherPagesList}>
          <p><a href="http://yangfecta.com/">Yangfecta</a></p>
          <p><a href="https://itch.io/profile/mythicalengineer">My Itch Page</a></p>
        </div>
      </div>
      <p className={styles.copyright}>© 2022 Saajan Maslanka</p>
    </div>
  );
}