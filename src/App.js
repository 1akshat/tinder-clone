import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import ChatPage from "./Components/ChatPage/Chatpage";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Router path="/chat">
            <ChatPage />
          </Router>
          <Router path="/">
            <HomePage />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
