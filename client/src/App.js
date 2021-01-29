import React from "react";
import axios from "axios";
import "./assets/css/App.css";
import Card from "./Components/Card";
import Nav from "./Components/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      validation: false,
      message: "",
    };
  }
  async componentDidMount() {
    try {
      const allCards = await axios.get("/api/todos");
      // const allCards = await axios.get("/api/todos");
      this.setState({ cards: allCards.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="container">
        <Nav></Nav>
        <div className="cards">
          {this.state.cards.map((card) => (
            <Card cardInfo={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
