import React from "react";
import cn from "classnames";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleDec = (e) => {
    const { value } = this.state;
    const { onClick, index } = this.props;

    this.setState({
      value: value + 1,
    });
    onClick(index);
  };

  render() {
    const { value } = this.state;
    const { activeClass } = this.props;

    const btnClass = cn({
      btn: true,
      "btn-success": activeClass,
      "btn-primary": !activeClass,
      "m-1": true,
    });

    return (
      <button onClick={this.handleDec} className={btnClass} type="button">
        {value}
      </button>
    );
  }
}
