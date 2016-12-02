/**
 * Created by mac on 16/10/31.
 */
/**
 * Created by ljunb on 16/5/8.
 * 导航栏标题
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Common from '../common/common';
//
import Util from './Utils';
// import { toastShort } from '../common/ToastUtil';


//左右按钮较多时应使用leftIcons = {icon:'back',action:()=>{} key:''}

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // collectState: this.props.collectState,
            collectState: '',
            pageID: this.props.pageID,
        };
        // console.log('this.props.collectState.faved========00000===:' + this.state.collectState);
        // console.log('this.props.collectState.ID========00000===:' + this.state.pageID);
    }

    render() {
        let leftView = [];
        let rightView = [];
        let NavigationBar = [];
        // 左边图片按钮
        if (this.props.leftIcon != undefined) {
            if(this.props.leftIcon instanceof Array){
                this.props.leftIcon.map((icon)=> {
                    leftView.push(
                        <TouchableOpacity
                            key={icon.key}
                            activeOpacity={0.75}
                            style={styles.leftIcon}
                            onPress={icon.action}
                        >
                            <Icon color="white" size={20} name={icon.icon}/>
                        </TouchableOpacity>)
                });
            }else{
                leftView.push(
                    <TouchableOpacity
                        key={this.props.leftIcon.key}
                        activeOpacity={0.75}
                        style={styles.leftIcon}
                        onPress={this.props.leftIcon.action}
                    >
                        <Icon color="orange" size={20} name={this.props.leftIcon.icon}/>
                    </TouchableOpacity>
                )
            }
        }
        

       
        // 标题
        if (this.props.title != undefined) {
            NavigationBar.push(
                <Text numberOfLines={1} ellipsizeMode='tail' key='title' style={styles.title}>{this.props.title}</Text>
            )
        }

        // 自定义标题View
        if (this.props.titleView != undefined) {
            let Component = this.props.titleView;

            NavigationBar.push(
                <Text key={'titleView'} style={styles.titleView}>{this.props.titleView}</Text>
            )
        }


        // 右边图片 收藏按钮 collect
        if (this.props.rightIcon != undefined) {
            if(this.props.leftIcon instanceof Array){
                this.props.rightIcon.map((icon)=> {
                    rightView.push(
                        <TouchableOpacity
                            key={icon.key}
                            activeOpacity={0.75}
                            style={styles.rightIcon}
                            onPress={icon.action}
                        >
                            <Icon color="orange" size={20} name={icon.icon}/>
                        </TouchableOpacity>)
                });
            }else{
                rightView.push(
                    <TouchableOpacity
                        key={this.props.rightIcon.key}
                        activeOpacity={0.75}
                        style={styles.rightIcon}
                        onPress={this.props.rightIcon.action}
                    >
                        <Icon color='orange'  size={20} name={this.props.rightIcon.icon}/>
                    </TouchableOpacity>
                );
            }

        }
        
console.log('重回header');

        return (
            <View style={styles.container}>
            <View style={styles.top} />
            <View style={styles.navigationBarContainer}>
                <View style={styles.leftView}>{leftView}</View>
                <View style={styles.middleView}>{NavigationBar}</View>
                <View style={styles.rightView}>{rightView}</View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top:{
        height:20
            },
    container:{
        backgroundColor:'lightblue',
    },
    navigationBarContainer: {
        marginTop: 0,
        flexDirection: 'row',
        height: 44,
        flex:1,
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1.0,
    },
    leftView:{
        flexDirection:'row',
        marginLeft:0,
        justifyContent:'flex-start',
        flex:1,
    },
    middleView:{
        flexDirection:'row',
        // width:Common.window.width-150,
        flex:2,
        justifyContent:'center',
        marginLeft:5,
        marginRight:5,
    },
    rightView:{
        marginRight:0,
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end',
    },
    title: {
        fontSize: 17,
        margin:0,
        flex:1,
        textAlign:'center',
    },
    titleView: {
        fontSize: 15,
        color: 'darkorange',
    },
    leftIcon: {
        marginLeft: 5,
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
    },
    rightIcon: {
        marginRight: 5,
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
    },
})

// onPress={this.props.rightIconAction}
// <Icon color="orange" size={20} name={this.props.rightIcon}/>
