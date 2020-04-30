import React from "react";
import "./buttons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

export default class Buttons extends React.Component {
  static defaultProps = {
    count: 3,
  };
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: null,
    };
  }

  clickBtn = (index) => {
    this.setState({
      activeBtn: index,
    });
  };

  render() {
    const { count } = this.props;
    const { activeBtn } = this.state;
    const buttons = [];
    for (let i = 0; i < count; i += 1) {
      buttons.push(
        <Button
          key={i}
          index={i}
          onClick={this.clickBtn}
          activeClass={i === activeBtn}
        />
      );
    }
    return buttons;
  }
}
