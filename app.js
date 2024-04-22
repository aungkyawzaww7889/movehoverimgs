const originimg = document.getElementById('originimg');
const showimg = document.getElementById('showimg');
const containers = document.querySelector('.container');



// mousemove 
originimg.addEventListener('mousemove',function(e){
    // console.log(e.target);


    const cx = e.clientX;
    const cy = e.clientY;

    const leftval = e.target.offsetLeft;
    const topval = e.target.offsetTop;
    
    
    const topinput = cy - topval;
    const leftinput = cx - leftval;


    const div = document.createElement('div');
    div.classList.add('showimg');
    // div.classList.add('show');
    const imgs = document.createElement('img');
    imgs.setAttribute('src','./img/image.jpg');
    div.appendChild(imgs);

    div.style.top = topinput + "px";
    div.style.left = leftinput + "px";


    containers.appendChild(div);
    // console.log(div);  


    // showingimagesfun();


    setTimeout(()=>{
        imgs.remove();
    },200);
  

});


// function showingimagesfun(){
//     const mouseshowdiv = document.createElement('div');
//     mouseshowdiv.classList.add('showimg');
//     mouseshowdiv.classList.add('show');

//     mouseshowdiv.innerHTML = `<img src="./img/image.jpg" alt="img2">`;
//     containers.appendChild(mouseshowdiv);


//     console.log(mouseshowdiv);

// }