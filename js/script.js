const projects = [
  {
    id: '1',
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    feature_image: 'images/Snapshoot.png',
    technologies: ['html', 'css', 'javaScript'],
    live_version: 'https://banlon-jones.github.io/portfolio/',
    source: 'https://github.com/banlon-jones/portfolio.git',
    details:
        'Lorem Ipsum is simply dummy text of the printing and ' +
        'typesetting industry. Lorem Ipsum has been the industry\'s standard dummy ' +
        'text ever since the 1500s, when an unknown printer took a galley of type and ' +
        'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and' +
        ' typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since ' +
        'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s ' +
        'with the releorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    role: 'Back End Dev',
    year: '2015',
    employer: 'CANOPY'
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    feature_image: 'images/Snapshoot1.png',
    technologies: ['html', 'css', 'javaScript', 'Ruby on rails'],
    details:
        'Lorem Ipsum is simply dummy text of the printing and ' +
        'typesetting industry. Lorem Ipsum has been the industry\'s standard dummy ' +
        'text ever since the 1500s, when an unknown printer took a galley of type and ' +
        'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and' +
        ' typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since ' +
        'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s ' +
        'with the releorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    live_version: 'https://banlon-jones.github.io/portfolio/',
    source: 'https://github.com/banlon-jones/portfolio.git',
    role: 'Full Stack Dev',
    year: '2015',
    employer: 'FACEBOOK'
  },
  {
    id: '3',
    name: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    feature_image: 'images/Snapshoot2.png',
    technologies: ['html', 'css', 'javaScript', 'Ruby on rails'],
    details:
        'Lorem Ipsum is simply dummy text of the printing and ' +
        'typesetting industry. Lorem Ipsum has been the industry\'s standard dummy ' +
        'text ever since the 1500s, when an unknown printer took a galley of type and ' +
        'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and' +
        ' typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since ' +
        'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s ' +
        'with the releorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    live_version: 'https://banlon-jones.github.io/portfolio/',
    source: 'https://github.com/banlon-jones/portfolio.git',
    role: 'Full Stack Dev',
    year: '2015',
    employer: 'FACEBOOK'
  },
  {
    id: '4',
    name: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    feature_image: 'images/Snapshoot.png',
    technologies: ['html', 'css', 'javaScript', 'Ruby on rails'],
    details:
        'Lorem Ipsum is simply dummy text of the printing and ' +
        'typesetting industry. Lorem Ipsum has been the industry\'s standard dummy ' +
        'text ever since the 1500s, when an unknown printer took a galley of type and ' +
        'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and' +
        ' typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since ' +
        'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s ' +
        'with the releorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    live_version: 'https://banlon-jones.github.io/portfolio/',
    source: 'https://github.com/banlon-jones/portfolio.git',
    role: 'Lead Developer',
    year: '2018',
    employer: 'UBER'
  }

];

const getProject = (id) => {
  const [project] = projects.filter((item) => {
    if (item.id === id) {
      return item;
    }
  })
  return project;
};

const hamburgerBtn = document.querySelector('.hamburger-btn');
const header = document.querySelector('#app-header');
const menuItems = document.querySelectorAll('.menu-item');
let modal = document.querySelector('.project-details');
hamburgerBtn.addEventListener('click', () => {
  header.classList.toggle('container');
  document.querySelector('.close-btn').classList.toggle('close');
  document.querySelector('.logo').style.visibility = 'hidden';
  document.querySelector('.menu').classList.toggle('menu-a');
  menuItems.forEach((item) => item.classList.toggle('menu-item-a'));
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    header.classList.toggle('container');
    document.querySelector('.close-btn').classList.remove('close');
    document.querySelector('.logo').style.visibility = 'visible';
    document.querySelector('.menu').classList.remove('menu-a');
    menuItems.forEach((item) => item.classList.remove('menu-item-a'));
  });
});

projects.forEach((item)=> {
  document.querySelector('.works-container').innerHTML += `<div class="item">
\t\t\t\t\t<div class="card">
\t\t\t\t\t\t<div class="card-body">
\t\t\t\t\t\t\t<div class="card-img">
\t\t\t\t\t\t\t\t<img class="card-img" src="${item.feature_image}" alt="project one"/>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class="card-info">
\t\t\t\t\t\t\t\t<h3 class="card-title">${item.name}</h3>
\t\t\t\t\t\t\t\t<div class="frame2">
\t\t\t\t\t\t\t\t\t<div class="client">
\t\t\t\t\t\t\t\t\t\t<h3>${item.employer}</h3>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t\t\t<ul class="roles">
\t\t\t\t\t\t\t\t\t\t\t<li class="role">${item.role}</li>
\t\t\t\t\t\t\t\t\t\t\t<li class="role">${item.year}</li>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t\t<p class="description">${item.description}</p>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t\t<ul class="tags">
\t\t\t\t\t\t\t\t\t\t<li class="tag">
\t\t\t\t\t\t\t\t\t\t\t<a href="#">html</a>
\t\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t\t\t<li class="tag">
\t\t\t\t\t\t\t\t\t\t\t<a href="#">css</a>
\t\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t\t\t<li class="tag">
\t\t\t\t\t\t\t\t\t\t\t<a href="#">javaScript</a>
\t\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<button class="btn btn-enable project-btn" value="${item.id}">See Project</button>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>`;
});

const projecBtns = document.querySelectorAll('.project-btn');


