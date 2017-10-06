import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

class CounterButton extends Component {
  state = {
    counter: 0,
  }

  render(){
    return (
      <TouchableOpacity
        style={{backgroundColor: 'white'}}
        onPress={() => this.setState({counter: this.state.counter + 1})}>
        <Text style={styles.paragraph}>
          {this.state.counter}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <CounterButton />
          <CounterButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
