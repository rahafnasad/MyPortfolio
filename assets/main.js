const nav = document.querySelector(".Navbar");
const Image = document.querySelector(".image");
const loading = document.querySelector(".loading");
const scrollToTop = document.querySelector(".scrollToTop");
const mainPage = document.querySelector("#mainPage");
const navList=document.querySelectorAll(".Navbar ul li a");
const header = document.querySelector("header");
console.log(navList);
window.addEventListener('scroll' , function ()
{
    if (window.scrollY>Image.offsetTop||window.scrollY>header.offsetTop){
        nav.style.backgroundColor="rgba(8, 28, 21,.9)";
    }
    else{
        nav.style.backgroundColor="transparent";

    }
    if (window.scrollY>mainPage.offsetTop){
        scrollToTop.style.visibility="visible"
    }
    else{
        scrollToTop.style.visibility="hidden"


    }
})

window.addEventListener("load" , function (){
    this.setTimeout(function(){
        loading.style.visibility ="hidden";
        document.body.style.overflow="auto";
    },2000)
})
scrollToTop.addEventListener("click",function(){
window.scroll({
    top:0,
    behavior:"smooth"

})
})

navList.forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll(".title").forEach(function(element) {
            element.style.paddingTop = "40px";
        });
        
        navList.forEach(function(i) {
            i.classList.remove('active');
        });

        this.classList.add('active');
    });
});

