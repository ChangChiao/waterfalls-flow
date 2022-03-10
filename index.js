window.onload = function () {
  const imageList = [
    "1 - ArsdCGv.jpg",
    "2 - LNUXzZF.jpg",
    "3 - kgTEVHZ.jpg",
    "4 - vZoqs0P.jpg",
    "5 - SEu9pHo.jpg",
    "6 - OkKwWM9.jpg",
    "7 - eUppgFB.jpg",
    "8 - WAIXTXs.jpg",
    "9 - vb0uajo.jpg",
    "10 - s6w2RpD.jpg",
  ];
  const bricklayer = new Bricklayer(document.querySelector(".bricklayer"));

  for (let i = 0; i < imageList.length; i++) {
    const img = document.createElement("img");
    img.src = `./images/${imageList[i]}` ;
    bricklayer.append(img);
  }

};
