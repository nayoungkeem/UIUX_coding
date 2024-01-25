// Clone Menu and Info Elements
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');

const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

// mobile mwnu toggle function
const mobileMenuIcon = document.querySelector('.mobile-icon');

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight; //scrollHeight : 요소가 펼쳐졌을 때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${menuHeight}px`; //백틱을 사용하면 ${}를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다.
  } else {
    target.classList.add('not-active');
    newMenuBox.style.height = 0;
  }
});

//Fixed Header Style Change and meet section start animation When Scolling Dwak
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; //화면 최상단이 위치한 스크롤 위치값//
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
  if (scry > meetSectionTop - 200) {
    /*페이지가 너무 짧아서 안 닿을 수 있기때문에*/ meetSection.classList.add(
      'on'
    );
  }
};

window.addEventListener('scroll', scrCtrl);

//Features Section Data
const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다.',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를 선거한다. 모든 국민은 거주·이전의 자유를 가진다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다.',
  },
  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cuelty Free',
    text: '헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.',
  },
];

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `<div class="feature">
    <div class = "feature-icon">
      <img src="${feature.image}" alt="" />
    </div>
    <h4>${feature.title}</h4>
    <p>${feature.text}</p>
  </div>`;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical', //디폴트는 horizontal임
  loop: true, //반복여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
