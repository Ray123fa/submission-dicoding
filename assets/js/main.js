// Menampilkan #myBtn di ketinggian tertentu agar user dapat mengklik button tersebut untuk kembali ke atas
const navHeight = document.querySelector("nav").offsetHeight; // mengambil tinggi dari navbar
function scrollFunction() {
  const myBtn = document.querySelector("#myBtn");
  const partScroll = document.querySelector("main").offsetTop; // mengambil jarak dari paling atas ke tag main
  const scrollWhen = partScroll - navHeight;

  if (document.body.scrollTop > scrollWhen || document.documentElement.scrollTop > scrollWhen) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}
window.onscroll = function () {
  scrollFunction();
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Handling show and close navbar
var isOpen = false;
const nav = document.querySelector("nav ul");
const backdrop = document.querySelector("#backdrop");

function openNav() {
  bar1.style.display = "none";
  bar2.style.display = "block";
  backdrop.style.display = "block";
  nav.classList.toggle("show");
  isOpen = true;
}

function closeNav() {
  bar1.style.display = "block";
  bar2.style.display = "none";
  backdrop.style.display = "none";
  nav.classList.toggle("show");
  isOpen = false;
}

function toggleMenu() {
  const bar1 = document.querySelector("#bar1");
  const bar2 = document.querySelector("#bar2");

  if (isOpen) {
    closeNav();
  } else {
    openNav();
  }
}

// Close navbar ketika user sudah memilih menu
listMenu = document.querySelectorAll("nav ul li a");
listMenu.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    closeNav();

    const targetId = item.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
    });
  });
});
