import React from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todoActions';

class List extends React.Component{
  addTask(e){
    var title = document.querySelector('[name=title]');
    TodoActions.createTask(this.props.dispatch,{title: title.value});
    title.value = '';
  }

  render(){
    const mappedTasks = this.props.tasks.map(function(task){
      return (
        <li key={task.title}>{task.title}</li>
      );
    });

    return (
      <div>
        <ul>
          {mappedTasks}
        </ul>
        <input name='title' />
        <button onClick={this.addTask.bind(this)}>Add</button>
      </div>
    );
  };
}

const mapStateToProps = function(state,ownProps){
  return {
    tasks: state.tasks
  }
}

const ListComponent = connect(
  mapStateToProps
)(List);

export default ListComponent;
