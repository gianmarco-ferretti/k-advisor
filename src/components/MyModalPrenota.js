import {Button, Modal} from "react-bootstrap";

export default function MyModalPrenota(props) {
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <div className={'my-modal-shadow'}>
                <Modal.Header className={'border-0 text-center'}>
                    <Modal.Title id="contained-modal-title-vcenter" className={'p-2 font-weight-bold'}>
                        Prenota ora il tuo ristorante
                    </Modal.Title>
                </Modal.Header>
                {/* TODO formattazzione grafica del modal */}
                <Modal.Body>
                    <p>
                 Lorem ipsum
                    </p>
                </Modal.Body>
                <Modal.Footer className={'pb-5 justify-content-center border-0'}>
                    <Button onClick={props.onHide} className={'bg-dark border-dark'}>Prenota Subito</Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}
