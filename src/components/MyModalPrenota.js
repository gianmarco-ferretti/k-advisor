import { Button, Modal, Col, Row } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
//gestione data e ora
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

var htoday = new Date();
var time =
  htoday.getHours() + ":" + htoday.getMinutes() + ":" + htoday.getSeconds();

export default function MyModalPrenota(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={"my-modal-shadow"}>
        <Modal.Header className={"border-0 text-center"}>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={"p-2 font-weight-bold"}
          >
            Prenota ora il tuo ristorante
          </Modal.Title>
        </Modal.Header>
        {/* TODO formattazzione grafica del modal */}
        <Modal.Body>
          <Row className={" text-center"}>
            <Col className>
              <AiFillCalendar style={{ color: "green" }}></AiFillCalendar>
              {/* TODO sistemare la data e l'orologio */}
              <br></br>
              <input type="text" class="form-control" placeholder="Inserisci Data di Nascita" name="dataNascita"
                       onfocus="(this.type='date')" onblur="(this.type='text')" required/>
            </Col>

            <Col className>
              <BsFillClockFill style={{ color: "green" }}></BsFillClockFill>
              <br></br>
             
              <input type="text" id="modaltime" placeholder={time} className="modalinput" />
            </Col>
            <Col className>
              <BsFillPersonFill style={{ color: "green" }}></BsFillPersonFill>
              
              <br></br>
              <input type="text" id="modalperson" placeholder="2 ospiti" className="modalinput" />
          
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className={"pb-5 justify-content-center border-0"}>
          <Button onClick={props.onHide} className={"bg-dark border-dark"}>
            Prenota Subito
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
