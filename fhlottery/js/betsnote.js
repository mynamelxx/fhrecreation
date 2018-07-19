var app=new Vue({
  el:'#BetsNote',
	data:{
		themecolor:"#ff9800",
		allnum:'2000.00',
		list:[
			{number:'2018-079',detail:'特A2号 @48.6',money:'500.00',winmoney:'23800.00',},
			{number:'2018-079',detail:'特A12号 @48.6',money:'500.00',winmoney:'23800.00',},
			{number:'2018-079',detail:'特A9号 @48.6',money:'500.00',winmoney:'23800.00',},
			{number:'2018-079',detail:'特A13号 @48.6',money:'500.00',winmoney:'23800.00',},
		],
	},
	methods:{
		back(){
			window.history.back()
		}
	}
})