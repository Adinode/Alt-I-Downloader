let armedMode = null;

document.addEventListener('keydown', (e) => {
  if (e.altKey && e.key.toLowerCase() === 'i') {
    armedMode = armedMode === 'image' ? null : 'image';
    document.body.style.cursor = armedMode ? 'crosshair' : 'default';
  }
  if (e.altKey && e.key.toLowerCase() === 'v') {
    armedMode = armedMode === 'video' ? null : 'video';
    document.body.style.cursor = armedMode ? 'crosshair' : 'default';
  }
});

document.addEventListener('click', (e) => {
  if (!armedMode) return;

  e.preventDefault();
  e.stopPropagation();

  const tag = e.target.tagName.toLowerCase();

  if (armedMode === 'image' && tag === 'img') {
    const url = e.target.src;
    if (url) {
      chrome.runtime.sendMessage({ action: "download", url: url });
    }
  }

  if (armedMode === 'video' && tag === 'video') {
    let url = e.target.src;
    
    if (!url) {
      const sourceElement = e.target.querySelector('source');
      if (sourceElement) {
        url = sourceElement.src;
      }
    }

    if (url) {
      if (url.startsWith('blob:')) {
        alert('This is a blob stream. Direct download is impossible.');
      } else {
        chrome.runtime.sendMessage({ action: "download", url: url });
      }
    }
  }

  armedMode = null;
  document.body.style.cursor = 'default';
}, true);