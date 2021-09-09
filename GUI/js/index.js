//  Start of Colors Box

$('.inner').click(function()
{
    let tempWdith=$('.colors-box').css('left');
    if(tempWdith=='0px')
    {
        let boxWdith=$(".colors-option").innerWidth();
        $('.colors-box').animate({left:-boxWdith},500);
       
    }
    else
    {
        $('.colors-box').animate({left:'0px'},500);
    }
});

$(".color-item").click(function(){

    let color=$(this).css('backgroundColor');
    let navcolor;
    $(".navbar-nav li a").hover(function () {
            // over
            navcolor=$(this).css('color');
            $(this).attr('style',`color: ${color} !important`)
        }, function () {
            // out
            $(this).attr('style',`color: ${navcolor} !important`)
        }
    );
    $('h1,h2,h3,h4,h5,h6,p').css('color',color);
});
// End of Colors Box
// document.getElementById('btnElemente').style.display="none";



//navbar scroll transparent 
$(window).scroll(()=>{

    let scroll = $(window).scrollTop();

    if (scroll == 0) {

        scrollTop();
    }
    else {

        scrollAny();
    }
});

function scrollTop() {
    $(".custom-nav").css("backgroundColor", "transparent");
    $(".custom-nav .navbar > a").css("color", "white");
    $(".navbar-collapse .navbar-nav .nav-item >a").css("color", "white");
    $(".custom-nav").css('box-shadow', 'none');
}

function scrollAny() {
    $(".custom-nav").css("backgroundColor", "rgba(255, 255, 255, 1)");
    $(".custom-nav .navbar > a").css("color", "black");
    $(".navbar-collapse .navbar-nav .nav-item >a").css("color", "black");
    $(".custom-nav").css('box-shadow', '0 1px 8px 3px rgba(0, 0, 0, 0.5)');
}



// fade of btn 
$(window).scroll(()=> {

    let scroll = $(window).scrollTop();

    if (scroll > 50) {
        $('.btn-up').fadeIn(500);
    }
    else {
        $('.btn-up').fadeOut(500);
    }

});

//btn up
$(".btn-up").click(()=> {

    $("html").animate({ scrollTop: '0' }, 2000);

});

// navbar navigate
$(".nav-link").click(function(){
    let src=$(this).attr('href');
    if(src=='index.html')
    {
      
        window.location.replace("index.html");
    }
    if(src=='age.html')
    {
      
        window.location.replace("age.html");
    }
    if(src=='speech.html')
    {
      
        window.location.replace("speech.html");
    }
   
    if(src=='index.html#contact-us')
    {
      
        let distanceOfSection=$(src).offset().top;
        $("html,body").animate({ scrollTop:distanceOfSection } ,2000);
        window.location.replace("index.html#contact-us");
    }
   
    if(src=='#contact-us')
    {
        let distanceOfSection=$(src).offset().top;
        $("html,body").animate({ scrollTop:distanceOfSection } ,2000);   
    }

    if(src=='#home'  ||src=='#speech' ||src=='#age' )
    {
        $("html,body").animate({ scrollTop:'0' } ,2000)
    }
    else
    {    
        let distanceOfSection=$(src).offset().top;
        $("html,body").animate({ scrollTop:distanceOfSection } ,2000)
    }
});


AOS.init();

// typed Name
var typed = new Typed('.element',{
    strings: [ "Image^800","Manipulation.^800"],
    typeSpeed: 60,
    loop:true,
    smartBackspace: true,
    backSpeed:60,
    showCursor: true,
    cursorChar: '|',
    
});

var ageInput="";
var wavInput="";
function helperFunctionAge(name)
{
    ageInput=name;
}
function helperFunWav(name)
{
    wavInput=name;
}
// speech2face
$("#input-voice").change( function(e) {

    var fullPath=`voices\\${this.files[0].name}`;
    helperFunWav(this.files[0].name);
    var audio= document.getElementById("audio");

    var sourceMp3 = document.getElementById('mp3');
    var sourceWav = document.getElementById('wav');
    sourceMp3.src = fullPath;
    sourceWav.src = fullPath;

    audio.load(); 
  
    $(".realse-voice").css("opacity","1");
    
});
$(".construct").click(()=>{
    $('.image-ouput img').attr('src',``);
    fetch('http://localhost:8081/');

    setTimeout(() => {
        var name1=wavInput.split('.');
        
        console.log(wavInput);
        console.log(name1);
        console.log(name1[1]);
        var name2=name1[0]+'.png';
        console.log(name2);
        $('.image-ouput img').attr('src',`http://127.0.0.1:8887/${name2}`);
        document.getElementById('btnElement').click();
    }, 10000);

})

// end speech2face

// age progression
$('#input-photo').change(function(e){

    var fullPath=`images\\${this.files[0].name}`;
    helperFunctionAge(this.files[0].name);
    $('.left-photo img').attr('src',fullPath);
    // console.log(fullPath);
})
// end age progression

$(".generate").click(()=>{
    $('.right-photo img').attr('src',``);
    fetch('http://localhost:8080/');
    
    setTimeout(() => {
        var name1=ageInput.split('.');
        
        console.log(ageInput);
        console.log(name1);
        console.log(name1[1]);
        var name2=name1[0]+'.png';
        console.log(name2);
        $('.right-photo img').attr('src',`http://127.0.0.1:8887/${name2}`);
        document.getElementById('btnElement').click();
    }, 10000);
    

});
