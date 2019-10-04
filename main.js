window.onscroll = function() {
  onStickyHeader();
};

const header = document.getElementById("header");

const sticky = header.offsetTop;

let onStickyHeader = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
