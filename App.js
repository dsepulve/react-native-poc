import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailView from './components/DetailView'

class App extends React.Component {
  state = {
    text: ''
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="Ingrese un text"
          onChangeText={(text) => this.setState({ text })}
        />

        <Button
          title="Enviar"
          color="#841584"
          onPress={() => navigate('DetailView',{'text':this.state.text})}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: App },
  DetailView: { screen: DetailView },
});

export default SimpleApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


