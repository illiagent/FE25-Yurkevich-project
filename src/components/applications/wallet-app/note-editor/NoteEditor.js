import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const options = ["квартира", "машина", "развлечения", "еда", "зарплата", "другое"];

const ENTER_KEY = 13;

class NoteEditor extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      classType: "",
      selector: "",
      text: "",
      number: "",
      currency: "",
      currMoney: 0,
    };
  }
  componentWillMount() {
    const { onCreate } = this.props;
    const val = localStorage.getItem("storage");
    this.setState({ currMoney: val });
  }
  resetFields() {
    this.setState({ text: "" });
    this.setState({ selector: "" });
    this.setState({ number: "" });
  }

  createNote = () => {
    const { onCreate } = this.props;
    const { ...noteData } = this.state;
    onCreate({ ...noteData, id: Date.now() });
    localStorage.setItem("storage", this.state.currMoney);
    this.resetFields();
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSelectorChange = (e) => {
    this.setState({ selector: e.value });
  };
  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleDataSelect = (e) => {
    this.setState({ data: e.target.value });
  };

  handleNoteCreate = async (e) => {
    if (this.state.text === "" || this.state.selector === "" || this.state.number === "") {
      alert("пожалуйста, заполните все данные");
      return;
    }
    const { onChangeSum } = this.props;
    e.preventDefault();
    await this.setState({ classType: "table-success" });
    console.log(this.state.number);
    await this.setState({ currMoney: this.state.currMoney + this.state.number });
    this.setState({ number: `${this.state.number}` });
    this.createNote();
    onChangeSum(this.state.currMoney);
  };

  handleNoteCreateTwo = async (e) => {
    if (this.state.text === "" || this.state.selector === "" || this.state.number === "") {
      alert("пожалуйста, заполните все данные");
      return;
    }
    const { onChangeSum } = this.props;
    e.preventDefault();
    await this.setState({ classType: "table-danger" });
    this.setState({ currMoney: this.state.currMoney - this.state.number });
    this.setState({ number: -this.state.number });
    this.createNote();
    onChangeSum(this.state.currMoney);
  };

  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      e.preventDefault();
      this.createNote();
    }
  };

  eraseWallet = async () => {
    const { onErase } = this.props;
    await this.setState({ currMoney: "0" });
    localStorage.setItem("storage", `${this.state.currMoney}`);
    onErase(this.state.currMoney);
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <input className="input-group input-group-sm mb-3" type="date" value={this.state.data} onChange={this.handleDataSelect}></input>
              </td>
              <td>
                <Dropdown options={options} value={this.state.selector} placeholder="Выберите категорию" onChange={this.handleSelectorChange} />
              </td>
              <td>
                <input value={this.state.text} type="text" className="form-control" placeholder="опишите подробности" onChange={this.handleTextChange} />
              </td>
              <td>
                <input value={this.state.number} type="number" className="form-control" placeholder="введите сумму в BYN" onChange={this.handleNumberChange} />
              </td>
              <td>
                <select value={this.state.currency} onChange={this.handleCurrencyChange}>
                  <option>BYN</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success" onClick={this.handleNoteCreate}>
          ДОХОД
        </button>
        <button className="btn btn-danger" onClick={this.handleNoteCreateTwo}>
          РАСХОД-
        </button>
        <button className="btn btn-alert" onClick={this.eraseWallet}>
          очистить кошелек
        </button>
      </div>
    );
  }
}

export default NoteEditor;
