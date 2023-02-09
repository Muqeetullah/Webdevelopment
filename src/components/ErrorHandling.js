import React, {Component} from "react";

class Errorhandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haserror: false,
    };
  }
  componentDidCatch() {
    this.setState({haserror: true});
  }
  render() {
    if (this.state.haserror) {
      return <h1>Oppps try again.......</h1>;
    }
    return this.props.children;
  }
}

export default Errorhandling;
