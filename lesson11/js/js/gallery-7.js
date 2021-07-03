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
localStorage.setItem('date1', 'start');
localStorage.setItem('date2', 'end');
//Retrieve the date of last browsing
const date1 = localStorage.getItem('start');

//determine current date
const date2 = localStorage.getItem('end');

//Compare last date with current date
//Determine the difference
//Display result
document.getElementsById("browsing-time").innerHTML="You visited " + diffInDays + " days ago.";

function getNumberOfDays (start, end){
  const date1 = new Date(start);
  const date2 = new Date(end);

  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = date2.getTime() - date1.getTime();

  const diffInDays = Math.round (diffInTime / oneDay);

  return diffInDays;
}



