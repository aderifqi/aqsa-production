

window.addEventListener('scroll', () => {
    console.log('scrolling')
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})