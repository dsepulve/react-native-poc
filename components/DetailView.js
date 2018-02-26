import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DetailView extends React.Component {
    static navigationOptions = {
        title: 'Vista Detalle',
    };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={[styles.container]}>
                <Text style={[styles.bigblue]}>{params.text}</ Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#F5FCFF'
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }
});
