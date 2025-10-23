# SvelteKit + TailwindCSS Portfolio

Portfolio professionale moderno costruito con SvelteKit e TailwindCSS, powered by Bun - il runtime JavaScript più veloce al mondo!

## Caratteristiche

- **SvelteKit**: Framework moderno per applicazioni web reattive e performanti
- **TailwindCSS**: Framework CSS utility-first con colori e font personalizzati
- **TypeScript**: Tipizzazione statica per codice più robusto
- **Bun Runtime**: Runtime JavaScript ultra-veloce scritto in Zig (3-4x più veloce di Node.js!)
- **Design Responsive**: Perfetto su qualsiasi dispositivo
- **10 Componenti Modulari**: Navbar, Hero, About, Timeline, Skills, Services, Workflow, Contact, Footer, ScrollToTop
- **Animazioni Smooth**: Scroll spy, transizioni, hover effects

## Struttura del Progetto

```
.
├── src/
│   ├── routes/
│   │   ├── +layout.svelte      # Layout principale
│   │   └── +page.svelte         # Portfolio homepage
│   ├── lib/
│   │   └── components/          # Componenti riutilizzabili
│   │       ├── Navbar.svelte
│   │       ├── Hero.svelte
│   │       ├── About.svelte
│   │       ├── Timeline.svelte
│   │       ├── Skills.svelte
│   │       ├── Services.svelte
│   │       ├── Workflow.svelte
│   │       ├── Contact.svelte
│   │       ├── Footer.svelte
│   │       └── ScrollToTop.svelte
│   └── app.css                  # Stili globali con Tailwind
├── static/                      # File statici
├── tailwind.config.js           # Configurazione Tailwind custom
├── postcss.config.js            # Configurazione PostCSS
├── bun.lockb                    # Bun lock file (binario)
└── package.json
```

## Come Iniziare

### Prerequisiti

- **Bun** (v1.0 o superiore) - [Installa da bun.sh](https://bun.sh)

### Installazione

1. Installa Bun (se non ce l'hai già):
```bash
# Linux/macOS/WSL
curl -fsSL https://bun.sh/install | bash

# Windows (via npm come fallback)
npm install -g bun
```

2. Clona il repository:
```bash
git clone <url-repository>
cd 2323223WebSite-13142414214
```

3. Installa le dipendenze con Bun (velocissimo! ⚡):
```bash
bun install
```

4. Avvia il server di sviluppo:
```bash
bun run dev
```

5. Apri il browser su `http://localhost:5173`

## Script Disponibili

- `bun run dev` - Avvia il server di sviluppo (Hot Module Replacement)
- `bun run build` - Crea la build di produzione ottimizzata
- `bun run preview` - Anteprima della build di produzione

## Perché Bun?

Bun è un runtime JavaScript ultra-veloce scritto in **Zig**, il linguaggio di programmazione a basso livello più performante. Vantaggi:

- ⚡ **3-4x più veloce** di Node.js nell'installazione pacchetti
- 🚀 **Startup istantaneo** - nessun overhead
- 📦 **Compatibile** al 100% con npm packages
- 🔋 **Built-in TypeScript** - nessuna configurazione necessaria
- 💾 **Meno memoria** utilizzata rispetto a Node.js

## Personalizzazione

### Colori e Tema

Puoi personalizzare i colori modificando il file `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Aggiungi i tuoi colori personalizzati
    },
  },
}
```

### Componenti

I componenti sono organizzati nella cartella `src/lib/`. Puoi creare nuovi componenti e importarli nelle tue pagine.

### Routing

SvelteKit utilizza il file-based routing. Per creare una nuova pagina:

1. Crea una cartella in `src/routes/`
2. Aggiungi un file `+page.svelte`
3. La pagina sarà automaticamente disponibile

## Deployment

### Vercel (consigliato)

```bash
bun install -g vercel
bun run build
vercel --prod
```

### Netlify

```bash
bun run build
# Poi carica la cartella build/ su Netlify
```

### Altre Piattaforme

Consulta la [documentazione ufficiale di SvelteKit](https://svelte.dev/docs/kit/adapters) per altri adapter.

## Benchmark Performance

Confronto tempi di installazione dipendenze:

| Runtime | Tempo | Packages |
|---------|-------|----------|
| **Bun** | **3.7s** ⚡ | 160 |
| npm | ~12-15s | 160 |
| pnpm | ~8-10s | 160 |
| yarn | ~10-13s | 160 |

**Bun è 3-4x più veloce!** 🚀

## Componenti del Portfolio

Il portfolio include:

- **Hero Section** - Introduzione con social links e animazione wave
- **About Me** - Presentazione personale e filosofia
- **My Path** - Timeline interattiva del percorso professionale (2019-2025)
- **What I Know** - Grid delle tecnologie e skills
- **Services** - Slider dei servizi offerti (6 totali)
- **Workflow** - Processo di lavoro in 4 step
- **Get in Touch** - Call to action con punti di forza
- **Footer** - Links e informazioni legali
- **Scroll to Top** - Button per tornare su

## Risorse

- [Documentazione SvelteKit](https://svelte.dev/docs/kit)
- [Documentazione TailwindCSS](https://tailwindcss.com/docs)
- [Documentazione TypeScript](https://www.typescriptlang.org/docs/)
- [Documentazione Bun](https://bun.sh/docs)
- [Zig Programming Language](https://ziglang.org/)

## Licenza

Libero da utilizzare per i tuoi progetti.
