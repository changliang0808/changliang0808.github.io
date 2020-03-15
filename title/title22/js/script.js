/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
chart.curveContainer.padding(50, 20, 50, 20);
chart.levelCount = 4;
chart.yAxisRadius = am4core.percent(25);
chart.yAxisInnerRadius = am4core.percent(-25);
chart.maskBullets = false;

var colorSet = new am4core.ColorSet();
colorSet.saturation = 0.5;

chart.data = [{
    "category": "初识校园",
    "start": "2006-09-01",
    "end": "2010-06-25",
    "color": colorSet.getIndex(0),
    "task": "初识校园————爱的开始",
    "disabled2":false,
    "image2":"img/20.jpg",
    "location":0
},{
    "category": "毕业分离",
    "start": "2010-07-01",
    "end": "2012-03-15",
    "color": colorSet.getIndex(2),
    "task": "毕业分离————迷茫"
}, {
    "category": "孤独一人",
    "start": "2012-09-18",
    "end": "2012-11-03",
    "color": colorSet.getIndex(3),
    "task": "独自生活，独自面对亲人的生死离别"
}, {
    "category": "北京新篇",
    "start": "2013-03-15",
    "end": "2014-10-01",
    "color": colorSet.getIndex(4),
    "task": "开启新的生活，因为有你，因我我在"
}, {
    "category": "正式官宣",
    "start": "2016-06-08",
    "end": "2017-01-01",
    "color": colorSet.getIndex(5),
    "task": "官宣领证",
    "disabled1":false,
    "disabled2":false,
   
    "image1":"img/26.jpg",
    "image2":"img/33.png"
},  {
    "category": "爱的结晶",
    "start": "2016-12-28",
    "end": "2017-08-08",
    "color": colorSet.getIndex(6),
    "task": "爱的延续，生命的意义……"   , 
    "disabled2":false,
    "disabled1":false,
    "image2":"img/1.jpg",
    "image1":"img/34.png"

    "image1":"img/1.jpg"
}, {
    "category": "我爱我家",
    "start": "2018-12-01",
    "end": "2020-01-17",
    "color": colorSet.getIndex(7),
    "task": "共同努力、共筑建爱的港湾"
}, {
    "category": "未来可期",
    "start": "2020-02-09",
    "end":"2020-03-17",
    "color": colorSet.getIndex(9),
    "task": "执子之手、与子偕老……",
    "disabled2":false,
    "image2":"img/24.jpg",
}];

chart.dateFormatter.dateFormat = "yyyy-MM-dd";
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
chart.fontSize = 11;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.labels.template.paddingRight = 25;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.innerRadius = -60;
categoryAxis.renderer.radius = 60;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 70;
dateAxis.baseInterval = { count: 1, timeUnit: "day" };
dateAxis.renderer.tooltipLocation = 0;
dateAxis.startLocation = -0.5;
dateAxis.renderer.line.strokeDasharray = "1,4";
dateAxis.renderer.line.strokeOpacity = 0.6;
dateAxis.tooltip.background.fillOpacity = 0.2;
dateAxis.tooltip.background.cornerRadius = 5;
dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
dateAxis.tooltip.label.paddingTop = 7;

var labelTemplate = dateAxis.renderer.labels.template;
labelTemplate.verticalCenter = "middle";
labelTemplate.fillOpacity = 0.7;
labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
labelTemplate.background.fillOpacity = 1;
labelTemplate.padding(7, 7, 7, 7);

var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
series.columns.template.height = am4core.percent(20);
series.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

series.dataFields.openDateX = "start";
series.dataFields.dateX = "end";
series.dataFields.categoryY = "category";
series.columns.template.propertyFields.fill = "color"; // get color from data
series.columns.template.propertyFields.stroke = "color";
series.columns.template.strokeOpacity = 0;

var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 3;
bullet.circle.strokeOpacity = 0;
bullet.propertyFields.fill = "color";
bullet.locationX = 0;


var bullet2 = series.bullets.push(new am4charts.CircleBullet());
bullet2.circle.radius = 3;
bullet2.circle.strokeOpacity = 0;
bullet2.propertyFields.fill = "color";
bullet2.locationX = 1;


var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet1.disabled = true;
imageBullet1.propertyFields.disabled = "disabled1";
imageBullet1.locationX = 1;
imageBullet1.circle.radius = 20;
imageBullet1.propertyFields.stroke = "color";
imageBullet1.background.propertyFields.fill = "color";
imageBullet1.image = new am4core.Image();
imageBullet1.image.propertyFields.href = "image1";

var imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet2.disabled = true;
imageBullet2.propertyFields.disabled = "disabled2";
imageBullet2.locationX = 0;
imageBullet2.circle.radius = 20;
imageBullet2.propertyFields.stroke = "color";
imageBullet2.background.propertyFields.fill = "color";
imageBullet2.image = new am4core.Image();
imageBullet2.image.propertyFields.href = "image2";


var eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
eventSeries.dataFields.dateX = "eventDate";
eventSeries.dataFields.categoryY = "category";
eventSeries.data = [
    { category: "初识校园", eventDate: "2006-09-01", letter: "注定", description: "兰州理工大学" },

    { category: "初识校园", eventDate: "2007-01-01", letter: "初见", description: "第一次见面（两个傻瓜）" },

    { category: "初识校园", eventDate: "2009-06-04", letter: "过夜", description: "一起去兴隆山（喝的烂醉）" },

    { category: "初识校园", eventDate: "2010-06-25", letter: "毕业", description: "毕业分离（前途未知）" },

    
    { category: "毕业分离", eventDate: "2012-09-18", letter: "复合", description: "短信告知，复合复合复合" },

    { category: "孤独一人", eventDate: "2012-11-03", letter: "伤离别", description: "失去了至亲之人" },
    
    { category: "北京新篇", eventDate: "2013-03-15", letter: "新篇章", description: "来北京，开启新生活" },

    { category: "北京新篇", eventDate: "2014-03-15", letter: "群居", description: "他、她、他们的到来" },

    { category: "北京新篇", eventDate: "2014-10-01", letter: "见家长", description: "第一次去我家" },



    { category: "正式官宣", eventDate: "2016-06-08", letter: "领证", description: "我们领证了" },
    { category: "蜜月旅行", eventDate: "2016-09-23", letter: "happy", description: "一起飞三亚" },
    
    { category: "爱的结晶", eventDate: "2016-12-28", letter: "小祖宗", description: "13:33 分 B超确认新生命的到来" },
    { category: "爱的结晶", eventDate: "2017-08-08", letter: "宝贝", description: "16:59 宝贝来到这个世界第一声啼哭" },
    
    { category: "我爱我家", eventDate: "2018-12-10", letter: "爱巢", description: "我们有了自己得小窝" },

    { category: "我爱我家", eventDate: "2019-10-23", letter: "生离", description: "她一个人回产春，带着我的心" },
    { category: "我爱我家", eventDate: "2020-01-17", letter: "重逢", description: "家、爱人、一日三餐、朝起幕作" },

    { category: "未来可期", eventDate: "2020-03-17", letter: "未来", description: "唯有死亡才能将我们分离………" }


];
eventSeries.strokeOpacity = 0;

var flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet())
flagBullet.label.propertyFields.text = "letter";
flagBullet.locationX = 0;
flagBullet.tooltipHTML = "<b>{description}<b>";

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.align = "center"
chart.scrollbarX.width = am4core.percent(85);

var cursor = new am4plugins_timeline.CurveCursor();
chart.cursor = cursor;
cursor.xAxis = dateAxis;
cursor.yAxis = categoryAxis;
cursor.lineY.disabled = true;
cursor.lineX.strokeDasharray = "1,4";
cursor.lineX.strokeOpacity = 1;

dateAxis.renderer.tooltipLocation2 = 0;
categoryAxis.cursorTooltipEnabled = false;