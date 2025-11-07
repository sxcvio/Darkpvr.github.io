// Для дополнительных скриптов (галерея, отправка формы и т.д.)

function toggleFaqAccordion() {
  const acc = document.getElementById('faqAccordion');
  if(acc.style.display === 'none' || acc.style.display === '') {
    acc.style.display = 'block';
  } else {
    acc.style.display = 'none';
  }
}

function toggleFaqItem(el) {
  const parent = el.parentElement;
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(item => {
    if(item !== parent) item.classList.remove('open');
  });
  parent.classList.toggle('open');
}

// ====== Кнопка наверх ======
const toTopBtn = document.getElementById('toTopBtn');
window.addEventListener('scroll', () => {
  if(window.scrollY > 200) toTopBtn.style.display = 'flex';
  else toTopBtn.style.display = 'none';
});
toTopBtn.onclick = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

// ====== Переключатель темы ======
const themeToggleBtn = document.getElementById('themeToggleBtn');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(dark) {
  document.body.classList.toggle('dark-theme', dark);
  const icon = themeToggleBtn.querySelector('i');
  icon.className = dark ? 'bi bi-sun' : 'bi bi-moon';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}
themeToggleBtn.onclick = () => setTheme(!document.body.classList.contains('dark-theme'));
(function(){
  const saved = localStorage.getItem('theme');
  setTheme(saved ? saved === 'dark' : prefersDark);
})();
