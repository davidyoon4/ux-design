import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Switch } from 'react-native';
import * as GlobalStyles from '../globalStyles';
import BottomBar from './molecules/BottomBar';
import Field from './molecules/Field';

class Profile extends React.Component {
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
            <View style={localStyles.container}>
                <View style={localStyles.profileContainer}>
                    <Image style={localStyles.profilePic} source={require('../images/scanner/angel.jpg')} />
                    <View>
                        <Text style={localStyles.profileName}>Angel Melendez</Text>
                        <Text style={localStyles.profileConnections}>404 connections</Text>
                    </View>
                </View>
                <View>
                    <Field fieldTitle="Curriculum" fieldInfo="Medill School of Journalism"/>
                    <Field fieldTitle="Graduation" fieldInfo="Spring 2022"/>
                    <Field fieldTitle="Email" fieldInfo="angelmelendez2022@u.northwestern.edu"/>
                    
                    <Field fieldTitle="Notifications" fieldInfo="For everything" switch/>
                </View>
                <View style={localStyles.qrContainer}>
                    <Image style={localStyles.qr} source={require('../images/scanner/QR.png')}/>
                </View>
                <BottomBar active='profile' changeScreen={this.props.changeScreen} />
            </View>
        );
    }
}

export default Profile;
const localStyles = StyleSheet.create({
    container: {
        flex: 1.5,
        backgroundColor: GlobalStyles.colors.lightGray,
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignSelf: 'stretch',
        marginTop: 50
    },
    profilePic: {
        width: 130,
        height: 130,
        borderRadius: 100
    },
    profileName: {
        fontSize: 30
    },
    profileConnections: {
        fontSize: 18
    },
    qrContainer: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    qr: {
        width: 100,
        height: 100
    }
});
