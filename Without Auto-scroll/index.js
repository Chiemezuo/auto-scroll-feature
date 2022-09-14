// count variable
let count = 1;

// get the elements
const $addDummyButton = document.querySelector('#populate')
const $contentContainer = document.querySelector('.content')

// get the template's inner html
const template = document.querySelector('#template').innerHTML

$addDummyButton.addEventListener('click', () => {
    const html = Mustache.render(template, { count })
    $contentContainer.insertAdjacentHTML("beforeend",html) 
    count++   
})