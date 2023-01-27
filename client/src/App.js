import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form } from "./views";
import Nav from "./components/Nav/Nav";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav /> : null}

      <Route exact path="/" component={Landing} />

      <Route path="/home" render={() => <Home />} />

      <Route path="/detail/:id" render={() => <Detail />} />

      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
