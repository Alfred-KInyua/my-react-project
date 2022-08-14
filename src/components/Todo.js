import React, { useState } from "react";
import Modal from "./modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalOpen, setModalOPen] = useState(false);
  const deleteHandler = () => {
    setModalOPen(true);
    console.log(modalOpen);
  };
  const closeMOdalHandler = () => {
    setModalOPen(false);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {" "}
          Delete{" "}
        </button>
      </div>
      {/* Modal and Backdrop are custome elements as such dont have onClickREceived (should just be onClick) defined there in 
      so we need to push onClick to modal and back drop and define the ONCLICK event handler there in as props  */}
      {modalOpen ? <Modal onClickReceived={closeMOdalHandler} /> : null}
      {modalOpen && <Backdrop onClick={closeMOdalHandler} />}
    </div>
  );
};
export default Todo;
