let navToggle = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');
let links = document.querySelector('.links');
let topLink = document.querySelector('.top-link');
let nav = document.getElementById('nav');
let scrollLinks = document.querySelectorAll('.scroll-link');

navToggle.addEventListener('click', () => {
  let containerHeight = linksContainer.getBoundingClientRect().height;
  let linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});


window.addEventListener('scroll', () => {
  let scrollHeight = window.pageYOffset;
  let navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});


scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let id = e.currentTarget.getAttribute('href').slice(1);
    let element = document.getElementById(id);
    let navHeight = nav.getBoundingClientRect().height;
    let containerHeight = linksContainer.getBoundingClientRect().height;
    let fixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = 0;
  });
});
