/**
 * Created by mac on 16/11/23.
 */

import React,{Component} from 'react';
import
{
TouchableOpacity,
Text,
View,
StyleSheet
}from 'react-native';

import common from '../common/common';

export default class HomeHeader extends Component{


    constructor(props){
        super(props);
        let items = ['热点','星座控','段子手'];
        this.state = {
            items:items
        };
    }

    render(){
        let itemArr = [];
        this.state.items.map((item,i)=>{
            itemArr.push(<TouchableOpacity key={i} onPress={()=>this.onPress(item)}>
                <View><Text style={styleSheets.item}>{item}</Text></View>
            </TouchableOpacity>)
        });

        return (<View style={styleSheets.header}>
            {itemArr}
            </View>);
    }

    onPress(item){
        console.log(item);
    }
}

const styleSheets = StyleSheet.create({
        header: {
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor:'gray',
            justifyContent:'center',
        },
        item: {
            flex: 1,
            fontSize: 18,
            textAlign: 'center',
            width:common.window.width/3.0,
        }
    }
);