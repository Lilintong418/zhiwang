window.onload = function(){
    var page = 0;
    var show_more = true;
    // 内容列表
    getData(0);

    $('.more')[0].addEventListener('touchstart',function(){
        console.log(page)
        if(!show_more){
          this.style.display = 'none'
          return
        };
        getData(page)
    },false)

    function getData(n){
      $.ajax({
        url:"./data.php",
        type:"get",
        data:{
          num:n
        },
        dataType:"json",
        success:function(res){
          page = res.page;
          show_more = res.show_more;
          var list = res.data.list;
          $.each(list,function(i,item){
            var str = '';
            str = `<div class="list">
                    <h4>${item.data.title}</h4>
                    <div class="items">
                        <img src="${item.data.image}" class="imgs" alt="">
                        <div class="text">
                            <p>${item.data.content}</p>
                            <div>
                                <span>${item.data_source.pv}浏览</span>
                                <h5>${item.data.bottom.user.name} <img src="${item.data.bottom.user.logo}" alt=""></h5>
                            </div>
                        </div>
                    </div>`
              $('.content').append(str)
          })
        }
      })
    }









    // 轮播图
    var mySwiper = new Swiper ('.swiper', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
    })   



}