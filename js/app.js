const data = [
  {
    image: "desktop-image-hero-1.jpg",
    heading: "Discover innovative ways to decorate",
    disc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love"
  },
  {
    image: "desktop-image-hero-2.jpg",
    heading: "We are available all across the globe",
    disc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    image: "desktop-image-hero-3.jpg",
    heading: "Manufactured with the best materials",
    disc: "Our modern furniture store provide a high level of quality. Our  company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  }

];
const prevBtn = document.querySelector(".btnPrev");

const btnNext = document.querySelector(".btnNext");
const body = document.querySelector(".box");

const picture = document.querySelector('.grid-img');

let isbntNext = true;

btnNext.addEventListener('click', () => {
 
  setWindow(isbntNext);
});

prevBtn.addEventListener('click', () => {
  
  isbntNext = false;
  setWindow(isbntNext);
});


const setWindow = (isbntNext) => {

  let getCurrentImg = picture.getAttribute("src");
  // remove unwanted string from the path name 
  getCurrentImg = getCurrentImg.split("./images/");

  // return the index of the current selected image
  let imageIndex = data.findIndex( (value) => 
    value.image.indexOf(getCurrentImg[1]) > -1 
    );

  // check button pressed.
  (isbntNext) ? imageIndex++ : imageIndex--;
  
  //  error checking if array is out of bound?
  if (imageIndex > data.length - 1) {
    imageIndex = 0;
  }

  if (imageIndex < 0) {
    imageIndex = data.length - 1;
  }
  
  // get content details of the next page.
  let article = data[imageIndex];
  

  const productDetails = ({heading, disc}) => {

    return `<h1>${heading}</h1>
          <p>${disc}</p>
          <a href="#" class="btn">Shop now <img src="./images/icon-arrow.svg" alt="icon-arrow" ></i> </a>`;
  }

  // set picture
  picture.src = `./images/${article.image}`;
  // set the heading and body of the page when clicked.
  body.innerHTML = productDetails(article);

}


