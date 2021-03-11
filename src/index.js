const imageSrc = [
    { url : './img/1.jpg'},
    { url : './img/2.jpg'},
    { url : './img/3.jpg'},
    { url : './img/4.jpg'},
    { url : './img/5.jpg'},
    { url : './img/6.jpg'},
]

let currentIDX = 0;


// const menuList = document.querySelector('.menuList');
// const dropDownHeader = document.querySelector('h1');
// const dropDownDiv = document.querySelector('.dropDown')

//     dropDownHeader.addEventListener('mouseover', () => {
//             menuList.classList.remove('hidden');
//         })

//     dropDownDiv.addEventListener('mouseleave', () => {
//             menuList.classList.add('hidden');
//     })


const createInitialImageSlider = function (element) {
            let randIdx = Math.floor(Math.random()* element.length);
            drawImage(element, randIdx);
    }

function drawImage (element, idx) {
            currentIDX = idx;
            const imageDiv = document.createElement('div');
            const imageSliderDiv = document.querySelector('.imageFrame');
            imageSliderDiv.appendChild(imageDiv);
            imageDiv.innerHTML = `<img src="${element[idx].url}" class="imgWidth" alt="">` ;
            createDomArrows();
            createAllImageSlider();
        }

        
 function reDrawImage() {
    const imageSliderDiv = document.querySelector('.imageFrame');
    imageSliderDiv.innerHTML = '';
 }
    
function createDomArrows () {
        document.querySelector('.fa-backward')
                .addEventListener('click', goBackwards);

        document.querySelector('.fa-forward')
                .addEventListener('click', goForward);
    }


function goBackwards () {
    if (currentIDX !== 0) {
        reDrawImage();
        drawImage(imageSrc, (currentIDX - 1))
    }
    else {
        reDrawImage();
        drawImage(imageSrc, (imageSrc.length - 1));    
    } 
}

function goForward () {
    if (currentIDX !== (imageSrc.length - 1)) 
    {
        reDrawImage();
        drawImage(imageSrc, (currentIDX + 1))
    }
    else
     {
        reDrawImage();
        drawImage(imageSrc, 0);
    }

}

function createAllImageSlider () {
    const allPicsSlider = document.querySelector('.allPicSlider')
    allPicsSlider.innerHTML ='';
    imageSrc.forEach(element => {
       const imageThumb = document.createElement('span');
       allPicsSlider.appendChild(imageThumb);
       imageThumb.innerHTML = 
       `<img src="${element.url}" alt="" class="imgThumbnail">`
       imageThumb.addEventListener('click', () => {
        reDrawImage();
        drawImage(imageSrc, imageSrc.indexOf(element))
       });
       if (imageSrc.indexOf(element) === currentIDX) {
           imageThumb.innerHTML =
           `<img src="${element.url}" alt="" class="imgThumbnail current">`
       }
    })




}

const beginSlideshow = setInterval(() => {
    reDrawImage();
    drawImage(imageSrc, currentIDX);
  }, 5000);



createInitialImageSlider(imageSrc);
document.querySelector('button')
        .addEventListener(
            'click', () => 
            {
            setInterval(
                () =>
                 {
                for (let i=1; i <= imageSrc.length + 1; i++) 
                {
                    reDrawImage();
                    let tempIDX = currentIDX + 1;
                    if (tempIDX >= imageSrc.length) {
                        drawImage(imageSrc, 0);
                        let i = 1;
                    }
                    else {
                    drawImage(imageSrc, tempIDX);
                    }}
              }, 5000);
        })
  

    