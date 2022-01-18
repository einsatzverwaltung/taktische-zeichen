# Taktische Zeichen
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Bibliothek für die Erzeugung von taktischen Zeichen nach der DV 102 in JavaScript.

Dokumentation aller verfügbaren Optionen: https://taktische-zeichen.netlify.app/

## Inhalt

Die Bibliothek enthält:

- 23 Grundzeichen
- 7 Organisationen
- 30 Fachaufgaben
- 40 Symbole
- 8 Einheiten
- 6 Verwaltungsstufen

## Anwendung

Beide Bibliotheken beinhalten TypeScript-Definitionen.

In NodeJS oder im Browser:

```javascript
import { erzeugeTaktischesZeichen } from "taktische-zeichen-core";

const tz = erzeugeTaktischesZeichen({
  grundzeichen: "kraftfahrzeug-gelaendegaengig",
  organisation: "feuerwehr",
  fachaufgabe: "brandbekaempfung",
  einheit: "gruppe",
});

// <?xml version="1.0" encoding="UTF-8"?><svg>...</svg>
console.log(tz.toString());

// data:image/svg+xml;base64,...
console.log(tz.dataUrl);

// [75, 45]
console.log(tz.size);
```

In React:

```jsx
import { TaktischesZeichen } from "taktische-zeichen-react";

function App() {
  return (
    <TaktischesZeichen
      grundzeichen="kraftfahrzeug-gelaendegaengig"
      organisation="feuerwehr"
      fachaufgabe="brandbekaempfung"
      einheit="gruppe"
      {/* weitere Props werden durchgereicht */}
      className="..."
    />
  );
}

// Rendert <img src="data:image/svg+xml;base64,..." />
```

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](https://opensource.org/licenses/MIT) und kann kostenlos verwendet werden.

## Autor

Autor: [Philipp Jardas](https://jardas.de).

Die Quellen sind öffentlich auf [GitHub](https://github.com/phjardas/taktische-zeichen) verfügbar.

## Mitmachen

Du möchtest bei der Weiterentwicklung helfen? Prima! Du hast folgende Möglichkeiten:

- Du hast einen Fehler gefunden oder vermisst ein Symbol? [Erstelle ein Issue](https://github.com/changesets/changesets/issues/new/choose), und wir werden uns darum kümmern!
- Du möchtest aktiv bei der Entwicklung helfen? Dann schau dir bitte den [Contributors' Guide](CONTRIBUTING.md) an.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jardas.de/"><img src="https://avatars.githubusercontent.com/u/1437300?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Philipp Jardas</b></sub></a><br /><a href="https://github.com/phjardas/taktische-zeichen/commits?author=phjardas" title="Code">💻</a> <a href="#content-phjardas" title="Content">🖋</a> <a href="https://github.com/phjardas/taktische-zeichen/commits?author=phjardas" title="Documentation">📖</a> <a href="#projectManagement-phjardas" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!