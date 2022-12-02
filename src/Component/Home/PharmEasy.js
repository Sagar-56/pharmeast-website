function changeMode(){
    var myBody=document.body;
    myBody.classList.toggle('myDark');
    if(myBody.classList.contains('myDark')){
        icon.src = "outline_light_mode_white_24dp.png"
    }else{
        icon.src = "outline_light_mode_black_24dp.png"
    }
}

window.onload = loadCoupon()

function loadCoupon(){
    document.getElementById('coupon').style.visibility='visible';
 }
 function del(){
    document.getElementById('coupon').style.visibility= 'hidden';
}

var slideMain = document.getElementById("Slide-image");
var pinodesimg = slideMain.getElementsByClassName("pinodesimg");

        function next(){
            slideMain.append(pinodesimg[0])
        }
        function prev(){
            slideMain.prepend(pinodesimg[pinodesimg.length - 1]);
        }


        let div = document.createElement("div")
        let p = document.createElement("p")
        div.append(p)
        
        console.log(div.childNodes) // NodeList [ <p> ]

        
        
        var offSlider = document.getElementById("off-Slide");
        var item = offSlider.getElementsByClassName("offb");

        function nextBtn(){
            offSlider.append(item[0])
        }
        function prevBtn(){
            offSlider.prepend(item[item.length - 1]);
        }



        var feature = document.getElementById("feature-div");
        var featureImg = feature.getElementsByClassName("featureimgcont");

        function nextB(){
            feature.append(featureImg[0])
        }
        function prevB(){
            feature.prepend(featureImg[featureImg.length - 1]);
        }

        var HealthSlider = document.getElementById("health-content");
        var item2 = HealthSlider.getElementsByClassName("Healthbdiv");

        function nextBtn1(){
            HealthSlider.append(item2[0])
        }
        function prevBtn1(){
            HealthSlider.prepend(item2[item2.length - 1]);
        }



        var backCol = document.getElementById("backCol-img");
        var backColImg = backCol.getElementsByClassName("backcolimg");

        function nextC(){
            backCol.append(backColImg[0])
        }
        function prevC(){
            backCol.prepend(backColImg[backColImg.length - 1]);
        }

//    $('.autoplay').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     infinite: true,
//     cssEase: 'linear',
//     autoplaySpeed: 1000,
//     arrows:false,
//     variableWidth: true,
//     centerMode: true,
//     focusOnSelect: true,
//     pauseOnHover:false,
//     });


// var box = $(".pinodesimgcont"), x;
// $(".arrow").click(function() {
//   if ($(this).hasClass("arrow-next")) {
//     x = ((box.width() / 8)) + box.scrollLeft();
//     box.animate({
//       scrollLeft: x,
//     })
//   } else {
//     x = ((box.width() / 8)) - box.scrollLeft();
//     box.animate({
//       scrollLeft: -x,
//     })
//   }
// })


// function scroll(){
//     let left = document.querySelector(".pinodesimgcont")
//     left.scrollBy(100, 100)
// }
// function scrollr(){
//     let right = document.querySelector(".pinodesimgcont")
//     right.scrollBy(-100, 100)
// }






// var width = $(".pinodesimgcont").width();
// var numberChild = $(".pinodesimg").children().length;
// var move = width / numberChild;
// var position = 0;
// $(".pincoderightarrow").click(() => {
//       position -= move;
//       $(".pinodesimg").css({'transform' : 'translateX(' + position + '240px)'})
//     }
// );
// $(".pincodeleftarrow").click(() => {
//        position += move;
//        $(".pinodesimg").css({'transform' : 'translateX(' + position + '240px)'})
// }
//  );


// let slides = document.getElementsByClassName('pinodesimg');
// let position = 0;
// showPosition(position);

// function slide(x){
//     position
// }

// var position = 1;  
// displaySlides(position);  

//     function slide(n) {  
//         displaySlides(position += n);  
//     }  
//     function currentSlide(n) {  
//         displaySlides(position = n);  
//     }  
//     function displaySlides(n) {  
//         var i; 
//         var slides = document.getElementsByClassName("pinodesimg");  
//         if (n > slides.length) { position = 1 }  
//         if (n < 1) { position = slides.length }  
//         for (i = 0; i < slides.length; i++) {  
//             slides[i].style.display = "none";  
//         }  
//         slides[position - 1].style.display = "block";  
//     } 



// function displaySlides(n){
//     var slides = document.getElementsByClassName("pinodesimg"); 
//      if(slides == 0){
//         displaySlides(position += n); 
//      }
//      if(slides == 1){
//         displaySlides(position -= n); 
//      }
//      slides.style.display = "block";
// }










    // arrows

//  let slides = 0; 
//  // let slides = document.getElementsByClassName('pinodesimg');
 
//  function Controller(x){
//      let slides = document.getElementsByClassName('pinodesimg');
//      flag = slides + x;
//      slideShow(flag);
//      // console.log(flag);
//  }


// let slideIndex = 5;
// slideShow(slideIndex);

// function Controller(x){
//           slideIndex = slideIndex + x;
//           slideShow(slideIndex);
// }
