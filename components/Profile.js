import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Switch } from 'react-native';
import * as GlobalStyles from '../globalStyles';
import BottomBar from './molecules/BottomBar';

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
                    <Image style={localStyles.profilePic} source={require('../images/scanner/bigDavid.png')} />
                    <View>
                        <Text style={localStyles.profileName}>David Yoon</Text>
                        <Text style={localStyles.profileConnections}>404 connections</Text>
                    </View>
                </View>
                <View>
                    <Text style={localStyles.fieldTitle}>Curriculum</Text>
                    <Text style={localStyles.fieldInfo}>McCormick School of Engineering</Text>
                    <Text style={localStyles.line}>____________________________________________________________</Text>
                    <Text style={localStyles.fieldTitle}>Graduation</Text>
                    <Text style={localStyles.fieldInfo}>Spring 2021</Text>
                    <Text style={localStyles.line}>____________________________________________________________</Text>
                    <Text style={localStyles.fieldTitle}>Email</Text>
                    <Text style={localStyles.fieldInfo}>davidyoon2021@u.northwestern.edu</Text>
                    <Text style={localStyles.line}>____________________________________________________________</Text>
                    <Text style={localStyles.fieldTitle}>Notifications</Text>
                    <View style={localStyles.notifContainer}>
                    <Text style={localStyles.fieldInfo}>For everything</Text>
                    <Switch value={this.state.switchValue} onValueChange={() => this.setState({switchValue: !this.state.switchValue})}/>
                    </View>
                    <Text style={localStyles.line}>____________________________________________________________</Text>

                </View>
                <View style={localStyles.qrContainer}>
                    <Image source={require('../images/scanner/QR.png')}/>
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
    fieldTitle: {
        color: '#848484',
        fontSize: 16,
        paddingLeft: 20,
        marginTop: 8
    },
    fieldInfo: {
        fontSize: 16,
        paddingLeft: 20,
    },
    line: {
        color: GlobalStyles.colors.gray
    },
    notifContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 15
    },
    qrContainer: {
        alignSelf: 'stretch',
        alignItems: 'center'
    }
});
