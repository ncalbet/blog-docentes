# Mesa Docente

Blog en castellà sobre IA i educació amb mirada crítica, per a docents de LatAm.
Marca: **Mesa Docente** — company expert entre companys, mai gurú (registre horitzontal).
Domini: `mesadocente.com` (apex). Part de la capa d'ADQUISICIÓ del negoci EdTech (model 3 capes).

- **Motor:** Jekyll natiu de GitHub Pages (zero build config).
- **Publicació:** els articles surten del pipeline de producció (`Agents/Pipeline/`),
  passen la revisió humana única, i es publiquen aquí via `publish.js` (fet).
- **RSS:** `jekyll-feed` genera `/feed.xml` automàticament.
- **Newsletter:** Brevo, quinzenal, esborrany generat post-publicació (fase 4).

## Estructura

| Fitxer | Funció |
|---|---|
| `_config.yml` | Config del site (títol, url/baseurl, permalinks, plugins) |
| `CNAME` | Domini propi per a GitHub Pages (`mesadocente.com`) |
| `_layouts/default.html` | Layout base (header, nav, footer, toggle mode fosc) |
| `_layouts/post.html` | Layout d'article (data en castellà, temps de lectura, byline) |
| `_includes/mesa-mark.html` | Motiu de marca "mesa redona" (SVG, hereta currentColor) |
| `_includes/newsletter.html` | Bloc de subscripció reutilitzable — **conté el hueco per al form de Brevo** |
| `_posts/` | Articles publicats (`YYYY-MM-DD-slug.md`) |
| `index.html` | Portada amb llista d'articles + empty-state |
| `sobre.md` | Pàgina "Sobre este blog" |
| `assets/css/style.css` | Estils (Source Serif 4 + Archivo; verd profund + terracota; clar/fosc; AA) |
| `assets/js/theme.js` | Toggle clar/fosc (millora progressiva; sense JS mana `prefers-color-scheme`) |

**Disseny (2026-07-16):** identitat completa "Mesa Docente" — editorial, no SaaS; verd profund de marca + accent terracota; serif de lectura (Source Serif 4) + sans d'UI (Archivo, via Google Fonts); motiu de mesa redona; modes clar/fosc; accessible AA. Per a un article amb aparat acadèmic (cites `[n]` + Referencias amb DOI), veure el patró HTML a `Web/MesaDocente/_posts/…quien-responde…md` (mostra de disseny, NO publicada).

## Pendents

- [x] Nom definitiu de marca + domini propi → **Mesa Docente** / `mesadocente.com`
- [x] `publish.js` (fase 2): article validat → post + log anti-duplicació
- [x] DNS + domini propi + HTTPS (Nominalia, resolt 2026-07-16)
- [x] Disseny complet de la web (identitat "Mesa Docente")
- [ ] Personalitzar `sobre.md` (text i retrat reals; ara hi ha bon esborrany + placeholder de retrat)
- [ ] Enganxar el form embed de Brevo a `_includes/newsletter.html` (fase 3)
