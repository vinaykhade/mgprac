// Import React
import React from 'react';
import _ from 'underscore';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TodoItems from './TodoItems';
import APP_CONSTANTS from './app-constants';
import AppBar from 'material-ui/AppBar';

var TaskList = React.createClass({
  getInitialState () {
    return {
      items: [],
      noteValue: APP_CONSTANTS.NOTE_VALUE,
      charLeft: 100,
      dateValue: moment(),
      currentDate: moment(),
      occurenceValue: 'everyday',
      noneSelected: false
    };
  },

  addItem(e) {
    e.preventDefault();
    let itemArray = this.state.items;
    let { noteValue, dateValue, occurenceValue } = this.state;
    let date = this.state.noneSelected ? this.state.currentDate : this.state.dateValue;
    itemArray.push({
      noteValue: noteValue,
      occurenceValue: occurenceValue,
      dateValue: date
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

  dateToString(date) {
    let dateObject = date._d;
    return (dateObject.getDate() + '-' + (dateObject.getMonth() + 1) + '-' + dateObject.getFullYear());
  },

  handleDateChange(e) {
    this.setState({
      dateValue: e
    })
  },

  handleOccurence(e) {
    let occurenceValue = e.target.value;
    if(occurenceValue == 'none') {
      this.setState({
        noneSelected: true
      })
    } else {
      this.setState({
        noneSelected: false
      })
    }

    this.setState({
      occurenceValue: e.target.value
    })
  },

  render() {
      let defaultValue = this.state.data;
      let itemArray = this.state.items;

      return (
        <div className="mainContainer">
          <AppBar className="titleBar"/>
          <div className="toDoList">
            <div className="listContainer">
              <form onSubmit={this.addItem} className="taskForm">
                <label htmlFor="#noteInput" className="inputLabel">Note :</label>
                <textarea type="text" id="noteInput" onChange={this.handleInputChange}
                  defaultValue={ APP_CONSTANTS.NOTE_VALUE } maxLength="100" rows="2" required></textarea>
                <span className="charLeft">{this.state.charLeft} Characters Remaining</span>

                <label htmlFor="#dateInput" className="inputLabel">Date :</label>
                <DatePicker id="dateInput" selected={ this.state.noneSelected ? this.state.currentDate : this.state.dateValue }
                  onChange={this.handleDateChange} dateFormat="DD-MM-YYYY" />

                <label htmlFor="#occurenceInput" className="inputLabel">Occurence :</label>
                <select id="occurenceInput" value={this.state.occurenceValue} onChange={this.handleOccurence}>
                {
                  _.map( APP_CONSTANTS.OCCURENCE_TYPE , (data, key) =>{
                    return(
                      <option key={key} value={data.value}>{data.title}</option>
                    )
                  })
                }
                </select>
                <input type="submit" ref="submit" className="btn btn-default"
                 name="submit" value="Submit" />
              </form>

              <TodoItems data={this.state.items} dateConvertor={this.dateToString}/>
            </div>
          </div>
        </div>
      );
  }
});

export default TaskList;
