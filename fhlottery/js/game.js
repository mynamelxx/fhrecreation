var app=new Vue({
	el:'#Game',
	data:{
		transfertip:true,
		tipmessage:'',
		showinfo:false,
		openSimple:false,
		themecolor:"#ff9800",
		night:false,
		betnum:0,
		num:'',
		rightlist:[
			{id:0,title:'开奖结果',icon:'icon-jiangbei',color:'#ff961b',},
			{id:1,title:'游戏规则',icon:'icon-qm',color:'#ff5f7d',},
			{id:2,title:'两面长龙',icon:'icon-sliders',color:'#d56bf4',},
			{id:3,title:'快速转账',icon:'icon-zhuanzhang01',color:'#ff961b',},
			{id:4,title:'路珠走势',icon:'icon-64',color:'#52bcda',},
			{id:5,title:'更换皮肤',icon:'icon-yifu',color:'#75d049',},
		],
		immediate:"0.00",
		income:'0.00',
		leftopen:false,
		rightopen:false,
		docked:false,
		gamelist:[
			{id:'0',name:'重庆时时彩',icon:'icon-zhongqingshishicai',},
			{id:'1',name:'六合彩',icon:'icon-liuhecai',},
			{id:'2',name:'北京赛车',icon:'icon-beijingsaiche',},
		],
		lottery:{
			title:'重庆时时彩',
			balance:"0.10",
			result1:['6','2','4','7','4'],
			result2:['23','单','大','龙'],
			oepnperiods:'0612051',
			endtime:'01:02',
			opentime:'02:02',
			periods:'0612052',
			lotterylist:[{id:'0',name:'两面'},{id:'1',name:'组合'},{id:'2',name:'第一球'},
			{id:'3',name:'第二球'},{id:'4',name:'第三球'},{id:'5',name:'第四球'},
			{id:'6',name:'第五球'},{id:'7',name:'前中后'}],
		},
		activetab:'0',
		showbtnlist:false,
		activebet:[[],[],[],[],[],[],[],[],[],[]],
		betslist:[
			{name:'冠亚和【大】',rate:'@2.2 X 1.00'},
			{name:'冠军【大】',rate:'1.984 X 1.00'},
		],
		Betslist:[
			{title:'总和、龙虎',
			shape:1,
			list:[
			{name:'总和大',odds:'1.984',id:0,},
			{name:'总和小',odds:'1.984',id:1,},
			{name:'总和单',odds:'1.984',id:2,},
			{name:'总和双',odds:'1.984',id:3,},]},
			{title:'总和、龙虎',
			shape:0,
			list:[
			{name:'总和大',odds:'1.984',id:0,},
			{name:'总和小',odds:'1.984',id:1,},
			{name:'总和单',odds:'1.984',id:2,},
			{name:'总和双',odds:'1.984',id:3,},]},
			{title:'总和、龙虎',
			shape:1,
			list:[
			{name:'总和大',odds:'1.984',id:0,},
			{name:'总和小',odds:'1.984',id:1,},
			{name:'总和单',odds:'1.984',id:2,},
			{name:'总和双',odds:'1.984',id:3,},]},
			{title:'总和、龙虎',
			shape:1,
			list:[
			{name:'总和大',odds:'1.984',id:0,},
			{name:'总和小',odds:'1.984',id:1,},
			{name:'总和单',odds:'1.984',id:2,},
			{name:'总和双',odds:'1.984',id:3,},]},
		],
	},
	mounted(){
		var night=localStorage.getItem('night')
		if(night){
			this.night=true;
			document.body.style.filter="invert(100%)";
		}else{
			this.night=false;
			document.body.style.filter="none";
		}
	},
	methods:{
		jumplist(item){
			if(item.id==0){
				window.location.href="prizeresult.html"
			}
		},
		betscancel(){
			this.openSimple=false;
			this.tipmessage='取消下注'
			this.showinfo=true;
			setTimeout(()=>{
				this.showinfo=false;
			},2000)
		},
		betsconfirm(){
			this.openSimple=false;
			this.tipmessage='下注成功'
			this.showinfo=true;
			setTimeout(()=>{
				this.showinfo=false;
			},2000)
		},
		bets(){
			if(this.num=''){
				this.openSimple=true;
			}else{
				this.tipmessage='请输入投注金额'
				this.showinfo=true
				setTimeout(()=>{
					this.showinfo=false;
				},2000)
			}
		},
		back(){
			window.location.href="index.html"
		},
		changeswitch(e){
			if(e){
				document.body.style.filter="invert(100%)";
				localStorage.setItem('night','1');
			}else{
				document.body.style.filter="none";
				localStorage.removeItem('night');
			}
		},
		pushactive(item,ind,index){
			if(this.activebet[index].indexOf(item.id)==-1){
				this.activebet[index].push(item.id)
			}else{
				var i=this.activebet[index].indexOf(item.id)
				this.activebet[index].splice(i,1);
			}
		},
		seedetail(item){
			switch(item.name){
				case '重庆时时彩': window.location.href="game.html";break;
				case '北京赛车':window.location.href="game2.html";break;
			}
		},
		changeactivetab(item){
			this.activetab=item.id
			this.activebet=[[],[],[],[],[],[],[],[],[],[]]
			if(this.Betslist.length==4){
				this.Betslist=[
					{shape:1,list:[
					{name:'总和大',odds:'1.984',id:0,},
					{name:'总和小',odds:'1.984',id:1,},
					{name:'总和单',odds:'1.984',id:2,},
					{name:'总和双',odds:'1.984',id:3,},]},
					{shape:0,list:[
					{name:'总和大',odds:'1.984',id:0,},
					{name:'总和小',odds:'1.984',id:1,},
					{name:'总和单',odds:'1.984',id:2,},
					{name:'总和双',odds:'1.984',id:3,},]},
					{shape:0,list:[
					{name:'总和大',odds:'1.984',id:0,},
					{name:'总和小',odds:'1.984',id:1,},
					{name:'总和单',odds:'1.984',id:2,},
					{name:'总和双',odds:'1.984',id:3,},]},
				]
			}else{
				this.Betslist=[
					{title:'总和、龙虎',
					shape:1,
					list:[
					{name:'总和大',odds:'1.984',id:0,},
					{name:'总和小',odds:'1.984',id:1,},
					{name:'总和单',odds:'1.984',id:2,},
					{name:'总和双',odds:'1.984',id:3,},]},
					{title:'总和、龙虎',
					shape:0,
					list:[
					{name:'总和大',odds:'1.984',id:0,},
					{name:'总和小',odds:'1.984',id:1,},
					{name:'总和单',odds:'1.984',id:2,},
					{name:'总和双',odds:'1.984',id:3,},]},
					{title:'总和、龙虎',
					shape:1,
					list:[
					{name:'总和大',odds:'1.984',id:0,},
					{name:'总和小',odds:'1.984',id:1,},
					{name:'总和单',odds:'1.984',id:2,},
					{name:'总和双',odds:'1.984',id:3,},]},
					{title:'总和、龙虎',
					shape:1,
					list:[
					{name:'总和大',odds:'1.984',id:0,},
					{name:'总和小',odds:'1.984',id:1,},
					{name:'总和单',odds:'1.984',id:2,},
					{name:'总和双',odds:'1.984',id:3,},]},
				]
			}
		}
	},
})