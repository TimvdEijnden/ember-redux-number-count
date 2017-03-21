import Ember from 'ember';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    number: state.number
  };
};

var dispatchToActions = (dispatch) => {
  return {
    add: () => dispatch({type: 'ADD'}),
    remove: () => dispatch({type: 'REMOVE'})
  };
};

var NumbersComponent = Ember.Component.extend({});

export default connect(stateToComputed, dispatchToActions)(NumbersComponent);
