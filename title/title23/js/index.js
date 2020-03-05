'use strict';

window.onload = function () {
	var KEYMAP = {
		'一起听音乐会': 8,
		'一起去赶海': 9,
		'一起草原骑马': 13,
		'听流行音乐': 16,
		'一起去西藏': 17,
		'一起亲子出国旅行': 20,
		'一起阅读': 32,
		'一起K歌': 33,
		'养鱼': 35,
		'制作手工': 36,
		'郊外野餐': 37,
		'滑雪': 38,
		'拳击散打': 39,
		'一起看电影': 40,
		'每年旅游二人世界': 45,
		'跑步': 46,
		'教儿子摄影': 48,
		'打麻将': 49,
		'教儿子种植': 51,
		'一起看歌剧': 54,
		'陪儿子玩游戏': 56,
		'陪儿子足球': 66,
		'陪儿子篮球': 67,
		'陪儿子散打': 71,
		'乒乓球': 69,
		'羽毛球': 70,
		'跆拳道': 71,
		'跟儿子一起学游泳': 72,
		'攀岩': 73,
		'越野': 74,
		'带儿子一起骑行远方': 75,
		'爬山': 76,
		'吃遍美食': 78,
		'养微景观': 79,
		'尤克里里': 80,
		'自我学习': 83,
		'钢琴': 85,
		'骑马': 88,
		'减肥减肥减肥减肥': 89,
		'学习书法': 90,
		'练习画画': 112,
		'玩水': 115,
		'蹦极': 116,
		'游乐场': 117,
		'游遍北京': 118,
		'常回家看看': 119,
		'喝酒': 120,
		'养小动物': 121,
		'储备养老钱': 122,
		'刷短视频': 123,
		'拥有自己的汽车': 125,
		'探险': 126,
		'潜水': 186,
		'园艺': 191,
		'烹饪美食': 219,
		'啪啪啪': 222
	},
	    key_els = {};

	var rand = function rand() {
		var max = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
		var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		var _int = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		var gen = min + (max - min) * Math.random();
		return _int ? Math.round(gen) : gen;
	};

	(function init() {
		var a3d = document.querySelector('.a3d'),
		    f = document.createDocumentFragment(),
		    lims = [33, 41, 47, 58, 91, 127, 146],
		    len = lims.length,
		    unit = 360 / (len + 1);

		for (var p in KEYMAP) {
			var rot = document.createElement('div'),
			    key = document.createElement('div');

			key.dataset.name = p.replace('NUM_', '');
			key.dataset.code = KEYMAP[p];
			key.classList.add('key');

			for (var i = 0; i < len; i++) {
				if (KEYMAP[p] < lims[i]) {
					var hue = rand((i + .8) * unit, (i + .2) * unit, 1);
					key.style.color = 'hsl(' + hue + ',100%,65%)';
					break;
				}
			}

			rot.classList.add('rot');

			key_els[p] = key;
			rot.appendChild(key);
			f.appendChild(rot);
		}

		a3d.appendChild(f);
	})();

	addEventListener('keydown', function (e) {
		e.preventDefault();

		for (var p in KEYMAP) {
			if (e.keyCode === KEYMAP[p]) {
				if (!key_els[p].classList.contains('vis')) key_els[p].classList.add('vis');
				return;
			}
		}
	}, false);

	addEventListener('keyup', function (e) {
		e.preventDefault();
	}, false);

	addEventListener('animationend', function (e) {
		var t = e.target;
		if (e.animationName === 'hl') t.classList.remove('vis');
	}, false);
};