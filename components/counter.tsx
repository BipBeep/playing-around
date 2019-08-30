import React from 'react'
import { Text, View } from 'react-native';
import { connect } from "react-redux";

const Counter = (state) => {
    return(
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
            <Text style={{color: state.color, fontSize: 24}}>{state.counter}</Text>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        counter: state.counter,
        color: state.color,
    }
}

export default connect(mapStateToProps, null)(Counter);