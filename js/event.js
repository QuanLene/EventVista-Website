const EVENTS_PER_PAGE = 6;
  let currentPage = 1;
  let filteredCards = [];

  function filterEvents() {
    const selectedCity = document.getElementById('citySelect').value;
    const allCards = Array.from(document.querySelectorAll('.event-card'));

    // Lọc và ẩn toàn bộ
    filteredCards = allCards.filter(card => {
      const city = card.getAttribute('data-city');
      const shouldShow = selectedCity === 'all' || city === selectedCity;
      card.style.display = shouldShow ? '' : 'none'; // show/hide tạm thời
      return shouldShow;
    });
  }

  function paginateEvents(page) {
    const totalPages = Math.ceil(filteredCards.length / EVENTS_PER_PAGE);
    currentPage = Math.max(1, Math.min(page, totalPages));

    filteredCards.forEach((card, index) => {
      const start = (currentPage - 1) * EVENTS_PER_PAGE;
      const end = currentPage * EVENTS_PER_PAGE;
      card.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    updatePaginationControls(totalPages);
  }

  function updatePaginationControls(totalPages) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  // Nút Prev
  const prev = document.createElement('li');
  prev.innerHTML = `<button type="button" ${currentPage === 1 ? 'disabled' : ''} onclick="paginateEvents(${currentPage - 1})">«</button>`;
  pagination.appendChild(prev);

  // Các nút số trang
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('li');
    pageBtn.innerHTML = `<button type="button" class="${i === currentPage ? 'active' : ''}" onclick="paginateEvents(${i})">${i}</button>`;
    pagination.appendChild(pageBtn);
  }

  // Nút Next
  const next = document.createElement('li');
  next.innerHTML = `<button type="button" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} onclick="paginateEvents(${currentPage + 1})">»</button>`;
  pagination.appendChild(next);
}
  function filterAndPaginate() {
    filterEvents();
    paginateEvents(1);
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('citySelect').addEventListener('change', filterAndPaginate);
    filterAndPaginate();
  });