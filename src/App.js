import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./welcome";
import Greeting from "./Greeting";
import Login from "./Login";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
export const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
export const Welcome1 = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahalede" />
      <Welcome name="Edite" />
      <HelloWorld />
      <Greeting />

      <Login />
    </div>
  );
}

export default App;
