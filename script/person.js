import { Modal } from "./modal.js";

const modalCopy = new Modal();

class Person {
  selectors = {
    headerTitle: "[data-js-header-title]",
    headerDescription: "[data-js-header-description]",
    education: "[data-js-education]",
    experience: "[data-js-experience]",
    rewards: "[data-js-rewards]",
    modalImage: "[data-js-modal-image]",
  };

  personData = [
    {
      id: "irina",
      name: "Ирина Лайм",
      description: "преподаватель по робототехнике",
      education: {
        period: "Сентябрь 2010 — Июнь 2015",
        university: "Московский государственный университет",
        faculty: "Компьютерных наук и технологий",
        specialty: "Прикладная математика и информатика",
        form: "Очная",
      },
      experience: {
        period: "Сентябрь 2019 — Декабрь 2020",
        program: "Курс повышения квалификации «Веб-разработка»",
        place: "Место проведения: Учебный центр «Технологии будущего»",
      },
      rewards: [
        "1 место по конкурсу «Лучший проект в области ИТ»",
        "2 место по конкурсу «Инновационные решения в программировании»",
        "3 место по конкурсу «Разработка мобильных приложений»",
      ],
      imageURL: "images/irina-lime.svg",
    },
    {
      id: "marina",
      name: "Марина Орлова",
      description: "преподаватель по робототехнике",
      education: {
        period: "Сентябрь 1995 — Июнь 2000",
        university:
          "Санкт-Петербургский политехнический университет Петра Великого",
        faculty: "Компьютерных наук и технологий",
        specialty: "Математика и компьютерные науки",
        form: "Очная",
      },
      experience: {
        period: "Ноябрь 2020 — Февраль 2021",
        program: "Программа дополнительного образования «3D Моделирование»",
        place: "Институт дополнительного образования «Политех»",
      },
      rewards: [
        "1 место по конкурсу 3Д Моделирования",
        "2 место по конкурсу 3Д Моделирования",
        "3 место по конкурсу 3Д Моделирования",
      ],
      imageURL: "images/marina-orlova.svg",
    },
    {
      id: "maksim",
      name: "Максим Петров",
      description: "преподаватель по программированию",
      education: {
        period: "Сентябрь 2012 — Июнь 2017",
        university: "Новосибирский государственный университет",
        faculty: "Физики и технологий",
        specialty: "Физика",
        form: "Очная",
      },
      experience: {
        period: "Март 2021 — Июнь 2021",
        program: "Курс «Основы машинного обучения»",
        place: "Место проведения: Академия «ТехноМир»",
      },
      rewards: [
        "1 место по конкурсу «Научные исследования в области физики»",
        "2 место по конкурсу «Инновации в науке»",
        "3 место по конкурсу «Лучший научный проект»",
      ],
      imageURL: "images/maksim-petrov.svg",
    },
    {
      id: "konstantin",
      name: "Константин Назаров",
      description: "преподаватель по робототехнике",
      education: {
        period: "Сентябрь 2015 — Июнь 2020",
        university: "Казанский федеральный университет",
        faculty: "Факультет: Экономики и управления",
        specialty: "Специальность: Экономика",
        form: "Очная",
      },
      experience: {
        period: "Январь 2022 — Март 2022",
        program: "Курс «Финансовый анализ и инвестиции»",
        place: "Место проведения: Финансовая академия",
      },
      rewards: [
        "1 место по конкурсу «Лучший бизнес-план»",
        "2 место по конкурсу «Инвестиционные проекты»",
        "3 место по конкурсу «Финансовые технологии»",
      ],
      imageURL: "images/liza-vesennya.svg",
    },
    {
      id: "lisa",
      name: "Лиза Весенняя",
      description: "преподаватель по программированию",
      education: {
        period: "Сентябрь 2018 — Июнь 2023",
        university: "Уральский федеральный университет",
        faculty: "Факультет: Архитектуры и дизайна",
        specialty: "Специальность: Архитектура",
        form: "Очная",
      },
      experience: {
        period: "Февраль 2023 — Июль 2023",
        program: "Курс «Современные технологии в архитектуре»",
        place: "Место проведения: Архитектурная школа «Гармония»",
      },
      rewards: [
        "1 место по конкурсу «Лучший архитектурный проект»",
        "2 место по конкурсу «Дизайн интерьеров»",
        "3 место по конкурсу «Градостроительные решения»",
      ],
      imageURL: "images/liza-vesennya.svg",
    },
  ];

  constructor(modal) {
    this.modal = modal;
    this.slideElements = document.querySelectorAll(this.modal.selectors.slide);
    this.headerTitleElement = document.querySelector(
      this.selectors.headerTitle
    );
    this.headerDescriptionElement = document.querySelector(
      this.selectors.headerDescription
    );
    this.educationElement = document.querySelector(this.selectors.education);
    this.experienceElement = document.querySelector(this.selectors.experience);
    this.rewardsElement = document.querySelector(this.selectors.rewards);
    this.modalImage = document.querySelector(this.selectors.modalImage);
    this.bindEvents();
  }

  findPersonObject = (event) => {
    const name = event.target.getAttribute("data-js-name");

    let person;

    for (let i = 0; i < this.personData.length; i++) {
      if (this.personData[i].id === name) {
        person = this.personData[i];
      }
    }

    return person || null;
  };

  updateModalContent = (person) => {
    this.headerTitleElement.innerHTML = `${person.name}`;
    this.headerDescriptionElement.innerHTML = `${person.description}`;
    this.educationElement.innerHTML = `<p>
    ${person.education.period}<br>
    ${person.education.university}<br>
    Факультет: ${person.education.faculty}<br>
    Специальность: ${person.education.specialty}<br>
    Форма обучения: ${person.education.form}
    </p>
    `;
    this.experienceElement.innerHTML = `<p>
    ${person.experience.period}<br>
    ${person.experience.program}<br>
    Место проведения: ${person.experience.place}<br>
    </p>
    `;
    this.rewardsElement.innerHTML = `<p>
    ${person.rewards[0]}<br>
    ${person.rewards[1]}<br>
    ${person.rewards[2]}<br>
    </p>`;
    this.modalImage.src = `${person.imageURL}`;
  };

  bindEvents() {
    this.slideElements.forEach((slideElement) => {
      slideElement.addEventListener("click", (event) => {
        const person = this.findPersonObject(event);
        this.updateModalContent(person);
      });
    });
  }
}

new Person(modalCopy);
