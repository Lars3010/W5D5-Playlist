# W5D5 - React Lil' Playlist

De bedoeling van de opdracht was het maken van een Single Page Application waarin je favourite liedjes in op kon slaan met een rating.

## Requirements
- [x] Als gebruiker wil ik de volgende gegevens over mijn nummer willen invullen: titel, artiest, genre, rating (dropdown menu is geen vereiste).
- [x] Als gebruiker wil ik op één button kunnen klikken waardoor mijn ingevulde nummer toegevoegd wordt aan mijn playlist.
- [x] Als gebruiker wil ik mijn nummers kunnen zien in een overzicht (mijn playlist), waar alle ingevulde gegevens in zichtbaar zijn.

## Requirement Extras
We moesten een totaal aan 3 extra punten aan functionaliteit toevoegen.
- [ ] **1 PUNT** – **Sorteren** van de liedjes op naam (a-z of z-a) of artiest (a-z of z-a), sorteren op sterren (5-1 of 1-5)
- [x] **1 PUNT** – **Delete knop**: verwijderen van liedjes uit de state (super bonus punten als deze dan ook nog verwijderd worden uit de database)
- [ ] **1 PUNT** – **Categoriseren:** elk genre krijgt zijn eigen lijstje en het nummer dat je toevoegt komt terecht bij het respectievelijke genre
- [x] **2 PUNTEN** – **Filteren** van liedjes op
    - genre (selecteren welke genres je wilt) in de UI zie je of een dropdown waarmee je 1 genre kan selecteren, of je maakt een checkbox per genre, als die checkbox is aangevinkt: toon het genre (dit kunnen er dus ook meerdere of geen één zijn)
    - sterren (sorteren welke resultaten met x sterren je wilt zien) in de UI zie je of een dropdown waarmee je 1 rating kan selecteren, of je maakt een checkbox per rating, als die checkbox is aangevinkt: toon alle liedje van die rating (dit kunnen er dus ook meerdere of geen één zijn)
- [ ] **2 PUNTEN** – **[Routing](https://reacttraining.com/react-router/web/guides/quick-start)** (/Navigatie)**:** toevoegen van een navbar of menu met een link en pagina "About us", met daarin een kort verhaaltje over jezelf en dit project (max 10 zinnen)
- [ ] **2 PUNTEN** – **REDUX**
- [ ] **3 PUNTEN** – **Firebase API:** Toevoegen van een end-point in de database om, de data op te slaan

Om het project te draaien:
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.