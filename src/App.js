import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <Card className="global">
      <div className="div1"></div>
      <div className="div2"></div>
      <Card className="div3">
        <div className="div4"></div>
        <div className="div5"></div>
      </Card>
    </Card>
  );
}

export default App;
