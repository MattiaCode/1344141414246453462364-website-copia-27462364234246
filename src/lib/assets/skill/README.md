# Come Aggiungere Nuove Skill

## Stato Attuale
**Skill visibili:** 22
**Skill pronte da abilitare:** 20 (commentate nel codice)

## Istruzioni

### 1. Aggiungi le immagini mancanti
Carica i file `.webp` in questa directory (`src/lib/assets/skill/`).

Consulta `MISSING_IMAGES.md` per l'elenco completo.

### 2. Decommentare le skill in `src/routes/skills/+page.svelte`

Una volta caricate le immagini, cerca i commenti `// TODO: aggiungi immagine` nel file e decommenta le righe corrispondenti.

#### Esempio:

**Prima (commentato):**
```javascript
// import svelteImg from '$lib/assets/skill/svelte.webp'; // TODO: aggiungi immagine

const frontendSkills = [
  { name: 'React', img: reactImg },
  // { name: 'Svelte', img: svelteImg }, // TODO: aggiungi immagine svelte.webp
  { name: 'HTML', img: htmlImg }
];
```

**Dopo (decommentato):**
```javascript
import svelteImg from '$lib/assets/skill/svelte.webp';

const frontendSkills = [
  { name: 'React', img: reactImg },
  { name: 'Svelte', img: svelteImg },
  { name: 'HTML', img: htmlImg }
];
```

### 3. Skill per Categoria

#### Frontend Development
- [ ] svelte.webp
- [ ] nextjs.webp
- [ ] vite.webp

#### Backend & CMS
- [ ] bun.webp
- [ ] joomla.webp

#### Programming Languages (intera sezione commentata)
- [ ] c.webp
- [ ] csharp.webp
- [ ] lua.webp

#### Tools & Software
- [ ] visualstudio.webp
- [ ] npm.webp
- [ ] docker.webp
- [ ] manictime.webp
- [ ] keeper.webp
- [ ] onedrive.webp

#### Cloud & Services
- [ ] vercel.webp
- [ ] cloudflare.webp
- [ ] emailjs.webp

#### Privacy & Accessibility
- [ ] iubenda.webp
- [ ] cookiebot.webp
- [ ] accessiway.webp

## Note Importanti

- Le immagini devono essere in formato `.webp`
- I nomi file devono corrispondere esattamente a quelli indicati
- La sezione "Programming Languages" è completamente commentata e va decommentata per intero quando tutte e 3 le immagini (c.webp, csharp.webp, lua.webp) sono disponibili
