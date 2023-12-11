import { LiaTimesSolid } from "react-icons/lia";

import "./Modal.scss";
const Modal = ({children, hideModal}) => {
  return (
    <>
      <section className="modal-section">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-header-content">
              <h2>Sign up</h2>
              <p>Its quick and easy</p>
            </div>
            <button onClick={()=> hideModal(false)} className="modal-close"><LiaTimesSolid /></button>
          </div>

          <div className="modal-body">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
