import Todo from "./components/Todo";
import Modal from "./components/modal";
const App = () => {
  return (
    <>
      <p>My Todos</p>
      <Todo text="Title one " />
      <Todo text="Title two" />
      <Modal />
    </>
  );
};
export default App;
