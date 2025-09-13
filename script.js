document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  function activate(tab){
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected','false');
    });
    panels.forEach(p => p.hidden = true);

    tab.classList.add('active');
    tab.setAttribute('aria-selected','true');
    const targetId = tab.getAttribute('aria-controls');
    document.getElementById(targetId).hidden = false;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activate(tab));
  });

  // inițializare
  activate(document.querySelector('.tab.active'));
});
