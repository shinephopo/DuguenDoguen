
// @@ scroll jquery
//mouse scoll, nav background color trans
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $("header").addClass("active");
    }else if($(window).scrollTop() === 0) {
        $("header").removeClass("active");
    }else {
        //remove the background property so it comes transparent again (defined in your css)
    $("header").removeClass("active");
    }
});

  //text scroll slide
let txtTop = document.querySelector('.txtTop');
let txtBottom = document.querySelector('.txtBottom');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    txtTop.style.marginLeft = value * 3 +"px";
    txtBottom.style.marginRight = value * 3 +"px";
});
document.querySelector('.info-nav > li').addEventListener('click',function(){
    document.querySelector('.info-nav > li').classList.add('active')
});