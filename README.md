# Cirkáló Apartman - GitHub Pages oldal

## Fájlstruktúra

```text
index.html
assets/
  css/
    style.css
  js/
    app.js
    calendar-config.js
images/
  README.txt
  apartman-01.jpg
  apartman-02.jpg
  apartman-03.jpg
  apartman-04.jpg
  apartman-05.jpg
  apartman-06.jpg
  apartman-07.jpg
  apartman-08.jpg
```

## Mit hol kell szerkeszteni?

- `index.html`: az oldal szerkezete, képek fájlnevei, email / telefon / WhatsApp linkek.
- `assets/css/style.css`: minden design és reszponzív CSS.
- `assets/js/app.js`: nyelvváltás, HU / EN / DE / IT szövegek, saját naptár megjelenítése.
- `assets/js/calendar-config.js`: saját foglaltsági naptár; itt tudod dátumonként vagy időszakként beállítani a foglalt napokat.
- `images/`: ide jönnek az apartman fotói.

## Saját foglaltsági naptár

Nem kell Google Calendar. A foglalt napokat ebben a fájlban szerkeszd:

```text
assets/js/calendar-config.js
```

Dátumonként:

```js
bookedDates: [
  "2026-07-12",
  "2026-07-13"
]
```

Időszakként:

```js
bookedRanges: [
  { from: "2026-07-20", to: "2026-07-25" }
]
```

A `to` dátum is foglaltként jelenik meg. Ha a távozás napját már szabadnak szeretnéd jelölni, akkor az előző nap legyen a `to`.

## Lenyitható naptár

A naptár alapból zárva van. A látogató a „Foglaltsági naptár megnyitása” gombbal tudja lenyitni.

## Kezdő hónap logika

A `calendar-config.js` fájlban ez az alapbeállítás:

```js
startYear: null,
startMonth: null,
monthsToShow: 6
```

Ha a `startYear` és a `startMonth` nincs kitöltve, az oldal mindig az aktuális hónaptól indul, és 6 hónapot mutat.

Fix kezdéshez például:

```js
startYear: 2026,
startMonth: 7,
monthsToShow: 8
```

Ebben az esetben 2026 júliustól 8 hónapot mutat.

Vendégnevet vagy személyes adatot ne írj a fájlba, mert GitHub Pages oldalon nyilvánosan elérhető lesz.

## GitHub Pages

Töltsd fel a teljes mappastruktúrát a repository gyökérmappájába, majd:

Settings → Pages → Deploy from branch → `main` / `/root`
