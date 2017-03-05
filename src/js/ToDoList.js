// Import React
import React from 'react';
import _ from 'underscore';
import DatePicker from 'react-datepicker';
import { DateField } from 'react-date-picker';
import moment from 'moment';
import TodoItems from './TodoItems';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {red500, deepOrangeA400,deepOrangeA700,blue500} from 'material-ui/styles/colors';

var ToDoList = React.createClass({
  getInitialState () {
    return {
      items: [],
      noteValue: '',
      charLeft: 100,
      dateValue: moment(),
      occurenceValue: 'everyday'
    };
  },

  addItem(e) {
    e.preventDefault();
    let itemArray = this.state.items;
    let { noteValue, dateValue, occurenceValue } = this.state;

    itemArray.push({
      noteValue: noteValue,
      occurenceValue: occurenceValue
    });

    this.setState({
      items: itemArray
    })
  },

  handleInputChange(e) {
    let currentText = e.target.value;
    let counter = (100 - (currentText.length));
    this.setState({
      noteValue: currentText,
      charLeft: counter
    })

  },

  handleDateChange(date) {
    this.setState({
      dateValue: date
    })
  },

  handleOccurence(e) {
    this.setState({
      occurenceValue: e.target.value
    })
  },

  render() {
      let defaultValue = this.state.data;
      let itemArray = this.state.items;
      return (
        <div className="mainContainer">
        <AppBar title="To Do" className="titleBar"/>
          <div className="toDoList">
            <h3>What are the things you want to get done today? </h3>
            <div className="listContainer">
              <form onSubmit={this.addItem} className="taskForm">
                <textarea type="text" ref="listInput" onChange={this.handleInputChange}
                  maxLength="100" rows="2" required></textarea>
                <label>{this.state.charLeft}</label>

                <DatePicker selected={this.state.dateValue}
                  onChange={this.handleDateChange} />

                <select value={this.state.occurenceValue} onChange={this.handleOccurence}>
                  <option value="everyday">Everyday</option>
                  <option value="everyweek">Everyweek</option>
                  <option value="everyyear">Everyyear</option>
                  <option value="none">none</option>
                </select>
                <input type="submit" ref="submit" className="btn btn-default"
                 name="submit" value="Submit" />
              </form>

              <TodoItems data={this.state.items} />
            </div>
          </div>
        </div>
      );
  }
});

export default ToDoList;
