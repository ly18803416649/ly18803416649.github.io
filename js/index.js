/**
 * Created by yy on 2016/10/4.
 */
$(function () {
   var clear = $('.clear');
   var wh = document.documentElement.clientHeight;
   var navigation = $('#navigation');
   // console.log(wh);
   clear.height(wh);
   flage = true;

   var floors = $('.floor');
   var search = $('.search');
   var aboutbtn = $('.header .hn-bot .aboutbtn');
   var portbtn = $('.header .hn-bot .portbtn');

   var tops=[];
   for(var i=0;i<floors.length;i++){
      tops.push(floors[i].offsetTop);
   }

   console.log(tops);
   console.log(search);


   $(window).on('scroll',function(){
      stop = document.body.scrollTop||document.documentElement.scrollTop;
      if(stop>wh){
         if(flage){
            flage=false;
            navigation.addClass('juding');
         }
      }else if(stop<wh){
         if(!flage){
            flage=true;
            navigation.removeClass('juding');
         }
      }
     
      portbtn.on('click',function () {
         $(document.body).animate({scrollTop:floors.eq(3).offsetTop},500);
         $(document.documentElement).animate({scrollTop:floors.eq(3).offsetTop},500);
      });



   //   楼层
      for(var i=0;i<search.length;i++){
         search[i].index=i;
         search[i].onclick=function(){
            $(document.body).animate({scrollTop:floors[this.index].offsetTop},500);
            $(document.documentElement).animate({scrollTop:floors[this.index].offsetTop},500);
         }
      }

      for(var i=1;i<tops.length;i++){

         if(tops[i]<stop+200){
            for(j=0;j<search.length;j++){
               search.eq(j).removeClass('active');
            }
            search.eq(i).addClass('active');
         }
      }

   })

   /***********portfolio**************/
   var show = $('#portfolio .show');
   var ss = $('#portfolio .ss');
   ss.on('mouseenter',function () {
      $(this).find('a').addClass('slide');
   })
   ss.on('mouseleave',function () {
      $(this).find('a').removeClass('slide');
   })
   /***********portfolio**************/
   /*************点击****************/
   var showgame = $('#portfolio .show .game');
   var showweb = $('#portfolio .show .web');
   var portbg = $('#portfolio .port-bg');

   var bggame = $('#portfolio .bg-game');
   var bgweb = $('#portfolio .bg-web');
   
   showgame.on('click',function () {
      portbg.show();
      bggame.show();
   })
   showweb.on('click',function () {
      portbg.show();
      bgweb.show();
   })
   portbg.on('click',function () {
      portbg.hide();
      bggame.hide();
      bgweb.hide();
   })

   /*************点击****************/

})
