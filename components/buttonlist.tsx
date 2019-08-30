import React, { Component } from 'react'
import { Button, View } from 'react-native';

export interface ButtonProp {
    onPress: VoidFunction;
    color: string;
    title: string;
}

export interface ButtonRowProp {
    key: string,
    buttons: Array<ButtonProp>;
}

export interface ButtonListProp {
    rows: Array<ButtonRowProp>;
}

export class ButtonList extends Component<ButtonListProp> {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                {this.props.rows.map(row => (<ButtonRow {...row} />))}
            </View>
        );
    }
}

class ButtonRow extends Component<ButtonRowProp> {
    render() {
        const buttonsItems = this.props.buttons.map(buttonP => {
            return (
                <View key={buttonP.title} style={{height:50}}>
                    <Button {...buttonP} />
                </View>
            );
        });
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                {buttonsItems}
            </View>
        );
    }
}