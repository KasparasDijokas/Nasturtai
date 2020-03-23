function renderGallery( list ) {
    const DOM = document.querySelector('#gallery');
    let HTML = '';
    let filterHTML = '';
    let listHTML = '';

    // render filter
    let uniqueTags = [];
    // einame per visus darbus
    for ( let i=0; i<list.length; i++ ) {
        const tags = list[i].tags;
        // einame per visus to darbo tag'us
        for ( let t=0; t<tags.length; t++ ) {
            const tag = tags[t].toLowerCase();
            // tikriname ar tag'as egzistuojame kaupiamame sarase
            if ( uniqueTags.indexOf(tag) === -1 ) {
                uniqueTags.push(tag);
            }
        }
    }
    
    filterHTML += '<div class="item active" data-tag="all">All categories</div>';
    for ( let i=0; i<uniqueTags.length; i++ ) {
        filterHTML += `<div class="item" data-tag="${uniqueTags[i]}">${uniqueTags[i]}</div>`;
    }


    // render works list
    for ( let i=0; i<list.length; i++ ) {
        const work = list[i];

        listHTML += `<div class="work show">
                        <img src="./img/work/${work.photo}">
                        <div class="hover">
                            <h5>${work.name}</h5>
                            <div class="tags">${work.tags.join(', ')}</div>
                        </div>
                    </div>`;
    }

    HTML = `<div class="gallery">
                <div class="filter">
                    ${filterHTML}
                </div>
                <div class="list">
                    ${listHTML}
                </div>
            </div>`;
    
    // inserting into DOM
    DOM.innerHTML = HTML;
    
    // creating event listeners
    const filterItems = DOM.querySelectorAll('.filter > .item');
    for ( let i=0; i<filterItems.length; i++ ) {
        filterItems[i].addEventListener('click', updateGallery);
    }
    return;
}

function updateGallery( event ) {       //event, ev, e
    const clickedElement = event.target;
    const clickedTag = clickedElement.dataset.tag;
    document.querySelector('.gallery > .filter > .item.active').classList.remove('active');
    clickedElement.classList.add('active');
    const DOMworks = document.querySelectorAll('.gallery > .list > .work');

    if ( clickedTag === 'all' ) {
        for ( let i=0; i<DOMworks.length; i++ ) {
            DOMworks[i].classList.add('show');
        }
        return;
    }
    
    // einame per darbus
    for ( let i=0; i<works.length; i++ ) {
        const work = works[i];
        let show = false;
        
        // einu per darbo tag'us
        for ( let t=0; t<work.tags.length; t++ ) {
            const tag = work.tags[t].toLowerCase();
            if ( clickedTag === tag ) {
                show = true;
            }
        }
        if ( show ) {
            DOMworks[i].classList.add('show');
        } else {
            DOMworks[i].classList.remove('show');
        }
    }

    return;
}