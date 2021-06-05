//Identify the set of target images.

let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  //Change the path to the image from data-src to src
  image.setAttribute("src", image.getAttribute("data-src"));

  //Remove the 'data-src' attribute after loading.
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
imagesToLoad.forEach((img) => {
  loadImages(img);
});

let imgOptions = {
  rootMargin: "0px 0px 50px 0px",
  threshold: 1,
};

//check for browser support, then proceed.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items) => {
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

//Save the date of last browsing
localStorage.setItem('lastdate', 'oldDate');
//Retrieve the date of last browsing
const lastDate = localStorage.getItem('lastdate');
//determine current date

//Compare last date with current date
//Determine the difference
//Display result

const cat = localStorage.getItem('myCat');

document.getElementsById("browsing-time").innerHTML="You are online";

