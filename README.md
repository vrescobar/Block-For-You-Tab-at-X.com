# X.com For You Blocker extension

**ForYouBlocker** is a lightweight and easy-to-read Google Chrome and Safari
extension that hides the distracting "For You" tab on Twitter (now X.com) and
automatically selects the "Following" tab by default.

This tool was created for users who prefer a happy X.com experience, and without
a complicated web extension with many options or weird unknown changes.

It just does one simple thing well, and the code is so straightworward to read
so even novel programers are sure there is no malware or whatsoever.

![Screenshot1 of the X page without the damn tab](imgs/Screenshot1.png)

> **Note:**\
> ¡La extensión ya está disponible en la Chrome Web Store! Puedes instalarla
> directamente desde
> [aquí](https://chromewebstore.google.com/detail/no-more-for-you-tab-at-xc/mkicndbahaamegdhdappppbpjkgcokcj).
>
> Para Safari, aún necesitas instalarla manualmente ya que requiere una cuota de
> desarrollador. Si deseas apoyar el proyecto para que esté disponible en la App
> Store de Apple (cuota de $100), puedes hacer una donación a través de
> [Ko-Fi ☕️](https://ko-fi.com/vrescobar) 🙏

## Project Structure

- **ForYouBlocker/**\
  Contains the source code of the extension:
  - `manifest.json` – The extension manifest.
  - `src/content.ts` – The TypeScript source that hides the "For You" tab and
    activates the "Following" tab.
  - `src/content.js` – The compiled JavaScript version of the content script.

- **scripts/**\
  Contains build scripts:
  - `build.ts` – Deno build script that compiles TypeScript to JavaScript.

- **ForYouBlocker.crx**\
  The packaged Chrome extension file.

- **LICENSE.txt**\
  Contains the MIT License.

- **README.md**\
  This documentation file.

## Development

This project uses TypeScript and Deno for development. Make sure you have
[Deno](https://deno.land) installed.

### Building the Extension

```bash
# Verificar tipos
deno task check

# Compilar TypeScript a JavaScript
deno task build
```

## Installation Instructions for Google Chrome or Brave (on desktop)

The easiest way to install the extension is through the Chrome Web Store:

1. Visit the
   [Chrome Web Store page](https://chromewebstore.google.com/detail/no-more-for-you-tab-at-xc/mkicndbahaamegdhdappppbpjkgcokcj)
2. Click on "Add to Chrome"
3. Confirm the installation when prompted

#### Alternative Method: Loading the Unpacked Extension (for developers)

If you prefer to install the extension from source:

1. **Clone or Download the Repository**\
   Make sure you have the full project folder (including the `ForYouBlocker`
   folder with `manifest.json` and `content.js`).

2. **Open Chrome or Brave** and go to: `chrome://extensions` or
   `brave://extensions`

3. **Enable Developer Mode**\
   (Toggle the switch in the top-right corner.)

4. **Click "Load unpacked"**\
   Browse to and select the `ForYouBlocker` folder (the folder containing your
   manifest and source code).

5. The extension should now load and be active.

![Screenshot3 of the X page without the damn tab](imgs/Screenshot3.png)

## Installation Instructions for Safari (Mac and iOS)

It requires Mac developer tools and to enable iphone developer mode. So git
clone this repository and install Apple's developer tools (xcode) and get a
cable to plug your phone to the computer.

#### Compile it (not optional)

Make sure you have xcode installed and you are in a mac:

`xcrun safari-web-extension-converter --project-location ForYouBlocker-ios $(pwd)/ForYouBlocker`

Xcode will be open, click on: Product > Build

#### Install on Safari (Mac)

1. Follow the official instructions (safari settings, developer, allow
   unassigned extensions and then enable it). But better read
   [The official documentation from apple](https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension)
   since soon the extensions will have the same rules as an app.
2. Open x.com or reload the wbpage
3. If you followed the path of a "unsigned extensions" a white square with an
   exclamation mark next to the address bar will appear, clock on it and select
   "always allow on this website".
4. Your extension should be active

#### Install on iPhone or iPad

Follow the
[official instructions](https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension)
which is mostly:

1. Complete the Mac installation first
2. Enable developer mode on your iphone and restart it
3. Plug the iphone to your mac
4. Run and install the application from xcode.
5. If only compiles for mac's safari, remember to configure the project and
   under targets, add the destination "iPhone"

![Screenshot4 of the X page on an iPhone without the damn tab](imgs/Screenshot4.jpeg)

### If I install it as a PWA....

If you add the safari page as a PWA, unfortunately at this point in time, safari
does not allow to run browser extensions in them.

## License

This project is licensed under the MIT License. See the
[LICENSE.txt](LICENSE.txt) file for details.

## Privacy

See the document [PRIVACY.md](PRIVACY.md)

---

## Final Remarks

ForYouBlocker is designed to be simple and transparent. The code is easy to read
and modify, so feel free to fork, contribute, or use it as inspiration for your
own projects.

Happy browsing!
