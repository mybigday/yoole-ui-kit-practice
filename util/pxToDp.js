import { Dimensions } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;

const uiWidthPx = 640;
const uiHeightPx = 1140;

// 把设计图长度转换成实际设备长度
function pxToDpW(uiElementPx) {
	return uiElementPx * deviceWidthDp / uiWidthPx;
}

function pxToDpH(uiElementPx) {
	return uiElementPx * deviceHeightDp / uiHeightPx;
}

export { pxToDpW, pxToDpH };