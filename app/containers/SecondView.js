/**
 * Created by mac on 16/10/17.
 */
import React ,{Component} from 'react';
import
{
    StyleSheet,
    View,
    Text,
TextInput,
}from 'react-native';

import Header from '../common/Header';
import QRCode from 'react-native-qrcode';

export default class SecondView extends Component{

    state = {
        text: 'http://facebook.github.io/react-native/',
    };
    render(){
        return(
            <View>
                <Header title="二维码" />
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({text: text})}
                        value={this.state.text}
                    />
                    <QRCode
                        value={this.state.text}
                        size={200}
                        bgColor='purple'
                        fgColor='white'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});