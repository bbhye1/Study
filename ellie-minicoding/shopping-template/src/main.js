// Fetch the items from the JSON file

function loadItems() {
    return fetch('data/data.json')
        .then(res => res.json())
        .then(data => data.items);
}


// main 
loadItems()
    .then(items => {
        showContent(items);
        btnEvent(items);
    })
    .catch(console.log);

function showContent(data) {
    const contents = document.getElementById('contents');

    data.forEach(info => {
        const contentEl = document.createElement('div');
        contentEl.className = 'content';
        contentEl.innerHTML = `
<img src="${info.image}" alt="">
<p>${info.gender}, ${info.size} size</p>
`
        contents.appendChild(contentEl);
    });
}



// butten click event
function btnEvent(data) {
    const btnContainer = document.getElementById('btn-container');
    const logoBtn = document.getElementById('logo');

    btnContainer.addEventListener('click', e => {
        contents.innerHTML = '';
        let id = e.target.id;
        if (e.target.parentNode.nodeName === 'BUTTON') {
            id = e.target.parentNode.id
        }

        const result = data.filter(item => item.color === id || item.type === id);

        showContent(result);
    });

    logoBtn.addEventListener('click', () => {
        showContent(data);
    })
}