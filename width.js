// 移动端版本兼容
	window._IS_ANDROID = /Android (\d+\.\d+)/.test(navigator.userAgent);
	window._PHONE_WIDTH = parseInt(window.screen.width);
	window._PHONE_SCALE = _PHONE_WIDTH/640;
	window._VISION_;
	window._HEIGHT_ = 1008;

	if (_IS_ANDROID) {
		_VISION_ = parseFloat(RegExp.$1);
		// andriod 2.3以上
		if (_VISION_ > 2.3) {
			document.write('<meta name="viewport" content="width=640, minimum-scale = ' + _PHONE_SCALE + ', maximum-scale = ' + _PHONE_SCALE + ', target-densitydpi=device-dpi, user-scalable=no">');
		// andriod 2.3以下（包含2.3）
		} else {
			document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
		}
		// 其他系统-（ios）
	} else {
		document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
	}