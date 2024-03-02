import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };
  render(): JSX.Element {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.onClickUp}>카운트 증가</button>
      </div>
    );
  }
}
