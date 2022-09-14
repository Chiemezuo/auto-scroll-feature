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
    autoScroll()
})

function autoScroll() {
    // first of all, we need to get the dimensions of the newly added message.
    // we start by getting the last added child i.e beforeend
    const lastChild = $contentContainer.lastElementChild
    
    // then we get the computed styles
    const lastChildCSS = getComputedStyle(lastChild)

    // now we get the offset height and computed margins of the last child
    const overallHeightOfLastMessage = parseInt(lastChild.offsetHeight + (lastChildCSS.marginBottom + lastChildCSS.marginTop))
    
    // up next, we get the overall height of the message content area, both visible and invisible
    const contentAreaTotalHeight = $contentContainer.scrollHeight

    // finally, we need to get our current height so far, including what has been scrolled.
    const scrolledUpBy = $contentContainer.scrollTop
    const scrolledHeightPlusDisplayHeight = scrolledUpBy + $contentContainer.offsetHeight

    // now, the calculation for balancing out the auto scrolling
    if (contentAreaTotalHeight - overallHeightOfLastMessage <= (scrolledHeightPlusDisplayHeight)) {
        $contentContainer.scrollTop = contentAreaTotalHeight
    }
}