//Identify the set of target images.

let imagesToLoad = document.querySelectorAll("img[data-src]");

//Replace the path to the image.

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));

  //Remove the 'data-src' attribute after loading.
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

imagesToLoad.forEach((img) => {
  loadImages(img);
});

//check for browser support, then proceed.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
