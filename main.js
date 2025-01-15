// document.addEventListener('DOMContentLoaded', (event) => {
//     const pagination = document.getElementById('pagination');
//     const pageItems = pagination.querySelectorAll('.page-item');
  
// //     pageItems.forEach(item => {
// //       item.addEventListener('click', function(event) {
// //         event.preventDefault(); 
//         pageItems.forEach(item => item.classList.remove('active'));
//         this.classList.add('active');
//       });
//     // });
//   // });


  let currentPage = window.location.pathname;
  if(currentPage.includes("index.html")){
    currentPage = 1 ; 
  }
  else if(currentPage.includes("page2.html")){
    currentPage = 2 ; 
  }
  else if(currentPage.includes("page3.html")){
    currentPage = 3 ;
  }
  const totalPages = 3; 
  function goToPage(page) 
  { currentPage = page; updatePagination();

   } 
  function updatePagination() { 
  const pages = document.querySelectorAll('.pagination .page-item');
   pages.forEach(page => { page.classList.remove('active');
     if (page.querySelector('.page-link').getAttribute('onclick') === `goToPage(${currentPage})`) {
       page.classList.add('active'); } 
      }); 
      document.getElementById('prevButton').classList.toggle('disabled', currentPage === 1); 
      document.getElementById('nextButton').classList.toggle('disabled', currentPage === totalPages); 
      
    } 
    updatePagination();



  // document.addEventListener("DOMContentLoaded", function() { // Get the current page URL 
  // var currentPage = window.location.pathname; // Determine which button to activate based on the current page 
  // if (currentPage.includes("index.html")) { 
  //   document.querySelector(".page-item.active").classList.remove("active"); 
  //   document.querySelector(".page-item:nth-child(2)").classList.add("active"); 
  // } 
  // else if (currentPage.includes("page2.html")) { 
  //   document.querySelector(".page-item.active").classList.remove("active"); 
  //   document.querySelector(".page-item:nth-child(3)").classList.add("active");
  //  } 
  //  else if (currentPage.includes("page3.html")) { 
  //   document.querySelector(".page-item.active").classList.remove("active");
  //    document.querySelector(".page-item:nth-child(4)").classList.add("active"); }});\


// document.addEventListener("DOMContentLoaded", function() {
//   var currentPage = window.location.pathname.split("/").pop();

//   if (currentPage === "index.html" || currentPage === "") {
//     document.getElementById("page1").classList.add("active");
//   } else if (currentPage === "page2.html") {
//     document.getElementById("page2").classList.add("active");
//   } else if (currentPage === "page3.html") {
//     document.getElementById("page3").classList.add("active");
//   }

//   // Prevent multiple active classes
//   var activeItems = document.querySelectorAll('.page-item.active');
//   if (activeItems.length > 1) {
//     for (var i = 0; i < activeItems.length - 1; i++) {
//       activeItems[i].classList.remove('active');
//     }
//   }
// });

// function goToPage(pageNumber) {
//   // You can add any necessary code here if you want to handle page changes
// }

// document.addEventListener("DOMContentLoaded", function() {
//   var currentPage = window.location.pathname.split("/").pop();

//   // Remove active class from all items first
//   document.querySelectorAll('.page-item').forEach(function(item) {
//     item.classList.remove('active');
//   });

//   // Add active class to the current page item
//   if (currentPage === "index.html" || currentPage === "") {
//     document.getElementById("page1").classList.add("active");
//   } else if (currentPage === "page2.html") {
//     document.getElementById("page2").classList.add("active");
//   } else if (currentPage === "page3.html") {
//     document.getElementById("page3").classList.add("active");
//   }
// });


  // document.addEventListener("DOMContentLoaded", function() { // Get the current page URL 
  // var currentPage = window.location.pathname; // Determine which button to activate based on the current page 
  // if (currentPage.includes("index.html")) { 
  //   document.querySelector(".page-item .active").classList.remove("active"); 
  //   document.getElementById("page1").classList.add("active"); 
  // } 
  // else if (currentPage.includes("page2.html")) { 
  //   document.querySelector(".page-item .active").classList.remove("active"); 
  //   document.getElementById("page2").classList.add("active");
  //  } 
  //  else if (currentPage.includes("page3.html")) { 
  //   document.querySelector(".page-item .active").classList.remove("active");
  //    document.getElementById("page3").classList.add("active"); }});


//  const togglePassword = document
//   .querySelector('#togglePassword');
// const password = document.querySelector('#form3Example4');
// togglePassword.addEventListener('click', () => {
//   // Toggle the type attribute using
//   // getAttribure() method
//   const type = password
//       .getAttribute('type') === 'password' ?
//       'text' : 'password';
//   password.setAttribute('type', type);
//   // Toggle the eye and bi-eye icon
//   this.classList.toggle('icofont-eye-close');
// });
document.addEventListener('DOMContentLoaded', function() {
    var icon = document.getElementById('#togglePassword');
    icon.addEventListener('click', function() {
        if (icon.src.includes('eyeclose24.svg')) {
            icon.src = 'eyeopen24.svg';
        } else {
            icon.src = 'eyeclose24.svg';
        }
    });
});


