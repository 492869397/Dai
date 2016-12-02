/**
 * Created by mac on 16/11/24.
 */
import React,{Component} from 'react';
import
{
StyleSheet,
WebView,
View
} from 'react-native';

import Header from '../common/Header';

export default class WebViewPage extends Component{
    constructor(props){
        super(props);
        let {data} = props;
        console.log(data);
        this.state={
            url:data.url,
            author:data.author_name,
            canGoBack:false,
        };
    }

    render(){
        const leftIcons = [{icon:"angle-left",action:()=>{this.props.navigator.pop()},key:'leftIcon1'},
            {icon:"close",
                action:()=>{
                    this.webview.goBack();
                    this.setState({
                        webIndex:this.state.webIndex-1,
                    })
                },
                key:'leftIcon2'}];
        return(
            <View style={{flex:1}}>
                <Header 
                    title={this.state.author}
                    leftIcon={this.state.canGoBack?leftIcons:leftIcons[0]}
                />
                <WebView
                    ref={(ref) => { this.webview = ref;}}
                    automaticallyAdjustContentInsets={false}
                    style={{flex:1}}
                    source={{ uri: this.state.url }}
                    scalesPageToFit={true}
                    decelerationRate="normal"
                    onShouldStartLoadWithRequest={() => {
                        const shouldStartLoad = true;
                        return shouldStartLoad;
                     }}
                    onNavigationStateChange={(navState)=>this.setState({canGoBack:navState.canGoBack})}
                    onError={()=>{console.log('error')}}
                    onLoad={()=>{console.log('successed')}}
                />
            </View>
        );
    }
}
