var config_default = {
	documentTitle : "Greeting Card",
	stageW : 800,
	stageH : 480,
	col : 40,
	row : 24,
	emitterNum : 10,

	preface : [
		"陈老Si~",
		"教师节快乐~",
		"要一直点哦~ ^_^"
	],
	prefaceFontSize: 20,

	colorList : [
		"#990000",
		"#FF0000",
		"#CC3300",
		"#CC6600",
		"#CC0033",
		"#FFFF00",
		"#33FF00",
		"#33CC00",
		"#0066FF",
		"#00FF99",
		"#770099"
	],

	matrix : null
};


function normalizeConfig (_config) {
	if (_config === null) {
		_config = {};
	}

	for (var k in config_default) {
		if (typeof _config[k] === "undefined") {
			_config[k] = config_default[k];
		}
	}

	return _config;
}
