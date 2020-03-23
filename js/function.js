// render gallery  

function renderGallery(list) {
    // vieta kurioje renderinsiu html
    const DOM = document.querySelector("#catalog");
    let HTML = '';
    let content = '';
    const data = list;

    // render content 
    for (let i=0; i<list.length; i++) {
        
        const category = list[i];
        
        content += ` <div class="card mb-3 col-5 p-0 d-none" style="max-width: 540px;">
        <div class="row no-gutters">
        <div class="col-md-4">
        <img src="./img/${category.img}" class="card-img" alt="image">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${category.name}</h5>
        <p class="card-text">${category.description}</p>
        </div>
        </div>
          </div>
          </div>`;
        }

        HTML = `${content}`;
        DOM.innerHTML = HTML;
        return;
    }
    
    // creating event listeners
    const filterItems = document.querySelectorAll('.catalog-nav .nav-link');
    
    for(let i=0; i<filterItems.length; i++) {
        filterItems[i].addEventListener('click', updateGallery);
    }
    // update gallery
    function updateGallery(event) {
        const filter = event.target.textContent.toUpperCase();
        const DOMproduct = document.querySelectorAll('.card');
        // console.log(filter);
        
        let show = false;

        // if ( filter === 'all' ) {
        //     for ( let i=0; i<DOMproduct.length; i++ ) {
        //         DOMproduct[i].classList.add('d-none');
        //     }
        //     return;
        // }

        for (let i=0; i<prekes.length; i++) {
            const tag = prekes[i].tag.toUpperCase();
            console.log('tagas', tag);
            // console.log('------------'); 
            console.log('filter', filter);
            

            if ( filter === tag) {
                DOMproduct[i].classList.remove('d-none');
                console.log('true');
                console.log('**********');
                
            } else {
                DOMproduct[i].classList.add('d-none');
                console.log('false');
                console.log('**********');
                
            }
        }
        return;
    }
    