import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/welcome";
import Hello from "./Components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="bruce" heroname="hulk">
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
      <Hello name="toons" heroname=""></Hello>
    </div>
  );
}

export default App;
