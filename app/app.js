/**
 * Created by mac on 16/10/17.
 */

import React,{Component} from 'react';
import
{
StyleSheet,
View,
Text,
Navigator
}from 'react-native';

import TabbarView from './containers/TabbarView';

export default class App extends Component{
    render(){
        return(
            <Navigator
                initialRoute={{name:'TabbarView',component:TabbarView}}
                renderScene={(route,navigator)=>{
                    let Com = route.component;
                    return <Com {...route.param} navigator={navigator} />;
                }}
                configureScene={(route,routeStack)=>Navigator.SceneConfigs.HorizontalSwipeJumpFromRight}
            />
        );
    }
}