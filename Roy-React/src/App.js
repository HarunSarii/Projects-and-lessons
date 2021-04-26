// import Inline from "./components/Inline/Inline";
// import StyleSheet from "./components/stylesheet/StyleSheet";
// import ModuleBtn from "./components/modelue.Css/ModuleBtn";
import Sassy from "./components/sasy/Sassy";

import "./styles.css";
import styles from "./styles.module.css";

const App = () => {
  return (
    <div>
      {/* <Inline /> */}
      {/* <StyleSheet primary={false} /> */}
      {/* <h1>Module Css</h1> */}
      {/* <ModuleBtn btnClass="primary" btnName="Module" />
      <ModuleBtn btnClass="secondary" btnName="CSS" /> */}
      <Sassy />
      {/* <h1 className="error">Something Went Wrong</h1>
      <h1 className={styles.success}>200 OK success</h1>
      <h2 className={styles.warning}>Warning</h2> */}
    </div>
  );
};

export default App;
