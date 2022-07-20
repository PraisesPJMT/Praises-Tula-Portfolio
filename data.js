const openModal = document.querySelectorAll('.see-project');
const closeModal = document.querySelector('.close');
const modalWindow = document.querySelector('.modal');

const data = [
  {
    title: 'Project 1 title goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: 'images/Rectangle_21.svg',
    otherImages: ['images/Rectangle_22.svg', 'images/Rectangle_23.svg', 'images/Rectangle_24.svg', 'images/Rectangle_25.svg'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br>
    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    liveDemoLink: 'https://praisespjmt.github.io/Praises-Tula/',
    gitHubLink: 'https://github.com/PraisesPJMT/Praises-Tula',
  },
  {
    title: 'Project 2 title goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: 'images/Rectangle_22.svg',
    otherImages: ['images/Rectangle_21.svg', 'images/Rectangle_23.svg', 'images/Rectangle_24.svg', 'images/Rectangle_25.svg'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br>
    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    liveDemoLink: 'https://praisespjmt.github.io/Praises-Tula/',
    gitHubLink: 'https://github.com/PraisesPJMT/Praises-Tula',
  },
  {
    title: 'Project 3 title goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: 'images/Rectangle_23.svg',
    otherImages: ['images/Rectangle_22.svg', 'images/Rectangle_24.svg', 'images/Rectangle_25.svg', 'images/Rectangle_26.svg'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br>
    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    liveDemoLink: 'https://praisespjmt.github.io/Praises-Tula/',
    gitHubLink: 'https://github.com/PraisesPJMT/Praises-Tula',
  },
  {
    title: 'Project 4 title goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: 'images/Rectangle_24.svg',
    otherImages: ['images/Rectangle_25.svg', 'images/Rectangle_26.svg', 'images/Rectangle_21.svg', 'images/Rectangle_22.svg'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br>
    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    liveDemoLink: 'https://praisespjmt.github.io/Praises-Tula/',
    gitHubLink: 'https://github.com/PraisesPJMT/Praises-Tula',
  },
  {
    title: 'Project 5 title goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: 'images/Rectangle_25.svg',
    otherImages: ['images/Rectangle_26.svg', 'images/Rectangle_21.svg', 'images/Rectangle_22.svg', 'images/Rectangle_23.svg'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br>
    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    liveDemoLink: 'https://praisespjmt.github.io/Praises-Tula/',
    gitHubLink: 'https://github.com/PraisesPJMT/Praises-Tula',
  },
  {
    title: 'Project 6 title goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: 'images/Rectangle_26.svg',
    otherImages: ['images/Rectangle_21.svg', 'images/Rectangle_22.svg', 'images/Rectangle_23.svg', 'images/Rectangle_24.svg'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br>
    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    liveDemoLink: 'https://praisespjmt.github.io/Praises-Tula/',
    gitHubLink: 'https://github.com/PraisesPJMT/Praises-Tula',
  },
];

function Languages(data, key, list = '') {
  // eslint-disable-next-line no-restricted-syntax
  for (const language in data[key].languages) {
    if (language) {
      list += `<span class="d-language">${data[key].languages[language]}</span>`;
    }
  }
  return list;
}

function OtherImages(data, key, list = '') {
  // eslint-disable-next-line no-restricted-syntax
  for (const image in data[key].otherImages) {
    if (image) {
      list += `<img src="${data[key].otherImages[image]}" alt="MacBook Pro 16 laptop" class="min-image" />`;
    }
  }
  return list;
}

function showModal(work) {
  const dataDetails = data[work];
  document.querySelector('.modal-title').innerHTML = dataDetails.title;
  document.querySelector('.d-language-container').innerHTML = Languages(data, work);
  document.querySelector('.d-image').src = dataDetails.image;
  document.querySelector('.other-project-images').innerHTML = OtherImages(data, work);
  document.querySelector('.modal-text').innerHTML = dataDetails.description;
  document.querySelector('.see-live').href = dataDetails.liveDemoLink;
  document.querySelector('.see-source').href = dataDetails.gitHubLink;
}

openModal.forEach((button) => {
  button.addEventListener('click', (event) => {
    showModal(event.target.dataset.work);
    modalWindow.style.display = 'block';
  }, false);
});

closeModal.addEventListener('click', () => {
  modalWindow.style.display = 'none';
});
