const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal");


open.onclick = () => {
  console.log("모달을 보여줍니다.");
  modal.style.display = "flex";
};

close.onclick = () => {
  console.log("모달을 끕니다.");
  modal.style.display = "none";
};

const mql = window.matchMedia("screen and (max-width: 992px)");

mql.addListener(function(e) {
    if(e.matches) {
        console.log('작은 화면 입니다.');
  		// modal.style.display = "flex";
    } else {
        console.log('큰 화면 입니다.');
        modal.style.display = "none";
    }
});

