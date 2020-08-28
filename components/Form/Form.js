import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const Form = ({ routeLength, fuelUsage, fuelPrice, handleRouteSlider, handleFuelUsageSlider, handleFuelPriceSlider, handleBtn }) => (

    <View style={styles.container} >
        <View style={styles.innerContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.texts}>
                    <Text style={styles.titleText}>Długość planowanej trasy</Text>
                    <Text style={styles.numText}>{routeLength} km</Text>
                </View>
                <Slider
                    style={{ width: '100%', height: 60 }}
                    minimumValue={1}
                    maximumValue={1000}
                    step={1}
                    minimumTrackTintColor="#318BA6"
                    maximumTrackTintColor="#333"
                    thumbTintColor='#3C5CB6'
                    value={routeLength}
                    onValueChange={handleRouteSlider}
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.texts}>
                    <Text style={styles.titleText}>Spalanie na 100 km</Text>
                    <Text style={styles.numText}>{fuelUsage} / 100 km</Text>
                </View>
                <Slider
                    style={{ width: '100%', height: 60 }}
                    minimumValue={1}
                    maximumValue={50}
                    step={0.1}
                    minimumTrackTintColor="#318BA6"
                    maximumTrackTintColor="#333"
                    thumbTintColor='#3C5CB6'
                    value={fuelUsage}
                    onValueChange={handleFuelUsageSlider}
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.texts}>
                    <Text style={styles.titleText}>Cena paliwa</Text>
                    <Text style={styles.numText}>{fuelPrice} zł</Text>
                </View>
                <Slider
                    style={{ width: '100%', height: 60 }}
                    minimumValue={0}
                    maximumValue={10}
                    step={0.01}
                    minimumTrackTintColor="#318BA6"
                    maximumTrackTintColor="#333"
                    thumbTintColor='#3C5CB6'
                    value={fuelPrice}
                    onValueChange={handleFuelPriceSlider}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={handleBtn} style={styles.btn}>
                    <Text style={styles.text}>OBLICZ KOSZT PODRÓŻY</Text>
                </TouchableOpacity>
            </View>

        </View>
    </View >

);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: 50,
        backgroundColor: '#1F1F1F'
    },

    innerContainer: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        flex: 1,
        position: 'relative'
    },

    texts: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    titleText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },

    numText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
        backgroundColor: '#3C5CB6',
        borderRadius: 4
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
});


export default Form