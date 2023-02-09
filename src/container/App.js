import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Errorhandling from "../components/ErrorHandling";
import Scroll from "../components/scroll";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfeild] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(users => this.setState({robots: users}));
  // }
  const onSearchChange = event => {
    setSearchfeild(event.target.value);
  };

  const filteredrobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (robots.length === 0) return <h1 className="tc">Loading</h1>;
  else {
    return (
      <div className="tc">
        <h1>Robot Friends</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <Errorhandling>
            <CardList robots={filteredrobots} />
          </Errorhandling>
        </Scroll>
      </div>
    );
  }
};

export default App;
