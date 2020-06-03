import React, { Component } from "react";

export default class Note extends Component {
  render() {
    const { children } = this.props;
    return (
      <tr className={children.classType}>
        <td>{children.data}</td>
        <td>{children.selector}</td>
        <td>{children.text}</td>
        <td>{children.number}</td>
        <td>{children.currency}</td>
      </tr>
    );
  }
}
