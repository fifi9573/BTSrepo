document.addEventListener('DOMContentLoaded', function loaded(event){
    console.log("The page has loaded!");
    //This function should change JK image to JK2 image.
    var image = document.getElementById('jkImage');
  
    image.addEventListener('click', function imageClick(e){
        console.log(image.src)
        if (image.src=== 'file:///C:/Users/GWC02/Documents/coffee/JK2.jpg'){
            image.src='file:///C:/Users/GWC02/Documents/coffee/JK.png';
            image.style.width= '190px';
            image.style.height='300px';
        }else if (image.src==='file:///C:/Users/GWC02/Documents/coffee/JK.png'){
            image.src='file:///C:/Users/GWC02/Documents/coffee/JK2.jpg';
            image.style.width= '190px';
            image.style.height='300px';
        }   
    })

    //This will change V image to V2 image.
    var image2 = document.getElementById("vImage");

    image2.addEventListener('click', function imageClick2(e){
        console.log(image2.src)
        if (image2.src==='file:///C:/Users/GWC02/Documents/coffee/V2.png'){
            image2.src='file:///C:/Users/GWC02/Documents/coffee/V.png';
            image2.style.width= '190px';
            image2.style.height='300px';
        }else if (image2.src==='file:///C:/Users/GWC02/Documents/coffee/V.png'){
            image2.src='file:///C:/Users/GWC02/Documents/coffee/V2.png';
            image2.style.width= '190px';
            image2.style.height='300px';
        }
    })

    //This will change Jimin1 image to Jimin2 image.
    var image3 = document.getElementById("jiminImage");

    image3.addEventListener('click', function imageClick3(e1){
        console.log(image3.src)
        if (image3.src==='file:///C:/Users/GWC02/Documents/coffee/jimin2.jpg'){
            image3.src='file:///C:/Users/GWC02/Documents/coffee/Jimin.jpg';
            image3.style.width= '190px';
            image3.style.height='300px';
        }else if (image3.src==='file:///C:/Users/GWC02/Documents/coffee/Jimin.jpg'){
            image3.src='file:///C:/Users/GWC02/Documents/coffee/jimin2.jpg';
            image3.style.width= '190px';
            image3.style.height='300px';
        }
    })

    //This will change RM image to RM image 2.
    var image4 = document.getElementById("rmImage");

    image4.addEventListener('click', function imageClick4(e2){
        console.log(image4.src)
        if (image4.src==='file:///C:/Users/GWC02/Documents/coffee/RM2.jpg'){
            image4.src='file:///C:/Users/GWC02/Documents/coffee/RM.png';
            image4.style.width= '190px';
            image4.style.height='300px';
        }else if (image4.src==='file:///C:/Users/GWC02/Documents/coffee/RM.png'){
            image4.src='file:///C:/Users/GWC02/Documents/coffee/RM2.jpg';
            image4.style.width= '190px';
            image4.style.height='300px';
        }
    })

    //This will change jhope image to jhope image 2.
    var image5 = document.getElementById("jhopeImage");

    image5.addEventListener('click', function imageClick5(e3){
        console.log(image5.src)
        if (image5.src==='file:///C:/Users/GWC02/Documents/coffee/jhope2.png'){
            image5.src='file:///C:/Users/GWC02/Documents/coffee/J-Hope.png';
            image5.style.width= '190px';
            image5.style.height='300px';
        }else if (image5.src==='file:///C:/Users/GWC02/Documents/coffee/J-Hope.png'){
            image5.src='file:///C:/Users/GWC02/Documents/coffee/jhope2.png';
            image5.style.width= '190px';
            image5.style.height='300px';
        }
    })

    //This will change jin image to jin image 2.
    var image6 = document.getElementById("jinImage");

    image6.addEventListener('click', function imageClick6(e5){
        console.log(image6.src)
        if (image6.src==='file:///C:/Users/GWC02/Documents/coffee/jin2.jpg'){
            image6.src='file:///C:/Users/GWC02/Documents/coffee/Jin.png';
            image6.style.width= '190px';
            image6.style.height='300px';
        }else if (image6.src==='file:///C:/Users/GWC02/Documents/coffee/Jin.png'){
            image6.src='file:///C:/Users/GWC02/Documents/coffee/jin2.jpg';
            image6.style.width= '190px';
            image6.style.height='300px';
        }
    })

    //This will change suga image to suga image 2.
    var image7 = document.getElementById("sugaImage");

    image7.addEventListener('click', function imageClick7(e4){
        console.log(image7.src)
        if (image7.src==='file:///C:/Users/GWC02/Documents/coffee/Suga2.png'){
            image7.src='file:///C:/Users/GWC02/Documents/coffee/Suga.png';
            image7.style.width= '190px';
            image7.style.height='300px';
        }else if (image7.src==='file:///C:/Users/GWC02/Documents/coffee/Suga.png'){
            image7.src='file:///C:/Users/GWC02/Documents/coffee/Suga2.png';
            image7.style.width= '190px';
            image7.style.height='300px';
        }
    })
})
