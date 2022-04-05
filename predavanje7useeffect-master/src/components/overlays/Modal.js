import "./Modal.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = (props) => {
    useEffect(() => {
        const id = setTimeout(() => {
            props.onClose();
        }, 5000);

        return () => {
            clearTimeout(id);
        }
    }, []);

    return (
        ReactDOM.createPortal(<div className="modal modal-overlay">
            <section className="modal-main">
                <p>{props.message}</p>
                <button onClick={props.onClose}>Close modal</button>
            </section>
        </div>, document.getElementById("overlay"))
    )
}

export default Modal;