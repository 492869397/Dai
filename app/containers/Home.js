/**
 * Created by mac on 16/10/17.
 */
import React ,{Component} from 'react';
import
{
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,
}from 'react-native';

import GiftedListView from 'react-native-gifted-listview';

import Header from '../common/Header';
import RecruitmentView from '../pages/RecruitmentView';
import HomeHeader from '../pages/HomeHeader';

import WebViewPage from '../pages/WebView';

import {requestNews} from '../common/Request'

export default class Home extends Component{
    constructor(props){
        super(props);

        this.data = [
            {
                title: "巫山云雨枉断肠：女摄影师Erika Lust记录的性爱",/*标题*/
                date: "2016-06-13 10:31",/*时间*/
                author_name: "POCO摄影",/*作者*/
                thumbnail_pic_s: "http://09.imgmini.eastday.com/mobile/20160613/20160613103108_7b015493398e7fd13dda3a5ce315b1c8_1_mwpm_03200403.jpeg",/*图片1*/
                thumbnail_pic_s02: "http://09.imgmini.eastday.com/mobile/20160613/20160613103108_7b015493398e7fd13dda3a5ce315b1c8_1_mwpl_05500201.jpeg",/*图片2*/
                thumbnail_pic_s03: "http://09.imgmini.eastday.com/mobile/20160613/20160613103108_7b015493398e7fd13dda3a5ce315b1c8_1_mwpl_05500201.jpeg",/*图片3*/
                url: "http://mini.eastday.com/mobile/160613103108379.html?qid=juheshuju",/*新闻链接*/
                uniquekey: "160613103108379",/*唯一标识*/
                type : "头条",/*类型一*/
                realtype: "娱乐"/*类型二*/
    }
        ];

        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
        this.state={
            ds:ds.cloneWithRows(this.data),
            title:"发现"
            // recruitment:['北京融汇兴业网络技术有限公司',
            //     '中暑博洋信息技术有限公司',
            //     '信达财产保险有限公司',
            //     '中软通达(北京)科技有限公司',
            //     '北京米花互动科技有限公司',
            //     '北京万维通港科技有限公司',
            //     '北京华夏迅联信息技术有限公司',
            //     '北京盛华实科技有限公司']
        };
    }


    componentWillMount(){
        requestNews(
            'top',
            (data)=>{
                this.data = this.data.concat(data.result.data);
                let ds = this.state.ds.cloneWithRows(this.data);
                this.setState({
                    ds:ds
                });
            },
            (data)=>{console.log('网络访问错误'+data)}
        );
    }


    render(){
        return(
            <View style={{flex:1}}>
                <Header title = '首页' rightIcon={{icon:'angle-down',
                                                        action:()=>{
                                                        this.listView.scrollTo({y:this.listView.scrollProperties.offset+500,animated:true})},key:'1'}}/>
                <HomeHeader />
                {this._renderListView()}
            </View>
        );     
    }

    _renderListView() {
        return(
            <GiftedListView
                ref={(ref)=>this.listView=ref}
                dataSource={this.state.ds}
                renderRow={this.renderRow.bind(this)}
                renderSeparator={this.renderSeparator.bind(this)}
                // rowView={this._renderRowView}
                onFetch={this.onRefresh}
                firstLoader={true} // display a loader for the first fetching
                pagination={true} // enable infinite scrolling using touch to load more
                refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                withSections={false} // enable sections
          //       customStyles={{
          //   paginationView: {
          //     backgroundColor: '#eee',
          //   },
          // }}

                refreshableTintColor="blue"
                style={{flex:1}}
            />
        )
    }

    renderRow(rowdata,sectionId,rowId){
        return(
            <View style={{marginVertical:5}}>
                <TouchableOpacity onPress={()=>{this.pressRow(rowId,rowdata)}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:1,marginHorizontal:10}}>
                            <Text style={{fontSize:17}}>{rowdata.title}</Text>
                            <Text style={{fontSize:14,color:'rgb(200,200,200)',marginTop:5}}>{rowdata.author_name +'  '+ rowdata.date}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                             <Image style={styles.image} source={{uri:rowdata.thumbnail_pic_s}} />
                         </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderSeparator(sectionID, rowID){
        return(
            <View
                style={{flex:1,backgroundColor:'rgb(220,220,220)',height:1,marginHorizontal:10}}
                key={rowID}
            />
        );
    }

    pressRow(rowId,rowdata){
        const {navigator} = this.props;
        navigator.push({name:'WebView',component:WebViewPage,param:{data:rowdata}});
    }

    onRefresh(){
        requestNews(
            'top',
            (data)=>{
                this.data = this.data.concat(data.result.data);
                let ds = this.state.ds.cloneWithRows(this.data);
                this.setState({
                    ds:ds
                });
                
            },
            (data)=>{console.log('网络访问错误'+data)}
        );
    }
}

const styles = StyleSheet.create({
    image:{
        height:70,
        width:70,
        marginRight:10
    },
    imageContainer:{
        flexDirection:'row',
        justifyContent:'center'
    }
});