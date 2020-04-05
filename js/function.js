//*************** RENDER PRODUCTS

function renderGallery(list) {
  const DOM = document.querySelector("#catalog");
  let HTML = "";
  let content = "";

  // render content
  for (let i = 0; i < list.length; i++) {
    const category = list[i];

    content += ` <div class="card product-card mb-3 col-10 p-0 col-xl-5 mx-4 mb-4 border-none" >
          <div class="row no-gutters">
          <div class="col-md-6 img-col">
          <img class="card-img" src="./img/asortimentas/${category.img}" class="card-img" alt="image">
          </div>
          <div class="col-md-6">
          <div class="card-body">
          <h5 class="card-title products-title">${category.name}</h5>
          <hr>
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

// creating event listeners for nav
const filterItems = document.querySelectorAll(".asortimentas-link");
for (let i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener("click", updateGallery);
}

// creating event listeners index section
const linkArray = [];
const linkas = document.querySelectorAll(".linkas");
for (let i = 0; i < linkas.length; i++) {
  linkas[i].addEventListener("click", () => {
    const filter = event.target.textContent.toUpperCase();
    linkArray.push(filter);
    sessionStorage.setItem("key", linkArray);
  });
}

// render html uzejus i products.html
function renderStart(data) {
  const DOMproduct = document.querySelectorAll(".card");
  let array = sessionStorage.getItem("key");

  for (let i = 0; i < data.length; i++) {
    if (array === null) {
      for (let j = 0; j < data.length; j++) {
        if (data[i].tag !== "Braškės ir žemuogės") {
          DOMproduct[i].classList.add("d-none");
        }
      }
      // jei paspaustas linkas is index.html
    } else if (data[i].tag.toUpperCase() !== array) { 
      DOMproduct[i].classList.add("d-none");
      //active class jei ateina is index.html
      for (let i = 0; i < link.length; i++) {
        if (array === link[i].innerText.toUpperCase()) {
          link[i].classList.add("active");
        } else {
          link[i].classList.remove("active");
        }
      }
    }
  }
  sessionStorage.clear();
  return;
}

//*************** ACTIVE LINK

const link = document.querySelectorAll(".asortimentas-link");

link.forEach(links => {
  links.addEventListener("click", function() {
    link.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
  });
});


// update gallery
function updateGallery(event) {
  const filter = event.target.textContent.toUpperCase();
  const DOMproduct = document.querySelectorAll(".card");

  for (let i = 0; i < prekes.length; i++) {
    const tag = prekes[i].tag.toUpperCase();
    if (filter === tag) {
      DOMproduct[i].classList.remove("d-none");
    } else {
      DOMproduct[i].classList.add("d-none");
    }
  }
  return;
}

//*************** NAVIGATION

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const exit = document.querySelector(".exit");

  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  exit.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();

//*************** LIGHTBOX

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".grid-img");
images.forEach(image => {
  image.addEventListener("click", event => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

//*************** BACK TO TOP

mybutton = document.getElementById("btn");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
