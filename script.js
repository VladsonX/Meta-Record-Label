let chapters = document.querySelectorAll("li.chapters-list__item");
let chaptersInfo = document.querySelectorAll(".chapters__info");
console.log(chapters);
console.log(chaptersInfo);
chapters.forEach(chapter => {
    chapter.addEventListener("click", () => {
        chapters.forEach(e => e.classList.remove("active"));
        chapter.classList.add("active");
        chaptersInfo.forEach(e => e.classList.remove("chapters-active"));
        document.getElementById(chapter.id+"__info").classList.add("chapters-active")
    })
})

let faqQuestions = document.querySelectorAll(".faq__question-wrapper");
faqQuestions.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("faq__question-wrapper_active");
        e.querySelector(".faq__answer-wrapper").classList.toggle("faq__answer-wrapper_active");
        e.querySelector(".faq__question").classList.toggle("faq__question_active");
    })
})

let burgerMenu = document.querySelector("#burger");
let header = document.querySelector("#header");
let headerNav = document.querySelector("#headerNav");
burgerMenu.addEventListener('click', () => {
    header.classList.toggle('header_active');
    headerNav.classList.toggle('header__nav_active');
    burgerMenu.classList.toggle('burger_active');
})
