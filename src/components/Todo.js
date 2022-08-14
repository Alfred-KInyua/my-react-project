import React, { useState } from "react";
import Modal from "./modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalOpen, setModalOPen] = useState(false);
  const deleteHandler = () => {
    setModalOPen(true);
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
      {modalOpen ? (
        <Modal onCancel={closeMOdalHandler} onConfirm={closeMOdalHandler} />
      ) : null}
      {modalOpen && <Backdrop onClick={closeMOdalHandler} />}
    </div>
  );
};
export default Todo;
