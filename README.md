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
| `_layouts/tema.html` | Layout de la pàgina d'un tema (nom i lema surten de `_data/temas.yml`) |
| `_includes/mesa-mark.html` | Motiu de marca "mesa redona" (SVG, hereta currentColor) |
| `_includes/newsletter.html` | Bloc de subscripció reutilitzable — **conté el hueco per al form de Brevo** |
| `_includes/post-item.html` | Una entrada de la llista d'articles (arxiu i pàgines de tema) |
| `_includes/temas-chips.html` | Fila d'enllaços als cinc temes; `except=<slug>` n'exclou un |
| `_data/temas.yml` | **Font única dels cinc temes** (slug, nom, lema). El `slug` = `category:` del post |
| `_posts/` | Articles publicats (`YYYY-MM-DD-slug.md`) |
| `index.html` | Portada: destacat + 3 articles breus + temes + subscripció |
| `blog.md` | `/blog/` — arxiu complet, agrupat per any, amb filtre per tema |
| `temas/index.md` | `/temas/` — els cinc hilos com a targetes |
| `temas/<slug>.md` | `/temas/<slug>/` — un fitxer per tema, només front matter (5 en total) |
| `sobre.md` | Pàgina "Sobre este blog" |
| `seguir.md` | Pàgina "Seguir" (correu i RSS) |
| `assets/css/style.css` | Estils (Source Serif 4 + Archivo; verd profund + terracota; clar/fosc; AA) |
| `assets/js/theme.js` | Toggle clar/fosc (millora progressiva; sense JS mana `prefers-color-scheme`) |

**Navegació (2026-08-11):** `Inicio · Blog · Temas · Sobre · Seguir`. La portada és
aparador (destacat + 3 breus), l'arxiu complet viu a `/blog/`, i cada tema té URL
pròpia. **Per afegir un tema nou cal tocar dos llocs:** una entrada a `_data/temas.yml`
i un fitxer `temas/<slug>.md` (6 línies, copia'n un existent). Si falta el segon, el
tema surt a les llistes però el seu enllaç dona 404.

**Disseny (2026-07-16):** identitat completa "Mesa Docente" — editorial, no SaaS; verd profund de marca + accent terracota; serif de lectura (Source Serif 4) + sans d'UI (Archivo, via Google Fonts); motiu de mesa redona; modes clar/fosc; accessible AA. Per a un article amb aparat acadèmic (cites `[n]` + Referencias amb DOI), veure el patró HTML a `Web/MesaDocente/_posts/…quien-responde…md` (mostra de disseny, NO publicada).

## Pendents

- [x] Nom definitiu de marca + domini propi → **Mesa Docente** / `mesadocente.com`
- [x] `publish.js` (fase 2): article validat → post + log anti-duplicació
- [x] DNS + domini propi + HTTPS (Nominalia, resolt 2026-07-16)
- [x] Disseny complet de la web (identitat "Mesa Docente")
- [ ] Personalitzar `sobre.md` (text i retrat reals; ara hi ha bon esborrany + placeholder de retrat)
- [ ] Enganxar el form embed de Brevo a `_includes/newsletter.html` (fase 3)
