const listLinks = document.querySelectorAll('.area-list a');
const mapHovers = document.querySelectorAll('.map-hover');

function clearActive() {
  listLinks.forEach(link => link.classList.remove('active'));
  mapHovers.forEach(map => map.classList.remove('active'));
}

// LIST → MAP
listLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    clearActive();
    link.classList.add('active');
    document.getElementById(link.dataset.map).classList.add('active');
  });

  link.addEventListener('mouseleave', clearActive);
});

// MAP → LIST
mapHovers.forEach(map => {
  map.addEventListener('mouseenter', () => {
    clearActive();
    map.classList.add('active');
    document.querySelector(`[data-map="${map.id}"]`).classList.add('active');
  });

  map.addEventListener('mouseleave', clearActive);
});
