export class Modal {
  selectors = {
    slide: "[data-js-slide]",
    modal: "[data-js-modal]",
    closeButton: "[data-js-button-close]",
    crossButton: "[data-js-button-cross]",
    modalLink: "[data-js-modal-link]",
  };

  stateClasses = {
    hidden: "visually-hidden",
  };

  constructor() {
    this.slideElements = document.querySelectorAll(this.selectors.slide);
    this.modalElement = document.querySelector(this.selectors.modal);
    this.closeButtonElement = this.modalElement.querySelector(
      this.selectors.closeButton
    );
    this.crossButtonElement = this.modalElement.querySelector(
      this.selectors.crossButton
    );
    this.modalLinkElements = this.modalElement.querySelectorAll(
      this.selectors.modalLink
    );
    this.selectElement = this.modalElement.querySelector("#achievements");
    this.bindEvents();
  }

  onClickSlide = () => {
    this.modalElement.classList.remove(this.stateClasses.hidden);
    this.modalElement.focus();
  };

  closeModal = (event) => {
    this.modalElement.classList.add(this.stateClasses.hidden);
  };

  closeModalKeyDown = (event) => {
    const { code } = event;
    if (code === "Escape") {
      this.modalElement.classList.add(this.stateClasses.hidden);
    }
  };

  getTargetClass(value) {
    switch (value) {
      case "Образование":
        return "education";
      case "Опыт работы":
        return "experience";
      case "Награды":
        return "rewards";
      default:
        return null;
    }
  }

  linkScrollTo = (event) => {
    event.preventDefault();

    const linkText = event.target.textContent;

    let targetClass = this.getTargetClass(linkText);

    const targetClassElement = document.querySelector(`.${targetClass}`);
    if (targetClassElement) {
      targetClassElement.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Эта информация недоступна");
    }
  };

  selectScrollTo = (event) => {
    const selectValue = this.selectElement.value;

    let targetClass = this.getTargetClass(selectValue);

    const targetClassElement = document.querySelector(`.${targetClass}`);
    if (targetClassElement) {
      targetClassElement.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Эта информация недоступна");
    }
  };

  sayHi() {
    console.log("Hello!");
  }

  bindEvents() {
    this.slideElements.forEach((slideElement) => {
      slideElement.addEventListener("click", this.onClickSlide);
    });
    this.closeButtonElement.addEventListener("click", this.closeModal);
    this.crossButtonElement.addEventListener("click", this.closeModal);
    this.modalElement.addEventListener("keydown", (event) => {
      this.closeModalKeyDown(event);
    });

    this.modalElement.addEventListener("click", (event) => {
      if (event.target === this.modalElement) {
        this.closeModal();
      }
    });

    this.modalLinkElements.forEach((link) => {
      link.addEventListener("click", this.linkScrollTo);
    });
    this.selectElement.addEventListener("change", this.selectScrollTo);
  }
}

new Modal();
