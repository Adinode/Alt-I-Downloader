# Alt-I Media Grabber

A lightweight, zero-dependency Chrome extension to rip images and direct video files off web pages using keyboard shortcuts.

## Shortcuts

* **Alt + I (Image Grabber):** Turns your cursor into a crosshair. Click any image on the page to trigger an immediate background download and disarm.
* **Alt + V (Video Grabber):** Arms video capture mode. Click any standard HTML5 video tag to grab the source file.

## Tech Stack

* Vanilla JavaScript (ES6+)
* Chrome Extensions Manifest V3 (`downloads` API, Service Worker)

## Essential Browser Setting

The browser controls download prompts. If you want instant, silent saving:
1. Open Chrome Settings at `chrome://settings/downloads`.
2. Disable the toggle for **Ask where to save each file before downloading**.

## Installation

1. Clone or download this repository to a folder on your computer.
2. Confirm `manifest.json`, `content.js`, `background.js`, and `logo.png` sit in that single folder.
3. Navigate to `chrome://extensions/` in Chrome.
4. Enable **Developer mode** in the top right corner.
5. Click **Load unpacked** in the top left corner.
6. Select your folder.

## Limitations

* **Blob Streams:** Modern video platforms (YouTube, Instagram, X) serve fragmented data streams rather than static media files. Standard click listeners cannot reconstruct chunked streams. This tool extracts raw sources like MP4 and WebM.
* **Resolution:** The extension fetches the exact URL present in the DOM element. If an article displays a thumbnail, click into the full-size view before pressing Alt + I.
