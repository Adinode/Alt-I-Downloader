let isArmed = false;

document.addEventListener('keydown', (e) => {
  if (e.altKey && e.key.toLowerCase() === 'i') {
    isArmed = !isArmed;
    document.body.style.cursor = isArmed ? 'crosshair' : 'default';
  }
});

document.addEventListener('click', (e) => {
  if (!isArmed) return;

  if (e.target.tagName.toLowerCase() === 'img') {
    e.preventDefault();
    e.stopPropagation();

    const imgUrl = e.target.src;
    if (imgUrl) {
      chrome.runtime.sendMessage({ action: "download", url: imgUrl });
    }

    isArmed = false;
    document.body.style.cursor = 'default';
  }
}, true);