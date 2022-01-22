import logo from "../../assets/img/icons/logo-white.svg"

import styles from './Header.module.css'

function Header({ setModalSelected, setModalShow }) {
  const handleButton = (modalType) => {
    setModalSelected(modalType)
    setModalShow(true)
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="WithoutApp logo" className={styles.header__logo} />
      <div>
        <button onClick={() => {handleButton("workModal")}} className={styles.header__btn_work}>How does it work?</button>
        <button onClick={() => {handleButton("creditsModal")}} className={styles.header__btn_credits}>Credits</button>
      </div>
    </header>
  );
}

export default Header;
