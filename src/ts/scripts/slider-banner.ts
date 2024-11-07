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

const listInterval = setInterval(() => {
  currentSlide += 1;
  if (currentSlide > 2) {
    currentSlide = 0;
  }
  classListing(dots, "active-dot", currentSlide);
  displaySlides(currentSlide);
}, 5000);

const initSlider = () => {
  listInterval;

  dots.forEach((dot: HTMLElement, index: number) => {
    dot.addEventListener("click", (): void => {
      clearInterval(listInterval);

      currentSlide = index;

      classListing(dots, "active-dot", index);

      displaySlides(index);
    });
  });
};

export default initSlider;
