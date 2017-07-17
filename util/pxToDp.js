import { Dimensions } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;

const uiWidthPx = 640;

// 把设计图长度转换成实际设备长度
function pxToDp(uiElementPx) {
	return uiElementPx *  deviceWidthDp / uiWidthPx;
}

export default pxToDp;