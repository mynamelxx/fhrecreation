var app=new Vue({
  el:'#PrizeResult',
	data:{
		themecolor:"#ff9800",
		type:'重庆时时彩',
		time:'2018-07-01',
		opentype:false,
		opentime:false,
		typelist:[
			'重庆时时彩',
			'六合彩',
			'北京赛车pk10',
		],
		timelist:[
			'2018-07-01',
			'2018-07-02',
			'2018-07-03',
			'2018-07-04',
			'2018-07-05',
		],
		resultlist:[
			{periods:'0710027',time:'07-10 10:30',up:[3,1,7,0,0],down:['11','单','小','龙',],},
			{periods:'0710026',time:'07-10 10:20',up:[3,1,7,0,0],down:['11','单','小','龙',],},
			{periods:'0710025',time:'07-10 10:10',up:[3,1,7,0,0],down:['11','单','小','龙',],},
			{periods:'0710024',time:'07-10 10:00',up:[3,1,7,0,0],down:['11','单','小','龙',],},
			{periods:'0710023',time:'07-10 01:55',up:[3,1,7,0,0],down:['11','单','小','龙',],},
		],
	},
	methods:{
		back(){
			window.history.back();
		},
		changetype(e){
			this.type=e.value;
			this.opentype=false;
		},
		changetime(e){
			this.time=e.value;
			this.opentime=false;
		},
	}
})