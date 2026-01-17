import { OctagonX } from "lucide-react";
import styles from "./error.module.scss";

const Error = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Üzgünüz bir sorun oluştu</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;
