
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


