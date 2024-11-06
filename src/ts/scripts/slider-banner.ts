const dots = document.querySelectorAll('.slide-dots_dot') as NodeListOf<HTMLElement>;
const sliders = document.querySelectorAll('.slide-wrapper') as NodeListOf<HTMLElement>;

console.log(dots)

const initSlider = () => {
    let currentSlide:number = 0;

    dots.forEach((dot: HTMLElement, index:number) => {
        dot.addEventListener("click", ():void => {
            currentSlide = index
            dots.forEach((dot)=> {
                dot.classList.remove("active")
            })
            dots[currentSlide].classList.add('active')
        })
    })
    
}

export default initSlider

