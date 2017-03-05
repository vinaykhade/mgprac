import React from 'react';
import _ from 'underscore';

var TodoItems = React.createClass({

  render(){
    let todoEntries = this.props.data;
    return(
      <ul className="todoListItems">
        {
          _.map( todoEntries , (data, key) =>{
            return(
              <li key={key}>
                <p>{data.noteValue}</p>
                <span>{data.occurenceValue}</span>
              </li>
            )
          })
        }
      </ul>
    );
  }
});

export default TodoItems;
