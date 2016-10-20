import React from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todoActions';
import PoolComponent from './Pool';

class List extends React.Component{
  addTask(e){
    var title = document.querySelector('[name=title]');
    TodoActions.createTask(this.props.dispatch,{title: title.value});
    title.value = '';
  }



  render(){
    const mappedPools = this.props.pools.map(function(pool){
      return (
        <PoolComponent key={pool._id} item={pool} />
      );
    });

    return (
      <div>
        <div class='pools list'>
          {mappedPools}
        </div>
        <input name='title' />
        <button onClick={this.addTask.bind(this)}>Add</button>
      </div>
    );
  };
}

const mapStateToProps = function(state,ownProps){
  return {
    pools: state.pools
  }
}

const ListComponent = connect(
  mapStateToProps
)(List);

export default ListComponent;
