import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";

const Profile = ({ openProfile }) => {
  //   const [modalShow, setModalShow] = useState(false);
  //   useEffect(() => {
  //     setModalShow(openProfile);
  //   }, []);
  function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Simiyu</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
          <Container>
            <Row>
              <Col xs={12} md={4}>
                Name:
              </Col>
              <Col xs={6} md={8}>
                Simuyu Omondi
              </Col>
              <Col xs={12} md={4}>
                Farmer Id:
              </Col>
              <Col xs={6} md={8}>
                32429
              </Col>
              <Col xs={12} md={4}>
                Residence:
              </Col>
              <Col xs={6} md={8}>
                Naitiri
              </Col>
              <Col xs={12} md={4}>
                Category:
              </Col>
              <Col xs={6} md={8}>
                Outgrower
              </Col>
              <Col xs={12} md={4}>
                Fields:
              </Col>
              <Col xs={6} md={8}>
                5
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Body className='show-grid'>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                Contact:
              </Col>
              <Col xs={6} md={4}>
                Phone No:
              </Col>
              <Col xs={6} md={4}>
                07123456789
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}></Col>
              <Col xs={6} md={4}>
                email:
              </Col>
              <Col xs={6} md={4}>
                email@email.com
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}></Col>
              <Col xs={6} md={4}>
                Phone No:
              </Col>
              <Col xs={6} md={4}>
                07123456789
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <React.Fragment>
      {/* <Button variant='primary' onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button> */}

      <MydModalWithGrid show={openProfile} />
    </React.Fragment>
  );
};

export default Profile;
