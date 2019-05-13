import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about/">
              About
            </Link>
            <Link className="nav-link" to="/users/">
              Users
            </Link>
          </Nav>
        </Navbar.Brand>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </Navbar>
    </Router>
  );
}

export default AppRouter;
