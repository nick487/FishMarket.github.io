$(function() {
	echart_1(); // Market Analysis
	echart_2(); // User Statistics

	echart_3(); // Sales Volume
	echart_4(); // 左下

	echart_5(); // 冰箱存储量
	echart_6(); // 冰箱存储量
	echart_7(); // 冰箱存储量
	echart_8(); // 冰箱存储量

	echart_map();

	// 点击跳转
	$('#chart_map').click(function() {
		// window.location.href = '';
	});

	$('.t_btn2').click(function() {
		// window.location.href = '';
	});
});

// Market Analysis
function echart_1() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart_1'));

	// 指定图表的配置项和数据
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		color: ['#2c71a6', '#FFEA51'],
		legend: {
			data: ['Sale', 'Growth_rate'],
			top: 'bottom',
			textStyle: {
				color: '#FFFFFF',
				fontSize: '10'
			}
		},
		xAxis: [{
			type: 'category',
			data: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
			axisPointer: {
				type: 'shadow'
			},
			// x轴的字体样式
			axisLabel: {
				show: true,
				textStyle: {
					color: '#FFFFFF',
					fontSize: '10'
				}
			},
			// 控制网格线是否显示
			splitLine: {
				show: false,
				//  改变轴线颜色
				lineStyle: {
					// 使用深浅的间隔色
					color: ['#46bee9']
				}
			},
			// x轴的颜色和宽度
			axisLine: {
				lineStyle: {
					color: '#FFFFFF',
					width: 2, //这里是坐标轴的宽度,可以去掉
				}
			}
		}],
		yAxis: [{
				type: 'value',
				name: 'Sale',
				min: 0,
				max: 20,
				interval: 5,
				axisLabel: {
					formatter: '{value} ml'
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#FFFFFF',
						fontSize: '10'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			{
				type: 'value',
				name: 'Growth_rate',
				min: -0.3,
				max: 0.4,
				interval: 0.1,
				axisLabel: {
					formatter: '{value} °C'
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#FFFFFF',
						fontSize: '10'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			}
		],
		series: [{
				name: 'Sale',
				type: 'bar',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' ml';
					}
				},
				data: [
					6, 5, 8, 9, 11, 12, 13, 14, 15, 16, 17
				],
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#c8daef'
						}, {
							offset: 1,
							color: '#2F9EFA'
						}]),
					}
				}
			},
			{
				name: 'Growth_rate',
				type: 'line',
				yAxisIndex: 1,
				tooltip: {
					valueFormatter: function(value) {
						return value + ' °C';
					}
				},
				data: [0.05, -0.2, 0.23, 0.2, 0.05, 0.06, 0.06, 0.05, 0.04, 0.04, 0.04],
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#FFEA51'
						}, {
							offset: 1,
							color: '#FFEA51'
						}]),
					}
				}
			}
		]

	};

	// 使用刚指定的配置项和数据显示图表
	myChart.setOption(option);

	setInterval(function() { //把option.series[0].data[0].value的值使用random()方法获取一个随机数
		option.series[0].data[0].value = parseInt(Math.random() * 40) + 60;
		myChart.setOption(option, true);
	}, 2000);
}

// User Statistics
function echart_2() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart_2'));

	var option = {
		legend: {
			top: 'bottom',
			textStyle: {
				color: '#FFFFFF',
				fontSize: '10'
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		color: ['green', 'yellow', 'red'],
		series: [{
			name: 'User Statistics',
			type: 'pie',
			radius: [40, 100],
			center: ['50%', '50%'],
			roseType: 'area',
			data: [{
					value: 8865,
					name: 'A_area'
				},
				{
					value: 5630,
					name: 'B_area'
				},
				{
					value: 3725,
					name: 'C_area'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},
				normal: {
					// borderColor: "#FFFFFF",
					// borderWidth: 1,
					label: {
						show: false,
						formatter: '{d}%'
					},
					labelLine: {
						show: false
					}
				}
			}
		}]
	};

	myChart.setOption(option);
}

// Sales Volume
function echart_3() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart_3'));


	var dataStyle = {
		normal: {
			// label : {
			//     show: false,
			//     position:'right',
			//     // formatter: '{c}%'
			// },
			color: function(params) {
				// build a color map as your need.            
				var colorList = [
					'#2b1f67', '#380c51', '#16397d', '#514cd3',
					'#2c71a6', '#B5C334', '#FCCE10', '#f00'
				];
				return colorList[params.dataIndex]
			},
		}
	};
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		// color: ['#2c71a6'],
		grid: {
			left: '3%',
			right: '7%',
			top: '10%',
			bottom: '10%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			// x轴的字体样式
			axisLabel: {
				show: true,
				textStyle: {
					color: '#FFFFFF',
					fontSize: '10'
				}
			},
			// 控制网格线是否显示
			splitLine: {
				show: false,
				//  改变轴线颜色
				lineStyle: {
					// 使用深浅的间隔色
					color: ['red']
				}
			},
			// x轴的颜色和宽度
			axisLine: {
				lineStyle: {
					color: '#FFFFFF',
					// width: 2, //这里是坐标轴的宽度,可以去掉
				}
			}
		},
		yAxis: {
			type: 'category',
			data: ['Hong Kong', 'Malaysia', 'Singapore', 'Korea', 'Tailand', 'Vietnam', 'Japan', 'China'],
			// color: ['#a6c84c', '#ffa022', '#46bee9'],
			// y轴的字体样式
			axisLabel: {
				show: true,
				textStyle: {
					color: '#FFFFFF'
				}
			},
			// y轴的颜色和宽度
			axisLine: {
				lineStyle: {
					color: '#FFFFFF',
					width: 1, //这里是坐标轴的宽度
				}
			}
		},
		series: [{
			name: '',
			type: 'bar',
			stack: '数量',
			itemStyle: dataStyle,
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [114, 137, 164, 233, 275, 310, 350, 380]
		}]
	};

	myChart.setOption(option);
}

// 左下
function echart_4() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart_4'));

	var option = {
		title: {
			text: ''
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['normal', 'unbalanced', 'Noparallel', 'oblique', 'loose'],
			textStyle: {
				color: '#fff'
			},
			top: 'top'
		},
		grid: {
			top: '20%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#008000'],
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			splitLine: {
				show: false
			},
			axisLine: {
				show: false, //不显示坐标轴线
				lineStyle: {
					color: '#FFFFFF'
				}
			},
		},
		yAxis: {
			name: '',
			type: 'value',
			min: 0,
			max: 0.14,
			interval: 0.02,
			// axisLabel: {
			// 	formatter: '{value} °C'
			// },
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#FFFFFF',
					fontSize: '10'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			}
		},
		series: [{
				name: 'normal',
				type: 'line',
				data: [0.12, 0.13, 0.11, 0.115, 0.12, 0.115, 0.11, 0.112, 0.122, 0.125]
			},
			{
				name: 'unbalanced',
				type: 'line',
				data: [0.11, 0.12, 0.11, 0.117, 0.12, 0.114, 0.11, 0.105, 0.106, 0.107]
			},
			{
				name: 'Noparallel',
				type: 'line',
				data: [0.08, 0.09, 0.085, 0.087, 0.083, 0.086, 0.088, 0.079, 0.097, 0.09]
			},
			{
				name: 'oblique',
				type: 'line',
				data: [0.07, 0.08, 0.085, 0.083, 0.085, 0.086, 0.081, 0.082, 0.075, 0.072]
			},
			{
				name: 'loose',
				type: 'line',
				data: [0.045, 0.046, 0.045, 0.044, 0.046, 0.045, 0.046, 0.047, 0.046, 0.045]
			}
		]
	};

	myChart.setOption(option);
}

// 冰箱存储量
function echart_5() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart_5'));

	var option = {
		title: {
			text: 'Dasbate1',
			x: 'center',
			textStyle: {
				color: '#FFFFFF',
				// fontSize: '10'
			}
		},
		angleAxis: {
			axisTick: {
				show: false //不显示坐标轴刻度线
			},
			axisLine: {
				show: false, //不显示坐标轴线
			},
			axisLabel: {
				show: false, //不显示坐标轴上的文字
			},
			splitLine: {
				show: false // 不显示网格线
			},
		},
		radiusAxis: {
			type: 'category',
			z: 10,
			show: false, //不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
			axisTick: {
				show: false //不显示坐标轴刻度线
			},
			axisLine: {
				show: false, //不显示坐标轴线
			},
			axisLabel: {
				show: false, //不显示坐标轴上的文字
			},
			splitLine: {
				show: false // 不显示网格线
			},
		},
		polar: {},
		color: ['#2c71a6', '#FFEA51'],
		series: [{
				type: 'bar',
				data: [0, 0, 0, 4],
				coordinateSystem: 'polar',
				name: 'A',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			},
			{
				type: 'bar',
				data: [0, 0, 3, 0],
				coordinateSystem: 'polar',
				name: 'B',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			}
		]
	};

	myChart.setOption(option);
}

// 冰箱存储量
function echart_6() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart_6'));

	var option = {
		title: {
			text: 'Dasbate2',
			x: 'center',
			textStyle: {
				color: '#FFFFFF',
				// fontSize: '10'
			}
		},
		angleAxis: {
			axisTick: {
				show: false //不显示坐标轴刻度线
			},
			axisLine: {
				show: false, //不显示坐标轴线
			},
			axisLabel: {
				show: false, //不显示坐标轴上的文字
			},
			splitLine: {
				show: false // 不显示网格线
			},
		},
		radiusAxis: {
			type: 'category',
			z: 10,
			show: false, //不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
			axisTick: {
				show: false //不显示坐标轴刻度线
			},
			axisLine: {
				show: false, //不显示坐标轴线
			},
			axisLabel: {
				show: false, //不显示坐标轴上的文字
			},
			splitLine: {
				show: false // 不显示网格线
			},
		},
		polar: {},
		color: ['#2c71a6', '#FFEA51'],
		series: [{
				type: 'bar',
				data: [0, 0, 0, 4],
				coordinateSystem: 'polar',
				name: 'A',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			},
			{
				type: 'bar',
				data: [0, 0, 3, 0],
				coordinateSystem: 'polar',
				name: 'B',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			}
		]
	};

	myChart.setOption(option);
}

// 冰箱存储量
function echart_7() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart_7'));

	var option = {
		title: {
			text: 'Dasbate3',
			x: 'center',
			textStyle: {
				color: '#FFFFFF',
				// fontSize: '10'
			}
		},
		angleAxis: {
			axisTick: {
				show: false //不显示坐标轴刻度线
			},
			axisLine: {
				show: false, //不显示坐标轴线
			},
			axisLabel: {
				show: false, //不显示坐标轴上的文字
			},
			splitLine: {
				show: false // 不显示网格线
			},
		},
		radiusAxis: {
			type: 'category',
			z: 10,
			show: false, //不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
			axisTick: {
				show: false //不显示坐标轴刻度线
			},
			axisLine: {
				show: false, //不显示坐标轴线
			},
			axisLabel: {
				show: false, //不显示坐标轴上的文字
			},
			splitLine: {
				show: false // 不显示网格线
			},
		},
		polar: {},
		color: ['#2c71a6', '#FFEA51'],
		series: [{
				type: 'bar',
				data: [0, 0, 0, 4],
				coordinateSystem: 'polar',
				name: 'A',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			},
			{
				type: 'bar',
				data: [0, 0, 3, 0],
				coordinateSystem: 'polar',
				name: 'B',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			}
		]
	};

	myChart.setOption(option);
}

// 冰箱存储量
function echart_8() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart_8'));

	var option = {
		title: {
			text: 'Dasbate4',
			x: 'center',
			textStyle: {
				color: '#FFFFFF',
				// fontSize: '10'
			}
		},
		angleAxis: {
			axisTick: {
				show: false //不显示坐标轴刻度线
			},
			axisLine: {
				show: false, //不显示坐标轴线
			},
			axisLabel: {
				show: false, //不显示坐标轴上的文字
			},
			splitLine: {
				show: false // 不显示网格线
			},
		},
		radiusAxis: {
			type: 'category',
			z: 10,
			show: false, //不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
			axisTick: {
				show: false //不显示坐标轴刻度线
			},
			axisLine: {
				show: false, //不显示坐标轴线
			},
			axisLabel: {
				show: false, //不显示坐标轴上的文字
			},
			splitLine: {
				show: false // 不显示网格线
			},
		},
		polar: {},
		color: ['#2c71a6', '#FFEA51'],
		series: [{
				type: 'bar',
				data: [0, 0, 0, 4],
				coordinateSystem: 'polar',
				name: 'A',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			},
			{
				type: 'bar',
				data: [0, 0, 3, 0],
				coordinateSystem: 'polar',
				name: 'B',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			}
		]
	};

	myChart.setOption(option);
}

// 地图
function echart_map() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart_map'));

	let geoCoordMap = { // 地图地点的经度纬度
		'Sydney': [151.2094, -33.8650],
		'Melbourne': [144.9631, -37.8136],
		'Brisbane': [153.0281, -27.4678],
		'Perth': [115.8589, -31.9522],
		'Adelaide': [138.6011, -34.9289],
		'Gold Coast': [153.4000, -28.0167],
		'Cranbourne': [145.2834, -38.0996],
		'Canberra': [149.1269, -35.2931],
		'Newcastle': [151.7500, -32.9167],
		'Wollongong': [150.8831, -34.4331],
		'Geelong': [144.3500, -38.1500],
		'Hobart': [147.3250, -42.8806],
		'Townsville': [146.8183, -19.2564],
		'Ipswich': [152.7667, -27.6167],
		'Cairns': [145.7703, -16.9303],
	}

	// 发射点数组
	let GZData = [
		[
			[{
				name: 'Sydney'
			}, {
				name: 'Sydney'
			}],
			[{
				name: 'Sydney'
			}, {
				name: 'Brisbane'
			}],
			[{
				name: 'Sydney'
			}, {
				name: 'Cranbourne'
			}],
			[{
				name: 'Sydney'
			}, {
				name: 'Canberra'
			}],
			[{
				name: 'Sydney'
			}, {
				name: 'Cairns'
			}],
		],
		[
			[{
				name: 'Brisbane'
			}, {
				name: 'Brisbane'
			}],
			[{
				name: 'Brisbane'
			}, {
				name: 'Perth'
			}],
			[{
				name: 'Brisbane'
			}, {
				name: 'Wollongong'
			}],
			[{
				name: 'Brisbane'
			}, {
				name: 'Townsville'
			}],
			[{
				name: 'Brisbane'
			}, {
				name: 'Canberra'
			}],
		],
		[
			[{
				name: 'Melbourne'
			}, {
				name: 'Melbourne'
			}],
			[{
				name: 'Melbourne'
			}, {
				name: 'Sydney'
			}],
			[{
				name: 'Melbourne'
			}, {
				name: 'Brisbane'
			}],
			[{
				name: 'Melbourne'
			}, {
				name: 'Adelaide'
			}],
			[{
				name: 'Melbourne'
			}, {
				name: 'Canberra'
			}],
		]
	]

	// 发射点数组下标
	let launchIndex = 0

	// 按照数组顺序循环发射（如果是使用定时器销毁重建图形发射点那么这个就派上用场了）
	let len = GZData.length
	let arrIndex = launchIndex
	if (launchIndex < len - 1) {
		launchIndex = launchIndex + 1
	} else {
		launchIndex = 0
	}
	// 防止切换用户列表时，定时器延迟造成下标超出数组问题
	if (arrIndex > len - 1) {
		launchIndex = 0
		arrIndex = 0
	}

	// 数组遍历
	let lineDataArr = []
	lineDataArr.push(GZData[arrIndex])

	// // 自定义多个发射点（push多少个就会有多少个同时发射点）
	// lineDataArr.push(GZData[0])
	// lineDataArr.push(GZData[1])

	// 处理线路所需要的数据格式data
	let convertData = function(data) {
		// console.log(data)
		let res = []
		for (let i = 0; i < data.length; i++) {
			let dataItem = data[i]
			let fromCoord = geoCoordMap[dataItem[0].name]
			let toCoord = geoCoordMap[dataItem[1].name]
			if (fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				})
			}
		}
		return res
	}
	// 发射点和线路颜色
	let color = ['#46bee9', '#a6c84c', '#46bee9'] // 橙 墨绿 蓝
	let seriesData = []
	lineDataArr.forEach(function(item, i) {
		seriesData.push({ // 亮光发射效果
			// name: item[0] + ' Top10',
			name: 'Sydney',
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 6, // 特效动画的时间，单位为 s
				// delay: i * 5000, // 特效动画的延时，支持设置成数字或者回调。单位ms
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 3
			},
			label: {
				show: true
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			// data: convertData(item[1])
			data: convertData(item)
		}, { // 线路效果
			// name: item[0] + ' Top10',
			name: 'Brisbane',
			type: 'lines',
			zlevel: 2,
			effect: {
				// show: true,
				// period: 6,
				// trailLength: 0,
				// symbol: planePath,
				// symbolSize: 55
			},
			label: {
				show: true
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1.5,
					opacity: 0.4,
					curveness: 0.2
				}
			},
			// data: convertData(item[1])
			data: convertData(item)
		}, { // 文字和地点涟漪效果
			// name: item[0] + ' Top10',
			name: 'Melbourne',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			// geoIndex: 0,
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				emphasis: { // 有这一层为鼠标移入涟漪点才显示文字，去掉这一层那么直接显示文字再地图上
					show: true,
					// position: 'top',
					formatter: '{b}'
					// offset: [10, -4]
				}
			},
			// label: { // 涟漪文字位置
			//     normal: {
			//         show: true,
			//         position: 'right', 
			//         formatter: '{b}'
			//     }
			// },
			symbolSize: 8,
			// symbolOffset:[4, 4], // 标记相对于原本位置的偏移
			itemStyle: { // 涟漪相关颜色
				normal: {
					color: color[i]
				}
				// color: color[i]
			},
			data: item.map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				}
			})
		})
	})
	// 中国地图线路特效配置 end

	var option = {
		// title: {
		// 	text: '',
		// 	subtext: '',
		// 	left: 'center',
		// 	textStyle: {
		// 		color: '#fff'
		// 	}
		// },
		tooltip: {
			trigger: 'item'
		},
		geo: {
			map: '澳大利亚',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#404a59'
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},
		series: [
			...seriesData, // 中国地图线路特效配置
			{
				// name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
				type: 'map',
				geoIndex: 0,
				label: {
					show: true
				},
				// 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
				data: [{
					'name': 'Sydney',
					'value': 2
				}, {
					'name': 'Melbourne',
					'value': 80
				}, {
					'name': 'Brisbane',
					'value': 25
				}, {
					'name': 'Perth',
					'value': 10
				}, {
					'name': 'Adelaide',
					'value': 36
				}, {
					'name': 'Cranbourne',
					'value': 2
				}, {
					'name': 'Newcastle',
					'value': 60
				}]
			}
		]
	};

	myChart.setOption(option);
}
