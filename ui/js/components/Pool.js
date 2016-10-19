import React from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todoActions';

class Pool extends React.Component{
  voteRatio(intention){
    var total = 0;
    for(var this_intention of this.props.item.intentions){
      total += this_intention.votes.length;
    }

    return Math.round(((intention.votes.length / total) * 100) * 100) / 100 ;
  }

  render(){
    const mappedIntentions = this.props.item.intentions.map(function(intention){
      var ratio = this.voteRatio(intention);
      return (
          <li key={intention._id}>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="{ratio}" aria-valuemin="0" aria-valuemax="100" style={{width: ratio+'%'}}>
              {intention.title}: {intention.votes.length} votos
            </div>
          </div>
          </li>
      )
    },this);

    return (
      <div class='pool'>
        <h3>{this.props.item.title}</h3>
        <div>{this.props.item.description}</div>
        <ul>
          {mappedIntentions}
        </ul>
      </div>
    );
  };
}

const mapStateToProps = function(state,ownProps){
  return {
    intentions: state.intentions
  }
}

const PoolComponent = connect(
  mapStateToProps
)(Pool);

export default PoolComponent;
