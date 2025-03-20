
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



// document.addEventListener('DOMContentLoaded', function() {
//     var icon = document.getElementById('#togglePassword');
//     icon.addEventListener('click', function() {
//         if (icon.src.includes('eyeclose24.svg')) {
//             icon.src = 'eyeopen24.svg';
//         } else {
//             icon.src = 'eyeclose24.svg';
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function() { 
  var icon = document.querySelector('#togglePassword'); 
  icon.addEventListener('click', function() { 
    console.log('Icon clicked'); // Log when the icon is clicked 
    var currentSrc = icon.getAttribute('src'); 
    console.log('Current src:', currentSrc); // Log current src 
    if (currentSrc === 'eyeopen24.svg') { 
      icon.setAttribute('src', 'eyeclose24.svg'); 
    } 
    else { icon.setAttribute('src', 'eyeopen24.svg'); 

    } 
    console.log('New src:', icon.getAttribute('src')); 
    });
  });
 
  let add = document.querySelectorAll('#add');
  let count = document.querySelectorAll('#count');
  let cut = '1';
  add.onclick = cut
  