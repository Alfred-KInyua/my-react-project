const Modal = (props) => {
  return (
    <div className="modal">
      <p>Are you sure? </p>
      {/* We only received {props.ONCLICKreceived<= This one, inside the curly braces then since button is not a custom element we applied onClick which 
        has been defined there in } */}
      <button className="btn btn--alt" onClick={props.onClickReceived}>
        Cancel
      </button>
      <button className="btn" onClick={props.onClickReceived}>
        Confirm
      </button>
    </div>
  );
};
export default Modal;
