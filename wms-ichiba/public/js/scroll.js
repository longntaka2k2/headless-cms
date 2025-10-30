function handleScroll() {
  const imgRight = document.querySelector(".img-right");
  const imgLeft = document.querySelector(".img-left");
  const imgBg = document.querySelector(".img-bg");
  const dom = document.querySelector(".dom-sroll");
  const bannerMultichannel = document.querySelector(".banner-multichannel");
  const listTemplateRight = document.querySelector(".list-template-right");
  const listTemplateLeft = document.querySelector(".list-template-left");
  const valueY = window.scrollY;
  if (valueY < 1000) {
    if (imgBg)
      imgBg.style.transform = `translate(${-valueY * 1.05}px, ${valueY * 0.43
        }px)`;

    if (imgRight) imgRight.style.transform = `translateY(${valueY * 0.77}px)`;
    if (imgLeft)
      imgLeft.style.transform = `translate(${valueY * 0.1}px, ${valueY * 0.6
        }px)`;
    

  }
  if (valueY > 1000) {
    if (dom)
      dom.style.transform = `rotate(${valueY * 0.3}deg)`;
  }
  if (valueY < 4000){
    if(bannerMultichannel){
      bannerMultichannel.style.transform = `rotateX(${valueY * 0.08}deg)`;
    }
  }
  if (valueY < 1800) {
    if (listTemplateRight) listTemplateRight.style.transform = `translateX(${-valueY * 0.4}px)`;
    if (listTemplateLeft) listTemplateLeft.style.transform = `translateX(${valueY * 0.4}px)`;
  }
}
window.addEventListener("scroll", handleScroll);