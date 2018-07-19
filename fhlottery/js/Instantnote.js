var app=new Vue({
  el:'#Instantnote',
	data:{
		themecolor:"#ff9800",
		list:[
			{name:'极速时时彩',num:0,money:'0.00'},
			{name:'圣地彩',num:0,money:'0.00'},
			{name:'六合彩',num:4,money:'2000.00'},
		]
	},
	methods:{
		back(){
			window.history.back()
		},
	}
})