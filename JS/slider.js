(function () {
    let items = document.querySelectorAll(".slide");
    let sliderList = document.querySelector(".slider__list");
    let rightBtn = document.querySelector(".slider__btn_direction-right");
    let leftBtn = document.querySelector(".slider__btn_direction-left");
    let step = setCurrentWidth();
    let maxRight = step * items.length;
    let currentRight = 0;
    items[0].classList.add("active");

    sliderList.style.right = currentRight;

    window.addEventListener("resize", () => {
        step = setCurrentWidth();
    });

    rightBtn.addEventListener("click", (e) => {
        e.preventDefault();
        changeSlide(e, "right");
    });

    leftBtn.addEventListener("click", (e) => {
        e.preventDefault();
        changeSlide(e, "left");
    });

    function changeSlide(e, direction) {

        // расчитаем ширину слайда
        const itemWidth = document.querySelector(".slider__item").clientWidth;

        e.preventDefault();
        if (direction == "right") {
            if (currentRight + itemWidth  < maxRight) {
                currentRight += step;
                sliderList.style.right = `${currentRight}px`;
            }
        } else {
            if (currentRight - itemWidth >= 0) {
                currentRight -= step;
                sliderList.style.right = currentRight + "px";
            }
        }
    }

    function setCurrentWidth() {
        let itemWidth = document.querySelector(".slider__list_wrap").clientWidth;
        items.forEach(item => {
            item.style.width = `${itemWidth}px`;
        });

        if(parseInt(sliderList.style.right) > 0) {
            sliderList.style.right = `${itemWidth}px`;
        }

        return itemWidth;
    };
}) ();
