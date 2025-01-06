document.addEventListener('DOMContentLoaded', (event) => {
    const pagination = document.getElementById('pagination');
    const pageItems = pagination.querySelectorAll('.page-item');
  
    pageItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); 
        pageItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });


  let currentPage = 1; 
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