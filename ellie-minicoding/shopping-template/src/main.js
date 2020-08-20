// Fetch the items from the JSON file

function loadItems() {
    return fetch('data/data.json')
        .then(res => res.json())
        .then(data => data.items);
}

// Update the list with the given items
function displayItems(items) {
    const contents = document.getElementById('contents');
    const html = items.map(item => createHTMLString(item));
    contents.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="content">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail>
    <p class="item_description>${item.gender}, ${item.size} size</p>
    `;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    const filtered = items.filter(item => item[key] === value);
    displayItems(filtered);
}

function setEventListener(items) {
    const btnContainer = document.getElementById('btn-container');
    const logo = document.getElementById('logo');
    logo.addEventListener('click', () => displayItems(items));
    btnContainer.addEventListener('click', event => onButtonClick(event, items));
}

// main 
loadItems()
    .then(items => {
        displayItems(items);
        setEventListener(items);
    })
    .catch(console.log);

// function display(data) {
//     const contents = document.getElementById('contents');

//     data.forEach(info => {
//         const contentEl = document.createElement('div');
//         contentEl.className = 'content';
//         contentEl.innerHTML = `
// <img src="${info.image}" alt="">
// <p>${info.gender}, ${info.size} size</p>
// `
//         contents.appendChild(contentEl);
//     });
// }



// // butten click event
// function btnEvent(data) {
//     const btnContainer = document.getElementById('btn-container');
//     const logoBtn = document.getElementById('logo');

//     btnContainer.addEventListener('click', e => {
//         contents.innerHTML = '';
//         let id = e.target.id;
//         if (e.target.parentNode.nodeName === 'BUTTON') {
//             id = e.target.parentNode.id
//         }

//         const result = data.filter(item => item.color === id || item.type === id);

//         display(result);
//     });

//     logoBtn.addEventListener('click', () => {
//         display(data);
//     })
// }