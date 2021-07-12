import {Button, Modal, Col, Form} from "react-bootstrap";
import {BsFillPersonFill} from "react-icons/bs";
import {BsFillClockFill} from "react-icons/bs";
import {AiFillCalendar} from "react-icons/ai";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import {addReservation} from "../actions";

const today = new Date();
today.setHours(0, 0, 0, 0)


const SignupSchema = yup.object().shape({
    reservationDate: yup.date().min(today).required(),
    reservationTime: yup.string().required(),
    reservationGuests: yup.number().positive().required()
});

export default function MyModalPrenota(props) {
    const dispatch = useDispatch();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(SignupSchema)
    });

    const onSubmit = (data) => {
        Object.assign(data, {ristorante: props.ristorante.name})
        dispatch(addReservation(data))
    };


    return (
        <Modal{...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <div className={"my-modal-shadow"}>
                <Modal.Header className={"border-0"}>
                    <Modal.Title id="contained-modal-title-vcenter" className={"font-weight-bold m-auto text-center"}>
                        Prenota ora il tuo ristorante
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className={"text-center form-group row"} onSubmit={handleSubmit(onSubmit)}>
                        <Col className={'p-0 '}>
                            <AiFillCalendar className={'my-modal-icon'}></AiFillCalendar>
                            <br></br>
                            <input {...register("reservationDate")} type={'text'}
                                   className="modalinput text-center pt-2"
                                   placeholder="Data"
                                   onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                            {errors.reservationDate && errors.reservationDate.type === "min" &&
                            <p className={'text-danger'}>La data non può essere passata</p>}
                        </Col>
                        <Col className={'p-0'}>
                            <BsFillClockFill className={'my-modal-icon'}></BsFillClockFill>
                            <br></br>
                            <select {...register("reservationTime")} className="modalinput pt-2">
                                <option value="0:00 AM">00:00</option>
                                <option value="0:30 AM">00:30</option>
                                <option value="1:00 AM">01:00</option>
                                <option value="1:30 AM">01:30</option>
                                <option value="2:00 AM">02:00</option>
                                <option value="2:30 AM">02:30</option>
                                <option value="3:00 AM">03:00</option>
                                <option value="3:30 AM">03:30</option>
                                <option value="4:00 AM">04:00</option>
                                <option value="4:30 AM">04:30</option>
                                <option value="5:00 AM">05:00</option>
                                <option value="5:30 AM">05:30</option>
                                <option value="6:00 AM">06:00</option>
                                <option value="6:30 AM">06:30</option>
                                <option value="7:00 AM">07:00</option>
                                <option value="7:30 AM">07:30</option>
                                <option value="8:00 AM">08:00</option>
                                <option value="8:30 AM">08:30</option>
                                <option value="9:00 AM">09:00</option>
                                <option value="9:30 AM">09:30</option>
                                <option value="10:00 AM">10:00</option>
                                <option value="10:30 AM">10:30</option>
                                <option value="11:00 AM">11:00</option>
                                <option value="11:30 AM">11:30</option>
                                <option value="0:00 PM">12:00</option>
                                <option value="0:30 PM">12:30</option>
                                <option value="1:00 PM">13:00</option>
                                <option value="1:30 PM">13:30</option>
                                <option value="2:00 PM">14:00</option>
                                <option value="2:30 PM">14:30</option>
                                <option value="3:00 PM">15:00</option>
                                <option value="3:30 PM">15:30</option>
                                <option value="4:00 PM">16:00</option>
                                <option value="4:30 PM">16:30</option>
                                <option value="5:00 PM">17:00</option>
                                <option value="5:30 PM">17:30</option>
                                <option value="6:00 PM">18:00</option>
                                <option value="6:30 PM">18:30</option>
                                <option value="7:00 PM">19:00</option>
                                <option value="7:30 PM">19:30</option>
                                <option value="8:00 PM" selected="selected">20:00</option>
                                <option value="8:30 PM">20:30</option>
                                <option value="9:00 PM">21:00</option>
                                <option value="9:30 PM">21:30</option>
                                <option value="10:00 PM">22:00</option>
                                <option value="10:30 PM">22:30</option>
                                <option value="11:00 PM">23:00</option>
                                <option value="11:30 PM">23:30</option>
                            </select>
                        </Col>
                        <Col className={'p-0'}>
                            <BsFillPersonFill className={'my-modal-icon'}></BsFillPersonFill>
                            <br></br>
                            <select {...register("reservationGuests")} className="modalinput pt-2">
                                <option value="1">1 ospite</option>
                                <option value="2" selected="selected">2 ospiti</option>
                                <option value="3">3 ospiti</option>
                                <option value="4">4 ospiti</option>
                                <option value="5">5 ospiti</option>
                                <option value="6">6 ospiti</option>
                                <option value="7">7 ospiti</option>
                                <option value="8">8 ospiti</option>
                                <option value="9">9 ospiti</option>
                                <option value="10">10 ospiti</option>
                                <option value="11">11 ospiti</option>
                                <option value="12">12 ospiti</option>
                                <option value="13">13 ospiti</option>
                                <option value="14">14 ospiti</option>
                                <option value="15">15 ospiti</option>
                                <option value="16">16 ospiti</option>
                                <option value="17">17 ospiti</option>
                                <option value="18">18 ospiti</option>
                                <option value="19">19 ospiti</option>
                                <option value="20">20 ospiti</option>
                            </select>
                        </Col>
                        <Col lg={12} className={"pt-5 pb-3 justify-content-center border-0"}>
                            <Button type="submit" onClick={props.onHide}
                                    className={"btn btn-primary bg-dark border-dark"}>
                                Prenota Subito
                            </Button>
                        </Col>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    );
}
