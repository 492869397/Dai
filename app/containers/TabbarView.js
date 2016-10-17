/**
 * Created by mac on 16/10/17.
 */

import React ,{Component} from 'react';
import 
{
StyleSheet,
View,
Text,
}from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import SecondView from './SecondView';


const tabbarItems = [
    {title:'主页', component:Home , icon:'ios-home'},
    {title:'第二页',component:SecondView, icon:'ios-albums'}
    ];

export default class TabbarView extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:tabbarItems[0].title
        };
    }


    render(){
        return(
            <TabNavigator>
                {tabbarItems.map((controller,i)=>{
                    let Component = controller.component;
                    return (
                        <TabNavigator.Item
                            key={i}
                            selected={this.state.selectedTab == controller.title}
                            title={controller.title}
                            onPress={()=>this.setState({selectedTab:controller.title})}
                            renderIcon={()=><Icon name={tabbarItems[i].icon} size={30} color="lightgreen" />}
                            renderSelectedIcon={()=><Icon name={tabbarItems[i].icon} size={30} color="blue" />}
                        >
                            <Component navigator={this.props.navigator} {...this.props} />
                        </TabNavigator.Item>
                    )
                    })
                }
            </TabNavigator>
        );
    }
}