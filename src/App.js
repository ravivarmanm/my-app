import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Mesage";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import SimpleButton from "./Components/SimpleButtton";
import SimpleEffect from "./Components/SimpleEffect";
import Goals from "./Components/Goals";
function App() {
  return (
    <div className="App">
      {/* <Greet name="bruce" heroname="hulk">
        <p>this is children props</p>
        <h3>Ravivarman</h3>
      </Greet>
      <Greet name="clark" heroname="superman">
        <button className="btn btn-primary">Action</button>
      </Greet>
      <Greet name="tony" heroname="IronMan" />
      <Welcome name="bruce" heroname="hulk">
        {" "}
      </Welcome>
      <Welcome name="clark" heroname="superman">
        {" "}
      </Welcome>
      <Welcome name="tony" heroname="IronMan">
        {" "}
      </Welcome>
      <Hello name="toons" heroname="Loony"></Hello>
      <Message name="ravi"></Message>
      <Counter></Counter>
      <Greet name="bruce" heroname="hulk">
        <p>this is children props</p>
        <h3>Ravivarman</h3>
      </Greet>
      <FunctionClick></FunctionClick>
      <ClassClick />
      <EventBind /> */}
      {/* <SimpleButton />
      <SimpleEffect /> */}
      <Goals />
    </div>
  );
}
export default App;
