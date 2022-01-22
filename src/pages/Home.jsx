import Form from "../components/Form/Form";
import Instructions from "../components/Instructions/Instructions";
import ModalInfo from "../components/ModalInfo/ModalInfo";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from "./Home.module.css"

function Home({ modalSelected, modalShow, setModalShow }) {
  return (
    <>
      <ModalInfo
        modalSelected={modalSelected}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className={styles.container}>
        <Container >
          <Row>
            <Col><Form className={styles.form} /></Col>
            <Col><Instructions className={styles.instructions} /></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
