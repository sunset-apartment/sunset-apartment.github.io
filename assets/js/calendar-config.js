/*
  CIRKÁLÓ APARTMAN - SAJÁT FOGLALTSÁGI NAPTÁR

  Itt tudod kézzel beállítani a foglalt napokat.
  Nem kell Google Calendar, adatbázis vagy adminfelület.

  Dátumformátum: "ÉÉÉÉ-HH-NN"
  Példa: "2026-07-12"

  DÁTUMONKÉNT:
  bookedDates: [
    "2026-07-12",
    "2026-07-13"
  ]

  IDŐSZAKKÉNT:
  bookedRanges: [
    { from: "2026-07-20", to: "2026-07-25" }
  ]

  Fontos:
  - A "to" dátum is foglaltként jelenik meg.
  - Ha a távozás napját már szabadnak szeretnéd jelölni,
    akkor a "to" az előző nap legyen.
  - Vendégnevet vagy személyes adatot ide ne írj, mert a fájl nyilvános lesz.
*/

window.CIRKALO_AVAILABILITY = {
  title: "Cirkáló Apartman foglaltság",

  // Ha a startYear és startMonth nincs kitöltve,
  // akkor az oldal automatikusan az aktuális hónaptól indul,
  // és 6 hónapot mutat.
  //
  // Fix kezdéshez írd be például:
  // startYear: 2026,
  // startMonth: 7,
  startYear: null,
  startMonth: null,

  // Csak fix kezdés esetén számít.
  // Ha startYear és startMonth nincs kitöltve, az oldal mindig 6 hónapot mutat.
  monthsToShow: 6,

  // FOGALT NAPOK DÁTUMONKÉNT
  bookedDates: [
    // "2026-07-05",
    // "2026-07-06"
  ],

  // FOGALT IDŐSZAKOK - opcionális, akkor praktikus, ha több egymást követő nap foglalt.
  bookedRanges: [
    // { from: "2026-07-10", to: "2026-07-14" }
  ]
};
