document.addEventListener('DOMContentLoaded', function (event){
    console.log("The page has loaded!");
});

var image_trackerJK = "JK";
document.addEventListener("click", function(event2){
    console.log("The JK function has begun");
    var image = document.getElementById("jkImage");
    if(image_trackerJK=="JK"){
        console.log("it will change to JK2");
        image.src="JK2.jpg";
        image.style.width= '20%';
        image.style.height='20%';
        // image.id="jkImage2";
        image_trackerJK="JK2";
    }
    else{
        console.log("it will go back to first pic");
        image.src="JK.png";
        image.style.width= 'auto';
        image.style.height='auto';
        image_trackerJK="JK";
    }      
    
})

// var image_trackerV = "v";
// document.addEventListener("click", function(event3){
//     console.log("The v function has begun");
//     var image2 = document.getElementById("vImage");
//     if(image_trackerV=="v"){
//         console.log("it will change to V2"); 
//        image2.src="v2.jpg";
//        image_trackerV="v2";
//     }
//     else{
//         console.log("it will return to v1");
//         image2.src = "V.png";
//         image_trackerV = "v";
//     }
// });