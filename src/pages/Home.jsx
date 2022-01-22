import Form from "../components/Form/Form";
import Instructions from "../components/Instructions/Instructions";
import ModalInfo from "../components/ModalInfo/ModalInfo";

import styles from "./Home.module.css"

function Home({ modalSelected, modalShow, setModalShow }) {
  return (
    <>
      <ModalInfo
        modalSelected={modalSelected}
        show={modalShow}
        onHide={() => setModalShow(false)}
        title="Title"
        subtitle="Subtitle"
        text="Text"
      />
      <div className={styles.container}>
        <Form className={styles.form} />
        <Instructions className={styles.instructions} />
      </div>
    </>
  );
}

export default Home;
