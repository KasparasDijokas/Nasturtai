//*************** RENDER PRODUCTS

function renderGallery(list) {
    const DOM = document.querySelector("#catalog");
    let HTML = '';
    let content = '';

    // render content 
    for (let i=0; i<list.length; i++) {
        const category = list[i];
        
        content += ` <div class="card mb-3 col-5 p-0" style="max-width: 540px;">
        <div class="row no-gutters">
        <div class="col-md-4">
        <img src="./img/${category.img}" class="card-img" alt="image">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title products-title">${category.name}</h5>
        <p class="card-text"> <span class ="card-point-name">${category.n1}</span> ${category.d1}</p>
		<p class="card-text"><span class ="card-point-name">${category.n2}</span> ${category.d2}</p>
		<p class="card-text"><span class ="card-point-name">${category.n3}</span> ${category.d3}</p>
        </div>
        </div>
          </div>
          </div>`;
        }

        HTML = `${content}`;
        DOM.innerHTML = HTML;
        return;
    }

    // render prieskoniai uzejus i products.html
    function renderStart(data) {
        const DOMproduct = document.querySelectorAll('.card');
        for (let i=0; i < data.length; i++) {
            if (data[i].tag !== 'prieskoniai') {
                DOMproduct[i].classList.add('d-none');
            }
        }
        return;
    }
    
    // creating event listeners
    const filterItems = document.querySelectorAll('.catalog-nav .nav-link');
    for (let i=0; i<filterItems.length; i++) {
        filterItems[i].addEventListener('click', updateGallery);
    }

    // update gallery
    function updateGallery(event) {
        const filter = event.target.textContent.toUpperCase();
        const DOMproduct = document.querySelectorAll('.card');
        
        for (let i=0; i<prekes.length; i++) {
            const tag = prekes[i].tag.toUpperCase();
            if ( filter === tag) {
                DOMproduct[i].classList.remove('d-none');
            } else {
                DOMproduct[i].classList.add('d-none');       
            }
        }
        return;
    }
    
    
//*************** NAVIGATION 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const exit = document.querySelector('.exit');
  
    // toggle nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
  
    exit.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    })
  }
  
  navSlide();


 //*************** LIGHTBOX

 const lightbox = document.createElement('div');
 lightbox.id = 'lightbox';
 document.body.appendChild(lightbox);

 const images = document.querySelectorAll('.grid-img');
images.forEach(image => {
  image.addEventListener('click', event => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while(lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active')
})


 //*************** BACK TO TOP

mybutton = document.getElementById("btn");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



//*************** ACTIVE LINK

let link = document.querySelectorAll('.nav-link');
let link2 = document.querySelectorAll('.link');

  link.forEach(links => {
  links.addEventListener('click', function (){
    link.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

link2.forEach(links => {
  links.addEventListener('click', function (){
    link2.forEach(link2 => link2.classList.remove('aktyvi'));
    this.classList.add('aktyvi');
  });
});
