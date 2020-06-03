import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NoteEditor from "../note-editor/NoteEditor";
import Note from "../note-editor/note/Note";
import WalletDisplay from "../wallet-display/WalletDisplay";
import { NavLink, Link } from "react-router-dom";
import "./wallet.css";

export default class Wallet extends Component {
  state = {
    notes: [],
    display: "",
  };

  handleNoteCreate = (note) => {
    this.setState({
      notes: [...this.state.notes, note],
    });
    localStorage.setItem("noteData", JSON.stringify(this.state.notes));
  };

  handleDisplay = (resDisplay) => {
    this.setState({ display: resDisplay });
  };

  componentWillUnmount() {
    const val = localStorage.getItem("storage");
    this.setState({ display: val });
    localStorage.setItem("noteData", JSON.stringify(this.state.notes));
  }

  componentWillMount() {
    const displ = localStorage.getItem("storage");
    this.setState({ display: displ });
    const save = JSON.parse(localStorage.getItem("noteData"));
    if (save) {
      this.setState({ notes: save });
    } else {
      this.setState({ notes: [] });
    }
  }

  eraseWallet = (resDisplay) => {
    this.setState({ display: resDisplay });
    this.setState({ notes: [] });
    localStorage.clear();
  };

  render() {
    const notes = this.state.notes;

    return (
      <div className="wallet">
        <div className="wallet__display">
          <WalletDisplay val={this.state.display} />
        </div>

        <NoteEditor className="wallet__editor" onCreate={this.handleNoteCreate} onChangeSum={this.handleDisplay} onErase={this.eraseWallet} />

        <table className="table table-borderless">
          <thead>
            <tr>
              <th>дата</th>
              <th>категория</th>
              <th>подробности</th>
              <th>сумма</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => {
              return (
                <Note number={note.number} key={parseInt(note.id)} id={note.id}>
                  {note}
                </Note>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
