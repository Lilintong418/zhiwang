var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay: {
        delay: 2000
    },
});
var put = document.getElementById('put');
put.addEventListener('touchstart',function(){
    window.location.href = 'https://www.baidu.com/';
},false)
var app = document.getElementById('app');
app.addEventListener('touchstart',function(){
    window.location.href = 'app.html';
})
// 更多显示隐藏
var gengduo = document.getElementById('gengduo');
var dis = document.getElementById('dis');
var flag = true;
gengduo.addEventListener('touchstart',function () {
    if(flag==true){
        $('#dis').slideDown(1000)
        flag=false;
    }else{
        $('#dis').slideUp(1000)
        flag = true;
    }
 })