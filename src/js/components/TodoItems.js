import React from 'react';
import _ from 'underscore';

var TodoItems = React.createClass({

  render(){
    let todoEntries = this.props.data;
    return(
      <ul className="listItems">
        {
          _.map( todoEntries , (data, key) =>{
            return(
              <li key={key}>
                <p>{data.noteValue}</p>
                <span>{data.occurenceValue}</span>
                <span>{this.props.dateConvertor(data.dateValue)}</span>
              </li>
            )
          })
        }
      </ul>
    );
  }
});

export default TodoItems;
