//Identify the set of target images.

let imagesToLoad = document.querySelectorAll("img[data-src]");

//Replace the path to the image.

const loadImages =
  ((image) => {
    image.setAttribute("src", image.getAttribute("data-src"));

    //Remove the 'data-src' attribute after loading.
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  },
  imagesToLoad.forEach((img) => {
    loadImages(img);
  }));

const imgOptions = {
  rootMargin: "0px 0px 50px 0px",
  threshold: 1,
};

//check for browser support, then proceed.
if ("IntersectionObserver" in window) {
  
  const observer = new IntersectionObserver((items) => {
    //OR: let observer = new IntersectionObserver(callback, options);
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.imagesToLoad);
        observer.unobserve(item.imagesToLoad);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
