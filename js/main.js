// Mobile sidebar toggle
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) sidebar.classList.remove('open');
  });
}

// Highlight active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#sidebar nav a[href]').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === currentPage) a.classList.add('active');
});
