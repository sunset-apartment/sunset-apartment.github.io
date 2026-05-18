/*
  Sunset Apartman - fő működés
  - Nyelvváltás: HU / EN / DE / IT
  - Saját foglaltsági naptár kirajzolása
  - Aktuális év kiírása
*/

const translations = {
  "hu": {
    "meta.title": "Sunset Apartman | Balaton parti apartman Siófokon",
    "meta.description": "Balaton parti, felújított apartman közvetlenül a vízparton Siófok Ezüstparton. Panorámás erkély, wifi, parkoló, teljes felszereltség.",
    "common.skip": "Ugrás a tartalomra",
    "brand.name": "Sunset Apartman",
    "nav.about": "Apartman",
    "nav.prices": "Árak",
    "nav.gallery": "Képek",
    "nav.availability": "Foglaltság",
    "nav.location": "Helyszín",
    "nav.contact": "Kapcsolat",
    "hero.eyebrow": "Kiadó apartman • Siófok Ezüstpart",
    "hero.title": "Balaton parti felújított apartman közvetlenül a vízparton",
    "hero.lead": "Az erkélyről csodálhatod a panorámát és a napnyugtát a vízen. Teljesen felszerelt, felújított apartman amerikai konyhás nappalival, hálóval és dupla erkéllyel.",
    "hero.primary": "Érdeklődöm",
    "hero.secondary": "Foglaltság megtekintése",
    "hero.photoPlaceholderTitle": "Fő kép helye",
    "hero.photoPlaceholderText": "Tedd ide: images/apartman-01.jpg",
    "stats.water.value": "Vízpart",
    "stats.water.label": "Szabadstrand a ház előtt",
    "stats.stay.value": "Min. 2 éj",
    "stats.stay.label": "Rövid pihenésre is",
    "stats.parking.value": "1 autó",
    "stats.parking.label": "Zárt udvari parkoló",
    "about.eyebrow": "Áttekintés",
    "about.title": "Panoráma, vízpart és kényelmes balatoni pihenés",
    "about.text": "A Sunset Apartman Siófokon, a Balatonszéplak–Ezüstpart városrészben található, egy liftes ház 5. emeletén, közvetlenül a Balaton partján. Ideális választás pároknak, családoknak és mindenkinek, aki tóparti környezetben szeretne kikapcsolódni.",
    "cards.panorama.title": "Balatoni panoráma",
    "cards.panorama.text": "A dupla erkélyről gyönyörű kilátás nyílik a Balatonra, esténként pedig a vízen tükröződő naplementét is élvezheted.",
    "cards.beach.title": "Közvetlen vízpart",
    "cards.beach.text": "A szabadstrand közvetlenül a ház előtt található, így néhány lépés után már a Balaton partján vagy.",
    "cards.programs.title": "Programok közelben",
    "cards.programs.text": "Éttermek, bicikliút, horgászási lehetőség és a déli part pezsgő balatoni programjai karnyújtásnyira vannak.",
    "prices.eyebrow": "Árak",
    "prices.title": "Napi árak szezon szerint",
    "prices.text": "Az apartman minimum 2 éjszakára foglalható. Az ágynemű a bérlésben benne van. A pontos dátumokat és a szabad időszakokat érdeklődéskor egyeztetjük.",
    "prices.pre.label": "Elő- és utószezon",
    "prices.perNight": "/ éj",
    "prices.pre.text": "Kedvező ár a nyugodtabb balatoni pihenéshez.",
    "prices.main.label": "Főszezon",
    "prices.perNight2": "/ éj",
    "prices.main.text": "Július 1. – augusztus 31. között érvényes ár.",
    "prices.included.label": "Tartalmazza",
    "prices.included.title": "Ágynemű + alapfelszereltség",
    "prices.included.text": "Wifi, mosógép, felszerelt konyha, légkondi és 1 autó részére parkoló a zárt belső udvarban.",
    "gallery.eyebrow": "Galéria",
    "gallery.title": "Képek az apartmanról és a panorámáról",
    "gallery.text": "A saját fotókat az images mappába tedd ezekkel a nevekkel: apartman-01.jpg … apartman-08.jpg. Ha más nevet használsz, csak az index.html-ben lévő src értékeket kell átírni.",
    "gallery.cap1": "Panoráma az erkélyről",
    "gallery.cap2": "Amerikai konyhás nappali",
    "gallery.cap3": "Hálószoba",
    "gallery.cap4": "Dupla erkély",
    "gallery.cap5": "Fürdőszoba",
    "gallery.cap6": "Felszerelt konyha",
    "gallery.cap7": "Szabadstrand a ház előtt",
    "gallery.cap8": "Naplemente a vízen",
    "details.eyebrow": "Részletek",
    "details.title": "Apartman adatai",
    "details.layout.label": "Elrendezés",
    "details.layout.value": "1 háló + amerikai konyhás nappali",
    "details.floor.label": "Emelet",
    "details.floor.value": "5. emelet, liftes ház",
    "details.balcony.label": "Erkély",
    "details.balcony.value": "Dupla erkély balatoni kilátással",
    "details.stay.label": "Minimum tartózkodás",
    "details.stay.value": "2 éjszaka",
    "details.linen.label": "Ágynemű",
    "details.linen.value": "Benne van a bérlésben",
    "details.parking.label": "Parkolás",
    "details.parking.value": "1 autónak zárt belső udvarban",
    "amenities.eyebrow": "Felszereltség",
    "amenities.title": "Kényelmi extrák",
    "amenities.wifi": "Internetkapcsolat",
    "amenities.cooling.label": "Légkondi",
    "amenities.cooling.value": "Kellemes hőmérséklet nyáron is",
    "amenities.kitchen.label": "Konyha",
    "amenities.kitchen.value": "Sütő, mikrohullámú sütő, hűtő, főzőlap",
    "amenities.washing.label": "Mosás",
    "amenities.washing.value": "Mosógép",
    "amenities.tv.label": "Szórakozás",
    "amenities.tv.value": "Síkképernyős TV",
    "amenities.privacy.label": "Komfort",
    "amenities.privacy.value": "Privát bejárat, hangszigetelés",
    "family.eyebrow": "Családbarát",
    "family.title": "Gyerekekkel is kényelmes választás",
    "family.text": "A házhoz tartozó parkban játszótér található, a ház előtti szabadstrand pedig családos nyaralásnál különösen praktikus. A környék biciklizésre, sétára és balatoni programokra is ideális.",
    "family.item1": "Játszótér a ház parkjában",
    "family.item2": "Szabadstrand közvetlenül az épület előtt",
    "family.item3": "Bicikliút a közelben",
    "family.item4": "Éttermek és kisbolt a közelben",
    "availability.eyebrow": "Foglaltság",
    "availability.title": "Szabad időpontok naptárban",
    "availability.text": "A naptárban a foglalt időszakok jelennek meg. Érdeklődés előtt ellenőrizheted a kívánt dátumokat, majd üzenetben egyeztetjük a részleteket.",
    "availability.emptyTitle": "Még nincs felvitt foglalt dátum",
    "availability.emptyText": "A foglalt napokat az assets/js/calendar-config.js fájlban tudod dátumonként megadni.",
    "calendar.available": "Szabad",
    "calendar.booked": "Foglalt",
    "calendar.noBooked": "Jelenleg nincs foglalt dátum beállítva.",
    "calendar.rangeNote": "A foglalt napokat az assets/js/calendar-config.js fájlban tudod módosítani.",
    "calendar.toggleOpen": "Foglaltsági naptár megnyitása",
    "calendar.toggleClose": "Foglaltsági naptár bezárása",
    "location.eyebrow": "Helyszín",
    "location.title": "Siófok, Ezüstpart – közvetlenül a Balatonnál",
    "location.text": "Az apartman a Balaton pezsgő, programokkal teli déli partján, csodás környezetben található. A vasútállomás körülbelül 800 méterre van, buszmegálló pedig a közelben található.",
    "location.card.title": "Balatonszéplak–Ezüstpart, Siófok",
    "location.card.text": "Az Ezüstpart kb. 20 méterre található. Siófok Beach kb. 1,3 km, a Bebo Aquapark kb. 7,6 km, a Hévíz–Balaton Airport kb. 84 km távolságra található. A pontos címet foglaláskor vagy érdeklődéskor lehet egyeztetni.",
    "location.button": "Megnyitás térképen",
    "contact.eyebrow": "Kapcsolat",
    "contact.title": "Érdekel az apartman?",
    "contact.text": "Írd meg a kívánt dátumot, az éjszakák számát és az érkezők számát. A szabad időpontot és a végleges feltételeket válaszban egyeztetjük.",
    "contact.email": "Email küldése",
    "contact.phone": "+36 30 323 33 82",
    "contact.whatsapp": "WhatsApp üzenet",
    "footer.note": "Statikus GitHub Pages oldal"
  },
  "en": {
    "meta.title": "Sunset Apartment | Beachfront apartment in Siófok",
    "meta.description": "Renovated beachfront apartment directly by Lake Balaton in Siófok Ezüstpart. Panoramic balcony, Wi-Fi, parking and full equipment.",
    "common.skip": "Skip to content",
    "brand.name": "Sunset Apartment",
    "nav.about": "Apartment",
    "nav.prices": "Prices",
    "nav.gallery": "Photos",
    "nav.availability": "Availability",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "hero.eyebrow": "Apartment for rent • Siófok Ezüstpart",
    "hero.title": "Renovated beachfront apartment directly by Lake Balaton",
    "hero.lead": "From the balcony you can enjoy the beautiful panorama and the sunset over the water. The renovated apartment is fully equipped and includes an open-plan living room with kitchen, a bedroom and a double balcony.",
    "hero.primary": "Send inquiry",
    "hero.secondary": "Check availability",
    "hero.photoPlaceholderTitle": "Main photo placeholder",
    "hero.photoPlaceholderText": "Add it here: images/apartman-01.jpg",
    "stats.water.value": "Beachfront",
    "stats.water.label": "Free beach in front of the house",
    "stats.stay.value": "Min. 2 nights",
    "stats.stay.label": "Short stays possible",
    "stats.parking.value": "1 car",
    "stats.parking.label": "Gated courtyard parking",
    "about.eyebrow": "Overview",
    "about.title": "Panorama, lakeside location and comfortable Balaton relaxation",
    "about.text": "Sunset Apartment is located in Siófok, in the Balatonszéplak–Ezüstpart district, on the 5th floor of a building with an elevator, directly by Lake Balaton. It is ideal for couples, families and anyone who wants to relax in a lakeside environment.",
    "cards.panorama.title": "Lake Balaton panorama",
    "cards.panorama.text": "The double balcony offers a beautiful view of Lake Balaton, and in the evening you can enjoy the sunset reflected on the water.",
    "cards.beach.title": "Directly by the water",
    "cards.beach.text": "The free beach is directly in front of the building, so Lake Balaton is only a few steps away.",
    "cards.programs.title": "Programs nearby",
    "cards.programs.text": "Restaurants, the cycling path, fishing opportunities and the lively programs of the southern shore are all within easy reach.",
    "prices.eyebrow": "Prices",
    "prices.title": "Daily prices by season",
    "prices.text": "The apartment can be booked for a minimum of 2 nights. Bed linen is included in the rental. Exact dates and available periods are confirmed during the inquiry.",
    "prices.pre.label": "Pre- and post-season",
    "prices.perNight": "/ night",
    "prices.pre.text": "A favorable price for a quieter stay by Lake Balaton.",
    "prices.main.label": "High season",
    "prices.perNight2": "/ night",
    "prices.main.text": "Valid from July 1 to August 31.",
    "prices.included.label": "Included",
    "prices.included.title": "Bed linen + basic equipment",
    "prices.included.text": "Wi-Fi, washing machine, equipped kitchen, air conditioning and parking for 1 car in the gated inner courtyard.",
    "gallery.eyebrow": "Gallery",
    "gallery.title": "Photos of the apartment and the panorama",
    "gallery.text": "Place your own photos in the images folder with these names: apartman-01.jpg … apartman-08.jpg. If you use different names, only update the src values in index.html.",
    "gallery.cap1": "Balcony panorama",
    "gallery.cap2": "Open-plan living room and kitchen",
    "gallery.cap3": "Bedroom",
    "gallery.cap4": "Double balcony",
    "gallery.cap5": "Bathroom",
    "gallery.cap6": "Equipped kitchen",
    "gallery.cap7": "Free beach in front of the house",
    "gallery.cap8": "Sunset over the water",
    "details.eyebrow": "Details",
    "details.title": "Apartment details",
    "details.layout.label": "Layout",
    "details.layout.value": "1 bedroom + open-plan living room with kitchen",
    "details.floor.label": "Floor",
    "details.floor.value": "5th floor, building with elevator",
    "details.balcony.label": "Balcony",
    "details.balcony.value": "Double balcony with lake view",
    "details.stay.label": "Minimum stay",
    "details.stay.value": "2 nights",
    "details.linen.label": "Bed linen",
    "details.linen.value": "Included in the rental",
    "details.parking.label": "Parking",
    "details.parking.value": "For 1 car in the gated inner courtyard",
    "amenities.eyebrow": "Amenities",
    "amenities.title": "Comfort features",
    "amenities.wifi": "Internet connection",
    "amenities.cooling.label": "Air conditioning",
    "amenities.cooling.value": "Comfortable temperature even in summer",
    "amenities.kitchen.label": "Kitchen",
    "amenities.kitchen.value": "Oven, microwave, fridge, cooktop",
    "amenities.washing.label": "Laundry",
    "amenities.washing.value": "Washing machine",
    "amenities.tv.label": "Entertainment",
    "amenities.tv.value": "Flat-screen TV",
    "amenities.privacy.label": "Comfort",
    "amenities.privacy.value": "Private entrance, soundproofing",
    "family.eyebrow": "Family-friendly",
    "family.title": "A comfortable choice with children too",
    "family.text": "There is a playground in the park belonging to the building, and the free beach directly in front of the house is especially practical for family holidays. The area is ideal for cycling, walking and Lake Balaton programs.",
    "family.item1": "Playground in the building’s park",
    "family.item2": "Free beach directly in front of the building",
    "family.item3": "Cycling route nearby",
    "family.item4": "Restaurants and minimarket nearby",
    "availability.eyebrow": "Availability",
    "availability.title": "Available dates in calendar view",
    "availability.text": "Booked periods are shown in the calendar. You can check your preferred dates before sending an inquiry, then we confirm the details by message.",
    "availability.emptyTitle": "No booked dates have been added yet",
    "availability.emptyText": "You can add booked days by date in assets/js/calendar-config.js.",
    "calendar.available": "Available",
    "calendar.booked": "Booked",
    "calendar.noBooked": "No booked dates are configured yet.",
    "calendar.rangeNote": "Booked days can be edited in assets/js/calendar-config.js.",
    "calendar.toggleOpen": "Open availability calendar",
    "calendar.toggleClose": "Close availability calendar",
    "location.eyebrow": "Location",
    "location.title": "Siófok, Ezüstpart – directly by Lake Balaton",
    "location.text": "The apartment is in a beautiful setting on the lively southern shore of Lake Balaton, close to programs and services. The railway station is about 800 meters away, and a bus stop is also nearby.",
    "location.card.title": "Balatonszéplak–Ezüstpart, Siófok",
    "location.card.text": "Ezüstpart is approx. 20 meters away. Siófok Beach is approx. 1.3 km away, Bebo Aquapark approx. 7.6 km, and Hévíz–Balaton Airport approx. 84 km. The exact address can be shared during booking or inquiry.",
    "location.button": "Open map",
    "contact.eyebrow": "Contact",
    "contact.title": "Interested in the apartment?",
    "contact.text": "Send a message with your preferred dates, number of nights and number of guests. Availability and final conditions will be confirmed in the reply.",
    "contact.email": "Send email",
    "contact.phone": "+36 30 323 33 82",
    "contact.whatsapp": "WhatsApp message",
    "footer.note": "Static GitHub Pages site"
  },
  "de": {
    "meta.title": "Sunset Apartment | Apartment direkt am Balaton in Siófok",
    "meta.description": "Renoviertes Apartment direkt am Ufer des Balaton in Siófok Ezüstpart. Panoramabalkon, WLAN, Parkplatz und komplette Ausstattung.",
    "common.skip": "Zum Inhalt springen",
    "brand.name": "Sunset Apartment",
    "nav.about": "Apartment",
    "nav.prices": "Preise",
    "nav.gallery": "Bilder",
    "nav.availability": "Belegung",
    "nav.location": "Lage",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Apartment zu vermieten • Siófok Ezüstpart",
    "hero.title": "Renoviertes Apartment direkt am Ufer des Balaton",
    "hero.lead": "Vom Balkon aus kannst du das wunderschöne Panorama und den Sonnenuntergang über dem Wasser genießen. Das renovierte Apartment ist voll ausgestattet und verfügt über ein Wohnzimmer mit amerikanischer Küche, ein Schlafzimmer und einen doppelten Balkon.",
    "hero.primary": "Anfrage senden",
    "hero.secondary": "Belegung ansehen",
    "hero.photoPlaceholderTitle": "Platz für Hauptfoto",
    "hero.photoPlaceholderText": "Hier einfügen: images/apartman-01.jpg",
    "stats.water.value": "Uferlage",
    "stats.water.label": "Freistrand vor dem Haus",
    "stats.stay.value": "Min. 2 Nächte",
    "stats.stay.label": "Kurzaufenthalte möglich",
    "stats.parking.value": "1 Auto",
    "stats.parking.label": "Parkplatz im geschlossenen Hof",
    "about.eyebrow": "Überblick",
    "about.title": "Panorama, Balaton-Ufer und komfortable Erholung",
    "about.text": "Das Sunset Apartment befindet sich in Siófok, im Stadtteil Balatonszéplak–Ezüstpart, im 5. Stock eines Hauses mit Aufzug, direkt am Balaton. Es ist ideal für Paare, Familien und alle, die in einer Umgebung am See entspannen möchten.",
    "cards.panorama.title": "Balaton-Panorama",
    "cards.panorama.text": "Vom doppelten Balkon aus hast du einen schönen Blick auf den Balaton und kannst am Abend den Sonnenuntergang über dem Wasser genießen.",
    "cards.beach.title": "Direkt am Wasser",
    "cards.beach.text": "Der Freistrand liegt direkt vor dem Gebäude – nur wenige Schritte und du bist am Balaton.",
    "cards.programs.title": "Programme in der Nähe",
    "cards.programs.text": "Restaurants, Radweg, Angelmöglichkeiten und die lebendigen Programme des Südufers sind in unmittelbarer Nähe.",
    "prices.eyebrow": "Preise",
    "prices.title": "Tagespreise nach Saison",
    "prices.text": "Das Apartment ist ab mindestens 2 Nächten buchbar. Bettwäsche ist im Mietpreis enthalten. Genaue Daten und freie Zeiträume werden bei der Anfrage abgestimmt.",
    "prices.pre.label": "Vor- und Nachsaison",
    "prices.perNight": "/ Nacht",
    "prices.pre.text": "Ein günstiger Preis für einen ruhigeren Aufenthalt am Balaton.",
    "prices.main.label": "Hauptsaison",
    "prices.perNight2": "/ Nacht",
    "prices.main.text": "Gültig vom 1. Juli bis 31. August.",
    "prices.included.label": "Inklusive",
    "prices.included.title": "Bettwäsche + Grundausstattung",
    "prices.included.text": "WLAN, Waschmaschine, ausgestattete Küche, Klimaanlage und ein Parkplatz im geschlossenen Innenhof.",
    "gallery.eyebrow": "Galerie",
    "gallery.title": "Bilder vom Apartment und Panorama",
    "gallery.text": "Lege deine eigenen Fotos in den Ordner images mit diesen Namen: apartman-01.jpg … apartman-08.jpg. Wenn du andere Namen verwendest, ändere nur die src-Werte in index.html.",
    "gallery.cap1": "Panorama vom Balkon",
    "gallery.cap2": "Wohnzimmer mit amerikanischer Küche",
    "gallery.cap3": "Schlafzimmer",
    "gallery.cap4": "Doppelter Balkon",
    "gallery.cap5": "Badezimmer",
    "gallery.cap6": "Ausgestattete Küche",
    "gallery.cap7": "Freistrand vor dem Haus",
    "gallery.cap8": "Sonnenuntergang über dem Wasser",
    "details.eyebrow": "Details",
    "details.title": "Apartmentdaten",
    "details.layout.label": "Aufteilung",
    "details.layout.value": "1 Schlafzimmer + Wohnzimmer mit amerikanischer Küche",
    "details.floor.label": "Etage",
    "details.floor.value": "5. Etage, Haus mit Aufzug",
    "details.balcony.label": "Balkon",
    "details.balcony.value": "Doppelter Balkon mit Seeblick",
    "details.stay.label": "Mindestaufenthalt",
    "details.stay.value": "2 Nächte",
    "details.linen.label": "Bettwäsche",
    "details.linen.value": "Im Mietpreis enthalten",
    "details.parking.label": "Parken",
    "details.parking.value": "Für 1 Auto im geschlossenen Innenhof",
    "amenities.eyebrow": "Ausstattung",
    "amenities.title": "Komfortausstattung",
    "amenities.wifi": "Internetverbindung",
    "amenities.cooling.label": "Klimaanlage",
    "amenities.cooling.value": "Angenehme Temperatur auch im Sommer",
    "amenities.kitchen.label": "Küche",
    "amenities.kitchen.value": "Ofen, Mikrowelle, Kühlschrank, Kochfeld",
    "amenities.washing.label": "Waschen",
    "amenities.washing.value": "Waschmaschine",
    "amenities.tv.label": "Unterhaltung",
    "amenities.tv.value": "Flachbild-TV",
    "amenities.privacy.label": "Komfort",
    "amenities.privacy.value": "Privater Eingang, Schallschutz",
    "family.eyebrow": "Familienfreundlich",
    "family.title": "Auch mit Kindern eine bequeme Wahl",
    "family.text": "Im zum Haus gehörenden Park gibt es einen Spielplatz, und der Freistrand direkt vor dem Haus ist besonders praktisch für Familienurlaub. Die Umgebung eignet sich ideal zum Radfahren, Spazierengehen und für Balaton-Programme.",
    "family.item1": "Spielplatz im Park des Hauses",
    "family.item2": "Freistrand direkt vor dem Gebäude",
    "family.item3": "Radweg in der Nähe",
    "family.item4": "Restaurants und Minimarkt in der Nähe",
    "availability.eyebrow": "Belegung",
    "availability.title": "Freie Termine im Kalender",
    "availability.text": "Im Kalender werden die belegten Zeiträume angezeigt. Du kannst die gewünschten Daten vor der Anfrage prüfen, anschließend stimmen wir die Details per Nachricht ab.",
    "availability.emptyTitle": "Es wurden noch keine belegten Daten eingetragen",
    "availability.emptyText": "Belegte Tage kannst du datumsweise in assets/js/calendar-config.js eintragen.",
    "calendar.available": "Frei",
    "calendar.booked": "Belegt",
    "calendar.noBooked": "Aktuell sind keine belegten Daten eingetragen.",
    "calendar.rangeNote": "Belegte Tage können in assets/js/calendar-config.js geändert werden.",
    "calendar.toggleOpen": "Belegungskalender öffnen",
    "calendar.toggleClose": "Belegungskalender schließen",
    "location.eyebrow": "Lage",
    "location.title": "Siófok, Ezüstpart – direkt am Balaton",
    "location.text": "Das Apartment befindet sich in schöner Umgebung am lebendigen Südufer des Balaton, nahe an Programmen und Dienstleistungen. Der Bahnhof ist ca. 800 Meter entfernt, eine Bushaltestelle befindet sich ebenfalls in der Nähe.",
    "location.card.title": "Balatonszéplak–Ezüstpart, Siófok",
    "location.card.text": "Der Ezüstpart ist ca. 20 Meter entfernt. Siófok Beach ist ca. 1,3 km entfernt, Bebo Aquapark ca. 7,6 km und der Flughafen Hévíz–Balaton ca. 84 km. Die genaue Adresse kann bei Buchung oder Anfrage mitgeteilt werden.",
    "location.button": "Karte öffnen",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Interesse am Apartment?",
    "contact.text": "Schreibe eine Nachricht mit gewünschten Daten, Anzahl der Nächte und Anzahl der Gäste. Verfügbarkeit und endgültige Bedingungen werden in der Antwort abgestimmt.",
    "contact.email": "E-Mail senden",
    "contact.phone": "+36 30 323 33 82",
    "contact.whatsapp": "WhatsApp Nachricht",
    "footer.note": "Statische GitHub Pages Seite"
  },
  "it": {
    "meta.title": "Sunset Apartment | Appartamento fronte lago a Siófok",
    "meta.description": "Appartamento ristrutturato direttamente sul Lago Balaton a Siófok Ezüstpart. Balcone panoramico, Wi‑Fi, parcheggio e dotazione completa.",
    "common.skip": "Vai al contenuto",
    "brand.name": "Sunset Apartment",
    "nav.about": "Appartamento",
    "nav.prices": "Prezzi",
    "nav.gallery": "Foto",
    "nav.availability": "Disponibilità",
    "nav.location": "Posizione",
    "nav.contact": "Contatti",
    "hero.eyebrow": "Appartamento in affitto • Siófok Ezüstpart",
    "hero.title": "Appartamento ristrutturato direttamente sul Lago Balaton",
    "hero.lead": "Dal balcone puoi ammirare il meraviglioso panorama e il tramonto sull’acqua. L’appartamento ristrutturato è completamente attrezzato e dispone di soggiorno con cucina open space, camera da letto e doppio balcone.",
    "hero.primary": "Invia richiesta",
    "hero.secondary": "Vedi disponibilità",
    "hero.photoPlaceholderTitle": "Spazio per la foto principale",
    "hero.photoPlaceholderText": "Inseriscila qui: images/apartman-01.jpg",
    "stats.water.value": "Fronte lago",
    "stats.water.label": "Spiaggia libera davanti alla casa",
    "stats.stay.value": "Min. 2 notti",
    "stats.stay.label": "Possibili soggiorni brevi",
    "stats.parking.value": "1 auto",
    "stats.parking.label": "Parcheggio nel cortile chiuso",
    "about.eyebrow": "Panoramica",
    "about.title": "Panorama, lago e relax confortevole sul Balaton",
    "about.text": "Sunset Apartment si trova a Siófok, nel quartiere Balatonszéplak–Ezüstpart, al 5° piano di un edificio con ascensore, direttamente sulle rive del Lago Balaton. È ideale per coppie, famiglie e per chi desidera rilassarsi in un ambiente fronte lago.",
    "cards.panorama.title": "Panorama sul Balaton",
    "cards.panorama.text": "Dal doppio balcone si gode una splendida vista sul Lago Balaton e la sera puoi ammirare il tramonto riflesso sull’acqua.",
    "cards.beach.title": "Direttamente sull’acqua",
    "cards.beach.text": "La spiaggia libera si trova proprio davanti all’edificio: bastano pochi passi per arrivare al lago.",
    "cards.programs.title": "Attività nelle vicinanze",
    "cards.programs.text": "Ristoranti, pista ciclabile, possibilità di pesca e i vivaci programmi della sponda sud sono tutti a portata di mano.",
    "prices.eyebrow": "Prezzi",
    "prices.title": "Prezzi giornalieri per stagione",
    "prices.text": "L’appartamento è prenotabile per un minimo di 2 notti. La biancheria da letto è inclusa. Le date esatte e i periodi disponibili vengono confermati al momento della richiesta.",
    "prices.pre.label": "Bassa e media stagione",
    "prices.perNight": "/ notte",
    "prices.pre.text": "Un prezzo conveniente per un soggiorno più tranquillo sul Balaton.",
    "prices.main.label": "Alta stagione",
    "prices.perNight2": "/ notte",
    "prices.main.text": "Valido dal 1 luglio al 31 agosto.",
    "prices.included.label": "Incluso",
    "prices.included.title": "Biancheria + dotazione base",
    "prices.included.text": "Wi‑Fi, lavatrice, cucina attrezzata, aria condizionata e parcheggio per 1 auto nel cortile interno recintato.",
    "gallery.eyebrow": "Galleria",
    "gallery.title": "Foto dell’appartamento e del panorama",
    "gallery.text": "Inserisci le tue foto nella cartella images con questi nomi: apartman-01.jpg … apartman-08.jpg. Se usi nomi diversi, modifica solo i valori src in index.html.",
    "gallery.cap1": "Panorama dal balcone",
    "gallery.cap2": "Soggiorno con cucina open space",
    "gallery.cap3": "Camera da letto",
    "gallery.cap4": "Doppio balcone",
    "gallery.cap5": "Bagno",
    "gallery.cap6": "Cucina attrezzata",
    "gallery.cap7": "Spiaggia libera davanti alla casa",
    "gallery.cap8": "Tramonto sull’acqua",
    "details.eyebrow": "Dettagli",
    "details.title": "Dettagli dell’appartamento",
    "details.layout.label": "Disposizione",
    "details.layout.value": "1 camera da letto + soggiorno con cucina open space",
    "details.floor.label": "Piano",
    "details.floor.value": "5° piano, edificio con ascensore",
    "details.balcony.label": "Balcone",
    "details.balcony.value": "Doppio balcone con vista lago",
    "details.stay.label": "Soggiorno minimo",
    "details.stay.value": "2 notti",
    "details.linen.label": "Biancheria",
    "details.linen.value": "Inclusa nell’affitto",
    "details.parking.label": "Parcheggio",
    "details.parking.value": "Per 1 auto nel cortile interno recintato",
    "amenities.eyebrow": "Dotazioni",
    "amenities.title": "Comfort inclusi",
    "amenities.wifi": "Connessione internet",
    "amenities.cooling.label": "Aria condizionata",
    "amenities.cooling.value": "Temperatura piacevole anche in estate",
    "amenities.kitchen.label": "Cucina",
    "amenities.kitchen.value": "Forno, microonde, frigorifero, piano cottura",
    "amenities.washing.label": "Lavanderia",
    "amenities.washing.value": "Lavatrice",
    "amenities.tv.label": "Intrattenimento",
    "amenities.tv.value": "TV a schermo piatto",
    "amenities.privacy.label": "Comfort",
    "amenities.privacy.value": "Ingresso privato, insonorizzazione",
    "family.eyebrow": "Adatto alle famiglie",
    "family.title": "Comodo anche con i bambini",
    "family.text": "Nel parco dell’edificio c’è un parco giochi, e la spiaggia libera davanti alla casa è particolarmente pratica per le vacanze in famiglia. La zona è ideale per andare in bicicletta, passeggiare e godersi i programmi del Balaton.",
    "family.item1": "Parco giochi nel parco dell’edificio",
    "family.item2": "Spiaggia libera direttamente davanti all’edificio",
    "family.item3": "Pista ciclabile nelle vicinanze",
    "family.item4": "Ristoranti e minimarket nelle vicinanze",
    "availability.eyebrow": "Disponibilità",
    "availability.title": "Date disponibili nel calendario",
    "availability.text": "Nel calendario sono mostrati i periodi occupati. Puoi controllare le date desiderate prima di inviare una richiesta, poi confermiamo i dettagli via messaggio.",
    "availability.emptyTitle": "Non sono ancora state inserite date occupate",
    "availability.emptyText": "Puoi inserire i giorni occupati per data nel file assets/js/calendar-config.js.",
    "calendar.available": "Libero",
    "calendar.booked": "Occupato",
    "calendar.noBooked": "Al momento non sono state configurate date occupate.",
    "calendar.rangeNote": "I giorni occupati possono essere modificati in assets/js/calendar-config.js.",
    "calendar.toggleOpen": "Apri calendario disponibilità",
    "calendar.toggleClose": "Chiudi calendario disponibilità",
    "location.eyebrow": "Posizione",
    "location.title": "Siófok, Ezüstpart – direttamente sul Lago Balaton",
    "location.text": "L’appartamento si trova in un ambiente meraviglioso sulla vivace sponda sud del Lago Balaton, vicino a programmi e servizi. La stazione ferroviaria dista circa 800 metri e nelle vicinanze c’è anche una fermata dell’autobus.",
    "location.card.title": "Balatonszéplak–Ezüstpart, Siófok",
    "location.card.text": "Ezüstpart dista circa 20 metri. Siófok Beach dista circa 1,3 km, Bebo Aquapark circa 7,6 km e l’aeroporto Hévíz–Balaton circa 84 km. L’indirizzo esatto può essere condiviso durante la prenotazione o la richiesta.",
    "location.button": "Apri la mappa",
    "contact.eyebrow": "Contatti",
    "contact.title": "Ti interessa l’appartamento?",
    "contact.text": "Invia un messaggio con le date desiderate, il numero di notti e il numero di ospiti. La disponibilità e le condizioni finali saranno confermate nella risposta.",
    "contact.email": "Invia email",
    "contact.phone": "+36 30 323 33 82",
    "contact.whatsapp": "Messaggio WhatsApp",
    "footer.note": "Sito statico GitHub Pages"
  }
};

const langButtons = document.querySelectorAll('[data-lang]');
const translatableElements = document.querySelectorAll('[data-i18n]');
const savedLanguage = localStorage.getItem('siteLanguage');
const browserLanguage = navigator.language ? navigator.language.slice(0, 2) : 'hu';
const defaultLanguage = translations[savedLanguage] ? savedLanguage : (translations[browserLanguage] ? browserLanguage : 'hu');
let currentLanguage = defaultLanguage;

function setLanguage(lang) {
  currentLanguage = translations[lang] ? lang : 'hu';
  const dictionary = translations[currentLanguage] || translations.hu;

  document.documentElement.lang = currentLanguage;
  document.title = dictionary['meta.title'] || translations.hu['meta.title'];

  const description = document.querySelector('meta[name="description"]');
  if (description && dictionary['meta.description']) {
    description.setAttribute('content', dictionary['meta.description']);
  }

  translatableElements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  localStorage.setItem('siteLanguage', currentLanguage);
  renderAvailabilityCalendar();
  updateCalendarToggleLabel();
}

function setupLanguageSwitcher() {
  langButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
}

const localeByLanguage = {
  hu: 'hu-HU',
  en: 'en-GB',
  de: 'de-DE',
  it: 'it-IT'
};

const weekdayLabels = {
  hu: ['H', 'K', 'Sze', 'Cs', 'P', 'Szo', 'V'],
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  de: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
  it: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
};

function getText(key) {
  return (translations[currentLanguage] && translations[currentLanguage][key]) || translations.hu[key] || key;
}

function padNumber(value) {
  return String(value).padStart(2, '0');
}

function formatDateKey(date) {
  return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())}`;
}

function parseDateKey(dateKey) {
  if (typeof dateKey !== 'string') return null;

  const parts = dateKey.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return null;

  const [year, month, day] = parts;
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function buildBookedDateSet(config) {
  const booked = new Set();

  (config.bookedDates || []).forEach((dateKey) => {
    const date = parseDateKey(dateKey);
    if (date) booked.add(formatDateKey(date));
  });

  (config.bookedRanges || []).forEach((range) => {
    const start = parseDateKey(range.from);
    const end = parseDateKey(range.to);
    if (!start || !end || end < start) return;

    const cursor = new Date(start);
    while (cursor <= end) {
      booked.add(formatDateKey(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
  });

  return booked;
}

function hasFixedCalendarStart(config) {
  const hasYear = Number.isInteger(config.startYear);
  const hasMonth = Number.isInteger(config.startMonth) && config.startMonth >= 1 && config.startMonth <= 12;
  return hasYear && hasMonth;
}

function getCalendarStartDate(config) {
  const now = new Date();

  if (!hasFixedCalendarStart(config)) {
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }

  return new Date(config.startYear, config.startMonth - 1, 1);
}

function getMonthsToShow(config) {
  if (!hasFixedCalendarStart(config)) {
    return 6;
  }

  return Math.max(1, Math.min(Number(config.monthsToShow) || 6, 24));
}

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (textContent !== undefined) element.textContent = textContent;
  return element;
}

function renderAvailabilityCalendar() {
  const calendarFrame = document.querySelector('[data-calendar]');
  if (!calendarFrame) return;

  const config = window.CIRKALO_AVAILABILITY || {};
  const bookedDates = buildBookedDateSet(config);
  const locale = localeByLanguage[currentLanguage] || 'hu-HU';
  const labels = weekdayLabels[currentLanguage] || weekdayLabels.hu;
  const monthsToShow = getMonthsToShow(config);
  const startDate = getCalendarStartDate(config);

  calendarFrame.innerHTML = '';

  const calendar = createElement('div', 'availability-calendar');

  const toolbar = createElement('div', 'calendar-toolbar');
  const legend = createElement('div', 'calendar-legend');
  legend.innerHTML = `
    <span><i class="legend-dot available"></i>${getText('calendar.available')}</span>
    <span><i class="legend-dot booked"></i>${getText('calendar.booked')}</span>
  `;
  toolbar.appendChild(legend);

  if (!bookedDates.size) {
    const noBooked = createElement('p', 'calendar-note', getText('calendar.noBooked'));
    toolbar.appendChild(noBooked);
  } else {
    const note = createElement('p', 'calendar-note', getText('calendar.rangeNote'));
    toolbar.appendChild(note);
  }

  const monthGrid = createElement('div', 'calendar-month-grid');

  for (let index = 0; index < monthsToShow; index += 1) {
    const monthDate = new Date(startDate.getFullYear(), startDate.getMonth() + index, 1);
    const monthName = monthDate.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
    const monthCard = createElement('article', 'calendar-month');
    const monthTitle = createElement('h3', '', monthName.charAt(0).toUpperCase() + monthName.slice(1));
    const grid = createElement('div', 'calendar-days');

    labels.forEach((label) => {
      grid.appendChild(createElement('div', 'calendar-weekday', label));
    });

    const firstDayOffset = (monthDate.getDay() + 6) % 7;
    for (let blank = 0; blank < firstDayOffset; blank += 1) {
      const spacer = createElement('div', 'calendar-day is-empty');
      spacer.setAttribute('aria-hidden', 'true');
      grid.appendChild(spacer);
    }

    const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
      const dateKey = formatDateKey(date);
      const isBooked = bookedDates.has(dateKey);
      const dayElement = createElement('time', `calendar-day ${isBooked ? 'is-booked' : 'is-available'}`, String(day));
      dayElement.setAttribute('datetime', dateKey);
      dayElement.setAttribute('title', `${dateKey} - ${isBooked ? getText('calendar.booked') : getText('calendar.available')}`);
      grid.appendChild(dayElement);
    }

    monthCard.appendChild(monthTitle);
    monthCard.appendChild(grid);
    monthGrid.appendChild(monthCard);
  }

  calendar.appendChild(toolbar);
  calendar.appendChild(monthGrid);
  calendarFrame.appendChild(calendar);
}

function updateCalendarToggleLabel() {
  const toggleButton = document.querySelector('[data-calendar-toggle]');
  const toggleLabel = document.querySelector('[data-calendar-toggle-label]');
  if (!toggleButton || !toggleLabel) return;

  const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
  toggleLabel.textContent = getText(isOpen ? 'calendar.toggleClose' : 'calendar.toggleOpen');
}

function setupAvailabilityCalendar() {
  const toggleButton = document.querySelector('[data-calendar-toggle]');
  const calendarFrame = document.querySelector('[data-calendar]');

  if (toggleButton && calendarFrame) {
    toggleButton.addEventListener('click', () => {
      const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      calendarFrame.hidden = isOpen;
      updateCalendarToggleLabel();
    });
  }

  renderAvailabilityCalendar();
  updateCalendarToggleLabel();
}

function setupCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();
}

setupLanguageSwitcher();
setupCurrentYear();
setLanguage(defaultLanguage);
setupAvailabilityCalendar();
