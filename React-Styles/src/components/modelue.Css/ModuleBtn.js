import styles from "./ModuleBtn.module.css";

const ModuleBtn = ({ btnClass, btnName }) => {
  return (
    <div className={styles.main}>
      <button className={styles[btnClass]}>{btnName}</button>
    </div>
  );
};

export default ModuleBtn;
