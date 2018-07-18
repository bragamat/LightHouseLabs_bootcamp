import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Form, Item, Label, Input, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class App extends Component {
  constructor(props){
    super(props);

    this._onPressButton = this._onPressButton.bind(this)

  }

   _onPressButton() {
    Alert.alert('Congratulations, You are very rich!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton}>
            <Title>"I'm rich"</Title>
          </Button>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 'auto',
    textAlign: 'center'
  }
})