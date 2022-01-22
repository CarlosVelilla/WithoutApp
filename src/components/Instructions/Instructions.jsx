import logo from "../../assets/img/icons/logo.svg"

import styles from "./Instructions.module.css"

function Instructions() {
  return (
    <aside className={styles.container}>
      <img src={logo} alt="WithoutApp logo" className={styles.logo} />
      <h2>Welcome!</h2>
      <p>Using this simple form you can text anyone via WhatsApp, even if you don't have their number. You must select a country code or type it, write a message if you want, and... that's it!</p>
    </aside>
  );
}

export default Instructions;
