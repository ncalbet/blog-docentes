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
| `_layouts/default.html` | Layout base (header, nav, footer) |
| `_layouts/post.html` | Layout d'article (data en castellà) |
| `_posts/` | Articles publicats (`YYYY-MM-DD-slug.md`) |
| `index.html` | Portada amb llista d'articles |
| `sobre.md` | Pàgina "Sobre este blog" |
| `assets/css/style.css` | Estils (serif per a lectura, accent verd fosc) |

## Pendents

- [x] Nom definitiu de marca + domini propi → **Mesa Docente** / `mesadocente.com`
- [x] `publish.js` (fase 2): article validat → post + log anti-duplicació
- [ ] Configurar DNS del domini + GitHub Pages custom domain + Enforce HTTPS
- [ ] Text definitiu de `sobre.md` (ara hi ha un esborrany orientatiu)
- [ ] Formulari de subscripció Brevo al footer i a `sobre.md` (fases 3-4)
