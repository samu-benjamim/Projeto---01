import styles from "./styles.module.css";

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cyclesDots}>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.restTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.restTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.restTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.longrestTime}`}></span>
      </div>
    </div>
  );
}
