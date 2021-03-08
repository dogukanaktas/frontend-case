import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./routing/index";
import Container from "react-bootstrap/Container";

import "./App.scss";

const App = () => (
  <Router>
    <Container fluid>
      <Switch>
        {routes?.map((route) => (
          <Route key={route?.path} exact {...route} />
        ))}
        <Redirect exact from="/" to="home" />
      </Switch>
    </Container>
  </Router>
);

export default App;
