var app=new Vue({
  el:'#Payment',
	data:{
		money:'',
		bank:0,
	},
	methods:{
		back(){
			window.location.href="deposit.html"
		},
		changebank(e){
			this.bank=e
		}
	}
})