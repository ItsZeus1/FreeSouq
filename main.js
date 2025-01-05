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
  