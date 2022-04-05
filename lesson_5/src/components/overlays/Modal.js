import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
    return (
        ReactDOM.createPortal(<div className="modal modal-overlay">
            <section className="modal-main">
                <p>Person added</p>
                <button onClick={props.onClose}>Close modal</button>
            </section>
        </div>, document.getElementById("overlay"))
    )
}

export default Modal;