const dots = document.querySelectorAll(
  ".slide-dots_dot"
) as NodeListOf<HTMLElement>;
const sliders = document.querySelectorAll(
  ".slide-wrapper"
) as NodeListOf<HTMLElement>;

let currentSlide: number = 0;

const classListing = (
  htmlArr: NodeListOf<HTMLElement>,
  classname: string,
  index: number
): void => {
  htmlArr.forEach((el) => {
    el.classList.remove(classname);
  });
  htmlArr[index].classList.add(classname);
};

const displaySlides = (index: number): void => {
  classListing(sliders, "active-slide", index);
};

const initSlider = (): void => {
  dots.forEach((dot: HTMLElement, index: number) => {
    dot.addEventListener("click", (): void => {
      currentSlide = index;
      classListing(dots, "active-dot", index);
      displaySlides(index);
    });
  });
};

export default initSlider;
