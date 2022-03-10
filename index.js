window.onload = function () {
  const imageList = [
    "6 - OkKwWM9.jpg",
    "3 - kgTEVHZ.jpg",
    "4 - vZoqs0P.jpg",
    "7 - eUppgFB.jpg",
    "1 - ArsdCGv.jpg",
    "2 - LNUXzZF.jpg",
    "5 - SEu9pHo.jpg",
    "8 - WAIXTXs.jpg",
    "10 - s6w2RpD.jpg",
    "9 - vb0uajo.jpg",
  ];
  const loadImage = () => {
    let total = 0;
    for (let i = 0; i < imageList.length; i++) {
        let img = new Image();
        img.src= `./images/${imageList[i]}`;
        img.onload = function () {
            total++
            if(total === 10) appenBox();
        }
    }
  }
  const bricklayer = new Bricklayer(document.querySelector(".bricklayer"));
  const appenBox = () => {
      for (let i = 0; i < imageList.length; i++) {
        const img = document.createElement("img");
        img.src = `./images/${imageList[i]}`;
        img.className = `animate__animated animate__bounceIn`;
        img.style.animationDelay = `${0.3 * i}s`;
        bricklayer.append(img);
      }
  }
  loadImage();
};


window.addEventListener("beforeunload", function(event) {
    console.log("bricklayer.destroyed");
    // bricklayer.destroyed()
    // document.querySelector(".bricklayer").innerHTML = ""
});