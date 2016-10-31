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

import Header from '../common/Header';
import RecruitmentView from '../pages/RecruitmentView';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            recruitment:['北京融汇兴业网络技术有限公司',
                '中暑博洋信息技术有限公司',
                '信达财产保险有限公司',
                '中软通达(北京)科技有限公司',
                '北京米花互动科技有限公司',
                '北京万维通港科技有限公司',
                '北京华夏迅联信息技术有限公司',
                '北京盛华实科技有限公司'],
        }
    }


    render(){
        return(
            <View>
                <Header
                    title = '发现'
                />
                <RecruitmentView recruitment={this.state.recruitment} />
            </View>
        );     
    }
}

const styles = StyleSheet.create({
        
});