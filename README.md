# ForYouBlocker

ForYouBlocker is a lightweight and easy-to-read Google Chrome extension that
hides the distracting "For You" tab on Twitter (now X.com) and automatically
selects the "Following" tab by default. This tool was created for users who
prefer a simplified experience without the policies imposed by the Chrome Web
Store.

> **Note:**\
> This extension is provided under the MIT License—you can do whatever you want
> with it. It is not published on the Chrome Web Store in order to keep things
> simple and to avoid certain Google policies.

## Project Structure

- **ForYouBlocker/**\
  Contains the source code of the extension:
  - `manifest.json` – The extension manifest.
  - `content.js` – The script that hides the "For You" tab and activates the
    "Following" tab.

- **ForYouBlocker.crx**\
  The packaged Chrome extension file.

- **LICENSE.txt**\
  Contains the MIT License.

- **README.md**\
  This documentation file.

## Installation Instructions

### Installing on Google Chrome or Brave

Since the extension is not distributed via the Chrome Web Store, you have two
options for installation:

#### Method 1: Installing the Packaged (.crx) Extension

1. **Download the `ForYouBlocker.crx` file.**

2. **Open Chrome or Brave** and navigate to: `chrome://extensions`

3. **Enable Developer Mode**\
   Toggle the "Developer mode" switch in the top-right corner of the Extensions
   page.

4. **Drag and Drop**\
   Drag the `ForYouBlocker.crx` file into the Extensions page.\
   When prompted, click **Add extension** to confirm the installation.

> **Note:**\
> If dragging the file doesn’t work (or if Chrome/Brave blocks the
> installation), try Method 2.

#### Method 2: Loading the Unpacked Extension

1. **Clone or Download the Repository**\
   Make sure you have the full project folder (including the `ForYouBlocker`
   folder with `manifest.json` and `content.js`).

2. **Open Chrome or Brave** and go to: `chrome://extensions`

3. **Enable Developer Mode**\
   (Toggle the switch in the top-right corner.)

4. **Click "Load unpacked"**\
   Browse to and select the `ForYouBlocker` folder (the folder containing your
   manifest and source code).

5. The extension should now load and be active.

## License

This project is licensed under the MIT License. See the
[LICENSE.txt](LICENSE.txt) file for details.

---

## Final Remarks

ForYouBlocker is designed to be simple and transparent. The code is easy to read
and modify, so feel free to fork, contribute, or use it as inspiration for your
own projects.

Happy browsing!
