import React from 'react'
import { connect } from "react-redux";
import { changeColor, incrementCounter, decrementCounter, multiplyCounter } from '../model/actions';
import { ButtonList } from './buttonlist'

const AppButtons = (state) => {
    return(
        <ButtonList rows={[
            { 
                key: 'counterRow',
                buttons: [
                    { onPress: state.increment, color: 'blue', title: '+ 1'},
                    { onPress: state.decrement, color: 'red', title: '- 1'},
                    { onPress: state.double, color: 'green', title: '* 2'},
                ]
            },
            { 
                key: 'colorRow', 
                buttons: [
                    { onPress: state.colorBlack, color: 'black', title: 'Black'},
                    { onPress: state.colorBrown, color: 'brown', title: 'Brown'},
                    { onPress: state.colorPink, color: 'pink', title: 'Pink'},
                ] 
            },
        ]} />
    );
};

const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch(incrementCounter(1)),
      decrement: () => dispatch(decrementCounter(1)),
      double: () => dispatch(multiplyCounter(2)),
      colorBlack: () => dispatch(changeColor('black')),
      colorBrown: () => dispatch(changeColor('brown')),
      colorPink: () => dispatch(changeColor('pink')),
    }
  }

export default connect(null, mapDispatchToProps)(AppButtons);