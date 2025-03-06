
// document.addEventListener("DOMContentLoaded", function () {
//     let slides = [];
//     let currentSlide = 0;
//     let currentText = 0;

//     const slideNum = document.querySelector(".headline-3");
//     const swiperWrapper = document.querySelector(".swiper-wrapper");
//     const textButtons = document.querySelectorAll(".text-btn");
    
//     function updateText(index) {
//         if (slides[currentSlide] && slides[currentSlide].texts[index].description) {
//             currentText = index;
//             document.querySelector(".tech").textContent = slides[currentSlide].texts[index].description;
//             document.querySelector(".title-directions").textContent = slides[currentSlide].texts[index].title;

//             textButtons.forEach(btn => btn.classList.remove("active"));
//             textButtons[index].classList.add("active");
//         } else {
//             console.error("Ошибка: Текст не найден.");
//         }
//     }

//     fetch("./scripts/speakers.json")
//         .then(response => response.json())
//         .then(data => {
//             slides = data;
//             swiperWrapper.innerHTML = "";

//             slides.forEach((item, index) => {
//                 const slide = document.createElement("div");
//                 slide.classList.add("swiper-slide");
//                 slide.dataset.slide = index;

//                 const img = document.createElement("img");
//                 img.classList.add("slide-image");
//                 img.src = item.image;
//                 img.alt = "Изображение";
                
//                 slide.appendChild(img);
//                 swiperWrapper.appendChild(slide);
//             });

//             const swiper = new Swiper(".swiper", {
//                 loop: true,
//                 centeredSlides: true,
//                 slidesPerView: "auto",
//                 spaceBetween: 50,
//                 navigation: {
//                     nextEl: ".swiper-button-next",
//                     prevEl: ".swiper-button-prev",
//                 },
//                 on: {
//                     slideChange: function () {
//                         currentSlide = this.realIndex;
//                         slideNum.textContent = `${currentSlide + 1} / ${slides.length}`;
//                         updateText(0);
//                     }
//                 }
//             });

//             slideNum.textContent = `1 / ${slides.length}`;
//             updateText(0);
//         })
//         .catch(error => console.error("Ошибка загрузки данных: ", error));

//     textButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const index = parseInt(button.getAttribute("data-index"));
//             updateText(index);
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let slides = [];
//     let currentSlide = 0;
//     let currentText = 0;

//     const slideNum = document.querySelector(".headline-3");
//     const swiperWrapper = document.querySelector(".swiper-wrapper");
//     const textButtons = document.querySelectorAll(".text-btn");

//     const prevButton = document.querySelector(".swiper-button-prev");
//     const nextButton = document.querySelector(".swiper-button-next");

//     function updateText(index) {
//         if (slides[currentSlide] && slides[currentSlide].texts[index].description) {
//             currentText = index;
//             document.querySelector(".tech").textContent = slides[currentSlide].texts[index].description;
//             document.querySelector(".title-directions").textContent = slides[currentSlide].texts[index].title;

//             textButtons.forEach(btn => btn.classList.remove("active"));
//             textButtons[index].classList.add("active");
//         } else {
//             console.error("Ошибка: Текст не найден.");
//         }
//     }

//     function updateSpeaker(index) {
//         currentSlide = (index + slides.length) % slides.length;
//         slideNum.textContent = `${currentSlide + 1} / ${slides.length}`;
//         swiperWrapper.innerHTML = `<img class="slide-image" src="${slides[currentSlide].image}" alt="Спикер">`;
//         updateText(0);
//     }

//     fetch("./scripts/speakers.json")
//         .then(response => response.json())
//         .then(data => {
//             slides = data;
//             updateSpeaker(0);
//         })
//         .catch(error => console.error("Ошибка загрузки данных: ", error));

//     prevButton.addEventListener("click", () => updateSpeaker(currentSlide - 1));
//     nextButton.addEventListener("click", () => updateSpeaker(currentSlide + 1));

//     textButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const index = parseInt(button.getAttribute("data-index"));
//             updateText(index);
//         });
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     function initSlider(sectionClass, jsonFile) {
//         let slides = [];
//         let currentSlide = 0;
//         let currentText = 0;
    
//         const section = document.querySelector(`.${sectionClass}`);
//         if (!section) return;
    
//         const slideNum = section.querySelector(`.num-${sectionClass}`);
//         const swiperWrapper = section.querySelector(`.${sectionClass}-img`);
//         const textButtons = section.querySelectorAll(`.${sectionClass}-btn`);
    
//         const prevButton = section.querySelector(`.${sectionClass}-button-prev`);
//         const nextButton = section.querySelector(`.${sectionClass}-button-next`);
    
//         function updateText(index) {
//             if (slides[currentSlide] && slides[currentSlide].texts[index].description) {
//                 currentText = index;
//                 section.querySelector(`.${sectionClass}-tech`).textContent = slides[currentSlide].texts[index].description;
//                 section.querySelector(`.${sectionClass}-title-directions`).textContent = slides[currentSlide].texts[index].title;
    
//                 textButtons.forEach(btn => btn.classList.remove("active"));
//                 textButtons[index].classList.add("active");
//             } else {
//                 console.error("Ошибка: Текст не найден.");
//             }
//         }
    
//         function updateSpeaker(index) {
//             currentSlide = (index + slides.length) % slides.length;
//             slideNum.textContent = `${currentSlide + 1} / ${slides.length}`;
//             swiperWrapper.innerHTML = `<img class="slide-image" src="${slides[currentSlide].image}" alt="Спикер">`;
//             updateText(0);
//         }
    
//         fetch(jsonFile)
//             .then(response => response.json())
//             .then(data => {
//                 slides = data;
//                 updateSpeaker(0);
//             })
//             .catch(error => console.error("Ошибка загрузки данных: ", error));
    
//         prevButton.addEventListener("click", () => updateSpeaker(currentSlide - 1));
//         nextButton.addEventListener("click", () => updateSpeaker(currentSlide + 1));
    
//         textButtons.forEach((button) => {
//             button.addEventListener("click", () => {
//                 const index = parseInt(button.getAttribute("data-index"));
//                 updateText(index);
//             });
//         });
//     }
    
//     initSlider("speakers", "./scripts/speakers.json");
//     initSlider("cases", "./scripts/cases.json");
// });

// document.addEventListener("DOMContentLoaded", function () {
//     function initSlider(sectionClass, jsonFile) {
//         let slides = [];
//         let currentSlide = 0;
//         let currentText = 0;
    
//         const slideNum = document.querySelector(.num-${sectionClass});
//         const swiperWrapper = document.querySelector(.${sectionClass}-img);
//         const textButtons = document.querySelectorAll(.${sectionClass}-btn);
    
//         const prevButton = document.querySelector(.${sectionClass}-button-prev);
//         const nextButton = document.querySelector(.${sectionClass}-button-next);
    
//         function updateText(index) {
//             if (slides[currentSlide] && slides[currentSlide].texts[index].description) {
//                 currentText = index;
//                 document.querySelector(${sectionClass}-tech).textContent = slides[currentSlide].texts[index].description;
//                 document.querySelector(.${sectionClass}-title-directions).textContent = slides[currentSlide].texts[index].title;
    
//                 textButtons.forEach(btn => btn.classList.remove("active"));
//                 textButtons[index].classList.add("active");
//             } else {
//                 console.error("Ошибка: Текст не найден.");
//             }
//         }
    
//         function updateSpeaker(index) {
//             currentSlide = (index + slides.length) % slides.length;
//             slideNum.textContent = ${currentSlide + 1} / ${slides.length};
//             swiperWrapper.innerHTML = <img class="slide-image" src="${slides[currentSlide].image}" alt="Спикер">;
//             updateText(0);
//         }
    
//         fetch(jsonFile)
//             .then(response => response.json())
//             .then(data => {
//                 slides = data;
//                 updateSpeaker(0);
//             })
//             .catch(error => console.error("Ошибка загрузки данных: ", error));
    
//         prevButton.addEventListener("click", () => updateSpeaker(currentSlide + 1));
//         nextButton.addEventListener("click", () => updateSpeaker(currentSlide - 1));
    
//         textButtons.forEach((button) => {
//             button.addEventListener("click", () => {
//                 const index = parseInt(button.getAttribute("data-index"));
//                 updateText(index);
//             });
//         });}
    
//     initSlider("speakers", "./scripts/speakers.json");
//     initSlider("cases", "./scripts/cases.json");
// });


// document.addEventListener("DOMContentLoaded", function () {
//     let slides = [];
//     let currentSlide = 0;
//     let currentText = 0;

//     const slideNum = document.querySelector(".num-speakers");
//     const swiperWrapper = document.querySelector(".speakers-img");
//     const textButtons = document.querySelectorAll(".text-btn");

//     const prevButton = document.querySelector(".button-prev");
//     const nextButton = document.querySelector(".button-next");

//     function updateText(index) {
//         if (slides[currentSlide] && slides[currentSlide].texts[index].description) {
//             currentText = index;
//             document.querySelector(".tech").textContent = slides[currentSlide].texts[index].description;
//             document.querySelector(".title-directions").textContent = slides[currentSlide].texts[index].title;

//             textButtons.forEach(btn => btn.classList.remove("active"));
//             textButtons[index].classList.add("active");
//         } else {
//             console.error("Ошибка: Текст не найден.");
//         }
//     }

//     function updateSpeaker(index) {
//         currentSlide = (index + slides.length) % slides.length;
//         slideNum.textContent = ${currentSlide + 1} / ${slides.length};
//         swiperWrapper.innerHTML = <img class="slide-image" src="${slides[currentSlide].image}" alt="Спикер">;
//         updateText(0);
//     }

//     fetch("./scripts/speakers.json")
//         .then(response => response.json())
//         .then(data => {
//             slides = data;
//             updateSpeaker(0);
//         })
//         .catch(error => console.error("Ошибка загрузки данных: ", error));

//     prevButton.addEventListener("click", () => updateSpeaker(currentSlide + 1));
//     nextButton.addEventListener("click", () => updateSpeaker(currentSlide - 1));

//     textButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const index = parseInt(button.getAttribute("data-index"));
//             updateText(index);
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let slides = [];
//     let currentSlide = 0;
//     let currentText = 0;

//     const slideNum = document.querySelector(".headline-3");
//     const swiperWrapper = document.querySelector(".swiper-wrapper");
//     const textButtons = document.querySelectorAll(".text-btn");

//     const prevButton = document.querySelector(".swiper-button-prev");
//     const nextButton = document.querySelector(".swiper-button-next");

//     function updateText(index) {
//         if (slides[currentSlide] && slides[currentSlide].texts[index].description) {
//             currentText = index;
//             document.querySelector(".tech").textContent = slides[currentSlide].texts[index].description;
//             document.querySelector(".title-directions").textContent = slides[currentSlide].texts[index].title;

//             textButtons.forEach(btn => btn.classList.remove("active"));
//             textButtons[index].classList.add("active");
//         } else {
//             console.error("Ошибка: Текст не найден.");
//         }
//     }

//     function updateSpeaker(index) {
//         currentSlide = (index + slides.length) % slides.length;
//         slideNum.textContent = `${currentSlide + 1} / ${slides.length}`;
//         swiperWrapper.innerHTML = `<img class="slide-image" src="${slides[currentSlide].image}" alt="Спикер">`;
//         updateText(0);
//     }

//     fetch("./scripts/speakers.json")
//         .then(response => response.json())
//         .then(data => {
//             slides = data;
//             updateSpeaker(0);
//         })
//         .catch(error => console.error("Ошибка загрузки данных: ", error));

//     prevButton.addEventListener("click", () => updateSpeaker(currentSlide - 1));
//     nextButton.addEventListener("click", () => updateSpeaker(currentSlide + 1));

//     textButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const index = parseInt(button.getAttribute("data-index"));
//             updateText(index);
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    function initSlider(sectionClass, dataUrl) {
        let slides = [];
        let currentSlide = 0;
        let currentText = 0;

        const section = document.querySelector(`.${sectionClass}`);
        const slideNum = section.querySelector(".slide-num .headline-3");
        const swiperWrapper = section.querySelector(".speakers-img");
        const textButtons = section.querySelectorAll(".text-btn");
        const prevButton = section.querySelector(".button-prev");
        const nextButton = section.querySelector(".button-next");

        function updateText(index) {
            if (slides[currentSlide] && slides[currentSlide].texts[index]) {
                currentText = index;
                section.querySelector(".tech").textContent = slides[currentSlide].texts[index].description;
                section.querySelector(".title-directions").textContent = slides[currentSlide].texts[index].title;
                textButtons.forEach(btn => btn.classList.remove("active"));
                textButtons[index].classList.add("active");
            } else {
                console.error("Ошибка: Текст не найден.");
            }
        }

        function updateSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            slideNum.textContent = `${currentSlide + 1} / ${slides.length}`;
            swiperWrapper.innerHTML = `<img class="slide-image" src="${slides[currentSlide].image}" alt="Спикер">`;
            updateText(0);
        }

        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {
                slides = data;
                updateSlide(0);
            })
            .catch(error => console.error("Ошибка загрузки данных: ", error));

        prevButton.addEventListener("click", () => updateSlide(currentSlide + 1));
        nextButton.addEventListener("click", () => updateSlide(currentSlide - 1));

        textButtons.forEach(button => {
            button.addEventListener("click", () => {
                const index = parseInt(button.getAttribute("data-index"));
                updateText(index);
            });
        });
    }

    initSlider("speakers", "./scripts/speakers.json");
    initSlider("cases", "./scripts/cases.json");
});

// document.addEventListener("DOMContentLoaded", function () {
//     let slides = [];
//     let currentSlide = 0;
//     let currentText = 0;

//     const slideNum = document.querySelector(".slide-num .headline-3");
//     const swiperWrapper = document.querySelector(".speakers-img");
//     const textButtons = document.querySelectorAll(".text-btn");

//     const prevButton = document.querySelector(".button-prev");
//     const nextButton = document.querySelector(".button-next");

//     function updateText(index) {
//         if (slides[currentSlide] && slides[currentSlide].texts[index].description) {
//             currentText = index;
//             document.querySelector(".tech").textContent = slides[currentSlide].texts[index].description;
//             document.querySelector(".title-directions").textContent = slides[currentSlide].texts[index].title;

//             textButtons.forEach(btn => btn.classList.remove("active"));
//             textButtons[index].classList.add("active");
//         } else {
//             console.error("Ошибка: Текст не найден.");
//         }
//     }

//     function updateSpeaker(index) {
//         currentSlide = (index + slides.length) % slides.length;
//         slideNum.textContent = `${currentSlide + 1} / ${slides.length}`;
//         swiperWrapper.innerHTML = `<img class="slide-image" src="${slides[currentSlide].image}" alt="Спикер">`;
//         updateText(0);
//     }

//     fetch("./scripts/speakers.json")
//         .then(response => response.json())
//         .then(data => {
//             slides = data;
//             updateSpeaker(0);
//         })
//         .catch(error => console.error("Ошибка загрузки данных: ", error));

//     prevButton.addEventListener("click", () => updateSpeaker(currentSlide + 1));
//     nextButton.addEventListener("click", () => updateSpeaker(currentSlide - 1));

//     textButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const index = parseInt(button.getAttribute("data-index"));
//             updateText(index);
//         });
//     });
// });