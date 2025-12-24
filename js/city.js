const EVENTS_PER_PAGE = 6;
let currentPage = 1;
let filteredCards = [];

function filterEvents() {
  const selectedCategory = document.getElementById('categorySelect').value;
  const container = document.getElementById('recommended-events');
  const allCards = Array.from(container.querySelectorAll('.event-card'));

  // Lọc thẻ trong khu vực recommended-events
  filteredCards = allCards.filter(card => {
    const category = card.getAttribute('data-category');
    const shouldShow = selectedCategory === 'all' || category === selectedCategory;
    card.style.display = shouldShow ? '' : 'none'; // tạm ẩn để chuẩn bị phân trang
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

  // Prev
  const prev = document.createElement('li');
  prev.innerHTML = `<button type="button" ${currentPage === 1 ? 'disabled' : ''} onclick="paginateEvents(${currentPage - 1})">«</button>`;
  pagination.appendChild(prev);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('li');
    pageBtn.innerHTML = `<button type="button" class="${i === currentPage ? 'active' : ''}" onclick="paginateEvents(${i})">${i}</button>`;
    pagination.appendChild(pageBtn);
  }

  // Next
  const next = document.createElement('li');
  next.innerHTML = `<button type="button" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} onclick="paginateEvents(${currentPage + 1})">»</button>`;
  pagination.appendChild(next);
}

function filterAndPaginate() {
  filterEvents();
  paginateEvents(1);
}

document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.getElementById('categorySelect');
  if (categorySelect) {
    categorySelect.addEventListener('change', filterAndPaginate);
  }
  filterAndPaginate();
});
