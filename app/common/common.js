/**
 * Created by mac on 16/10/31.
 */

import {Dimensions} from 'react-native';

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
export default {
    window: window,
}