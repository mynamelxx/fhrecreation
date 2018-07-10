var app=new Vue({
  el:'#Home',
	data:{
		logo:'https://img86.3000ms.com/MSiteOfficial/Logo/2016/07/07/101515879.png',
		username:'试玩账号',
		tipmessage:'123123',
		showinfo:false,
		swiperOption1: {
			notNextTick: true,
			loop:true,
			autoplay:{
				delay:3000,
				disableOnInteraction:false,
			},
			grabCursor:true,
			pagination:{
				el:'.swiper-pagination',
				clickable: true
			},
		},
		marqueelist:[
			'重要通告：VIP入款【浦发银行庞高3373】【工商银行马金山1106】已停用；公司会不定期对银行账号进行更换，请您每次入款前务必登录您的会员账号在我们网站获取最新的入款账号，先提交订单再存款，如转入停用账户造成的资金损失本公司概不负责，如有任何疑问请联系我们24小时在线客服。',
			'凤凰娱乐，新增微信，支付宝扫码入款渠道，每天早上9点至凌晨2点会员只需联系在线客服提供微信或支付宝二维码进行支付，提供支付成功截图至客服，返回＜线上存款＞点击＜银行转账＞选择对应的入款方式和金额提交即可快速到账！',
			'重要通告：VIP入款【巫伟鑫】【民生1395】【杨建磊】【招商6021】已停用；公司会不定期对银行账号进行更换，请您每次入款前务必登录您的会员账号在我们网站获取最新的入款账号，先提交订单再存款，如转入停用账户造成的资金损失本公司概不负责，如有任何疑问请联系我们24小时在线客服。',
		],
		swiperlist:[
			'https://img86.3000ms.com/activity/2018/06/04/181663124.jpg',
			'https://img86.3000ms.com/activity/2018/03/23/171192880.jpg',
			'https://img86.3000ms.com/activity/2018/03/23/162637839.jpg',
			'https://img86.3000ms.com/activity/2018/03/23/162790283.jpg',
			'https://img86.3000ms.com/activity/2018/03/23/163025965.jpg',
			'https://img86.3000ms.com/activity/2018/03/23/162855252.jpg',
		],
		horizontallist:[
			'热门游戏',
			'彩票游戏',
			'真人视讯',
			'电子游戏',
			'体育游戏',
		],
		activetab:'0',
		swiperOption2: {
			slidesPerView:4,
			notNextTick: true,
			loop:false,
			autoplay:false,
			grabCursor:true,
		},
		gamelist:[
			{icon:'https://m8.3000ms.com/official/images/g-ssc.png',name:'重庆时时彩'},
			{icon:'https://m8.3000ms.com/official/images/g-hkc.png',name:'六合彩'},
			{icon:'https://m8.3000ms.com/official/images/g-bjsc.png',name:'北京赛车'}
		],
	},
	components: {
		Swiper: VueAwesomeSwiper.swiper,
		SwiperSlide: VueAwesomeSwiper.swiperSlide,
	},
	methods:{
		login(){
			window.location.href="login.html"
		},
		seedetail(item){
			switch(item.name){
				case '重庆时时彩': window.location.href="game.html";break;
				case '北京赛车':window.location.href="game2.html";break;
			}
		},
		marqueedetail(){
			
		},
		seeuserinfo(){
			window.location.href="user.html"
		}
	}
})