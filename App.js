// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from './components/Header/Header'
import Form from './components/Form/Form'


class App extends React.Component {
  state = {

    routeLength: 234,
    fuelUsage: 6.5,
    fuelPrice: 4.25,
    routePrice: 0.00
  }

  handleRouteSlider = value => {
    this.setState({
      routeLength: value
    })
  }

  handleFuelUsageSlider = value => {
    this.setState({
      fuelUsage: value
    })
  }
  handleFuelPriceSlider = value => {
    this.setState({
      fuelPrice: value
    })
  }

  showRoutePrice = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
        <Header
          routePrice={this.state.routePrice}
        />
        <Form
          routeLength={this.state.routeLength}
          fuelUsage={this.state.fuelUsage}
          fuelPrice={this.state.fuelPrice}
          handleRouteSlider={this.handleRouteSlider}
          handleFuelUsageSlider={this.handleFuelUsageSlider}
          handleFuelPriceSlider={this.handleFuelPriceSlider}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
