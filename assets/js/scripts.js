
// Arrays for each set of images
const imagesSet1 = [
    "assets/images/first home.webp",
    "assets/images/first home2.webp",
    "assets/images/first home3.webp",
    "assets/images/first home4.webp",
    "assets/images/first home5.webp",
    "assets/images/first home6.webp",
];

const imagesSet2 = [
    "assets/images/second home2.webp",
    "assets/images/second home1.webp",
    "assets/images/second home2.webp",
    "assets/images/second home4webp.webp",
    
];

const imagesSet3 = [
    "assets/images/third home1.webp",
    "assets/images/third home2.webp",
    "assets/images/third home3.webp",
    "assets/images/third home4.webp",
    "assets/images/third home5.webp",
    "assets/images/third home6.webp",
];

const imagesSet4 = [
    "assets/images/fourth home1.webp",
    "assets/images/fourth home2.webp",
    "assets/images/fourth home3.webp",
    "assets/images/fourth home4.webp",
    "assets/images/fourth home5.webp",

];

const imagesSet5 = [
    "assets/images/fifth home1.webp",
    "assets/images/fifth home2.webp",
    "assets/images/fifth home3.webp",
    "assets/images/fifth home4.webp",
    "assets/images/fifth home5.webp",
    "assets/images/fifth home6.webp",
    "assets/images/fifth home7.webp",
];

const imagesSet6 = [
    "assets/images/beach house1.webp",
    "assets/images/beach house2.webp",
    "assets/images/beach house3.webp",
    "assets/images/beach house4.webp",
    "assets/images/beach house5.webp",
    "assets/images/beach house6.webp",
    "assets/images/beach house7.webp",
];

const imagesSet7 = [
    "assets/images/fifth home7.webp",
    "assets/images/fifth home2.webp",
    "assets/images/fifth home3.webp",
    "assets/images/fifth home4.webp",
    "assets/images/fifth home5.webp",
    "assets/images/fifth home6.webp",
    "assets/images/fifth home1.webp",
];

const imagesSet8 = [
    "assets/images/fourth home2.webp",
    "assets/images/fourth home1.webp",
    "assets/images/fourth home3.webp",
    "assets/images/fourth home4.webp",
    "assets/images/fourth home5.webp",
];

const imagesSet9 = [
    "assets/images/second home1.webp",
    "assets/images/second home4webp.webp",
    "assets/images/fifth home6.webp",
    "assets/images/first home3.webp",
    "assets/images/third home3.webp",
];

const imagesSet10 = [
    "assets/images/first home3.webp",
    "assets/images/seventh home6.webp",
    "assets/images/beach house6.webp",
    "assets/images/fourth home4.webp",
    "assets/images/eight home3.webp",
];

let currentIndex = 0;
let currentSet = imagesSet1; // Default to the first set

// Open the modal and display the selected image
function openModal(index, set) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    // Determine the current set based on the 'set' parameter
    switch (set) {
        case 'set2':
        currentSet = imagesSet2;
        break;
        case 'set3':
        currentSet = imagesSet3;
        break;
        case 'set4':
        currentSet = imagesSet4;
        break;
        case 'set5':
        currentSet = imagesSet5;
        break;
        case 'set6':
        currentSet = imagesSet6;
        break;
        case 'set7':
        currentSet = imagesSet7;
        break;
        case 'set7':
        currentSet = imagesSet7;
        break;
        case 'set8':
        currentSet = imagesSet8;
        break;
        case 'set9':
        currentSet = imagesSet9;
        break;
        case 'set10':
        currentSet = imagesSet10;
        break;
        default:
        currentSet = imagesSet1;
    }

    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = currentSet[currentIndex];
    captionText.innerHTML = ` ${currentIndex + 1} of ${currentSet.length}`;
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Change slide (Next/Previous)
function changeSlide(direction) {
    currentIndex += direction;

    // Wrap around if reaching the end of the array
    if (currentIndex >= currentSet.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = currentSet.length - 1;
    }

    // Update modal content
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modalImg.src = currentSet[currentIndex];
    captionText.innerHTML = ` ${currentIndex + 1} of ${currentSet.length}`;
}

// Swiper carousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
});
 
// Initial check
updateSlidesPerView();

// Event listener to update on resize
window.addEventListener('resize', updateSlidesPerView);
function updateSlidesPerView() {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 400) {  // Mobile phones (iPhone 6/7/8, SE, X, etc.)
        swiper.params.slidesPerView = 1;
    } else if (screenWidth > 400 && screenWidth <= 600) {  // Larger mobile screens (iPhone 11 Pro Max, etc.)
        swiper.params.slidesPerView = 1;
    } else if (screenWidth > 600 && screenWidth <= 768) {  // Tablets (iPad Mini portrait, etc.)
        swiper.params.slidesPerView = 2;
    } else if (screenWidth > 768 && screenWidth <= 1024) {  // Tablets and iPads (iPad portrait, etc.)
        swiper.params.slidesPerView = 2.5;
    } else if (screenWidth > 1024 && screenWidth <= 1200) {  // Larger tablets and iPads (iPad Pro, etc.)
        swiper.params.slidesPerView = 3;
    } else {  // Desktops
        swiper.params.slidesPerView = 4;
    }
    
    swiper.update();
}

// Over-lay toogle bton
function toggleOverlay() {
    const overlay = document.getElementById('overlay');
    const footer = document.getElementById('footer');
    overlay.classList.toggle('show');
    footer.style.display = 'none';
}


// Hamburger Menu
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

  