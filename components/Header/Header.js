import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ routePrice, needFuel }) => (
    <View style={styles.wrapper}>
        <LinearGradient
            // Background Linear Gradient
            colors={['#3C5CB6', '#318BA6']}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 300,
            }}
        />
        <SafeAreaView style={styles.innerWrapper}>
            <View style={styles.content}>
                <Text style={styles.sumNum}>{routePrice} zł</Text>
                <Text style={styles.desc}>przyblizony koszt trasy</Text>
                <Text style={styles.desc2}>Potrzeba {needFuel} litrów paliwa</Text>
            </View>
        </SafeAreaView>
    </View >
);

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 250,
    },

    innerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        width: '90%',
        height: '90%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F1F1F',
        top: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    sumNum: {
        color: '#fff',
        fontSize: 62,
        fontWeight: 'bold'
    },
    desc: {
        color: '#919097',
        textTransform: 'uppercase'
    },
    desc2: {
        color: '#919097',
        textTransform: 'uppercase',
        top: 10,
        fontWeight: 'bold'
    }

});

export default Header