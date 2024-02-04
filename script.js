// nav
let burger = document.getElementById('burger')
let list = document.getElementById('list')
let showList = 0

burger.addEventListener('click', () => {
    if (showList == 0) {
        list.style.display = 'block'
        showList = 1
    } else {
        list.style.display = 'none'
        showList = 0
    }
})