/**
 * Created by mac on 16/10/31.
 */
import React,{Component} from 'react';
import
{
    View,
    Text,
    Image,
    StyleSheet,
}from 'react-native';

export default class RecruitmentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recruitment: this.props.recruitment,
        }
    }

    render() {
        let texts = [];
        for (let i = 0; i < this.props.recruitment.count - 1; i += 2) {
            texts.push(<View style={styles.textView}>
                    <Text style={styles.contentText}>{i+'.'+this.props.recruitment[i]}</Text>
                    <Text style={styles.contentText}>{i+'.'+this.props.recruitment[i+1]}</Text>
                </View>);
        }
        console.log(texts.count);
        return(<View>
            <View style={styles.head}>
                <Text>公司领导莅临尚学堂专场招聘</Text>
            </View>
            <View style={styles.contentContainer}>
                {texts}
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    contentContainer:{
        flexDirection:'column',
    },
    contentText:{
        fontSize:13,
     },
        textView:{
            flexDirection:'row',
        },
    head:{
        alignItems:'center',
        justifyContent:'center',
        height:40,
    },
})