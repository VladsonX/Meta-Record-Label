const chapters = document.querySelectorAll("li.chapters-list__item");
const chaptersInfo = document.querySelectorAll(".chapters__info");
chapters.forEach(chapter => {
    chapter.addEventListener("click", () => {
        document.querySelector("li.chapters-list__item.active").classList.remove("active");
        chapter.classList.add("active");
        document.querySelector(".chapters__info.chapters-active").classList.remove("chapters-active");
        document.getElementById(chapter.id+"__info").classList.add("chapters-active")
    })
})

const faqQuestions = document.querySelectorAll(".faq__question-wrapper");
faqQuestions.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("faq__question-wrapper_active");
        e.querySelector(".faq__answer-wrapper").classList.toggle("faq__answer-wrapper_active");
        e.querySelector(".faq__question").classList.toggle("faq__question_active");
    })
})

const burgerMenu = document.querySelector("#burger");
const header = document.querySelector("#header");
const headerNav = document.querySelector("#headerNav");
burgerMenu.addEventListener('click', () => {
    header.classList.toggle('header_active');
    headerNav.classList.toggle('header__nav_active');
    burgerMenu.classList.toggle('burger_active');
})
