console.log("site loaded");

<!-- i button -->
document.querySelectorAll('.credit').forEach(function (c) {
  var btn = c.querySelector('.credit-btn');
  var panel = c.querySelector('.credit-panel');
  function set(open) {
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', open);
  }
  btn.addEventListener('click', function (e) { e.stopPropagation(); set(panel.hidden); });
  document.addEventListener('click', function (e) { if (!c.contains(e.target)) set(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { set(false); btn.focus(); }
  });
});