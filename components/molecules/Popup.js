import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Switch } from 'react-native';
import * as GlobalStyles from '../../globalStyles';
import BottomBar from './BottomBar';
import Field from './Field';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: false,
            type: false,
            color: false,
            date: false,
            switchValue: true
        }
    }
    render = () => {

        return (
            <View style={localStyles.card}>
                <Text style={localStyles.card__title}>44 Monty Chair</Text>
                <Image style={localStyles.card__image} source={require('../../images/chair.jpg')} />
                <View style={localStyles.fullWidth}>
                    <Field fieldTitle="Price" fieldInfo="$40, non-negotiable" />
                    <Field fieldTitle="Description" fieldInfo="this is a chair ... it’s a good chair" />
                    <Field fieldTitle="Expiration Date" fieldInfo="August 17, 2020" />
                    <Field fieldTitle="Seller" fieldInfo="chelly@u.northwestern.edu" />
                </View>
                <Image style={localStyles.qr} source={require('../../images/scanner/QR.png')} />
            </View>
        );
    }
}

export default Popup;
const localStyles = StyleSheet.create({
    card: {
        height: 591,
        width: 325,
        top: 45,
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: 15,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    card__title: {
        fontSize: 24,
        textAlign: 'center'
    },
    card__image: {
        height: 194,
        width: 194,
        marginVertical: 15
    },
    fullWidth: {
        alignSelf: 'stretch'
    },
    qr: {
        marginTop: 10
    }
});
