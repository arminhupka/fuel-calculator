// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

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
      fuelUsage: value.toFixed(1)
    })
  }
  handleFuelPriceSlider = value => {
    this.setState({
      fuelPrice: value.toFixed(2)
    })
  }

  showRoutePrice = () => {
    const needFuel = Math.round(this.state.routeLength * this.state.fuelUsage) / 100;
    const tripPrice = Math.round(needFuel * this.state.fuelPrice * 100) / 100;
    this.setState({
      routePrice: tripPrice
    })
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
          handleBtn={this.showRoutePrice}
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
