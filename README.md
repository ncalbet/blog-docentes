# blog-docentes (nom provisional)

Blog en castellà sobre IA i educació amb mirada crítica, per a docents de LatAm.
Part de la capa d'ADQUISICIÓ del negoci EdTech (model 3 capes).

- **Motor:** Jekyll natiu de GitHub Pages (zero build config).
- **Publicació:** els articles surten del pipeline de producció (`Agents/Pipeline/`),
  passen la revisió humana única, i es publiquen aquí via `publish.js` (pendent de construir, fase 2).
- **RSS:** `jekyll-feed` genera `/feed.xml` automàticament.
- **Newsletter:** Brevo, quinzenal, esborrany generat post-publicació (fase 4).

## Estructura

| Fitxer | Funció |
|---|---|
| `_config.yml` | Config del site (títol provisional, permalinks, plugins) |
| `_layouts/default.html` | Layout base (header, nav, footer) |
| `_layouts/post.html` | Layout d'article (data en castellà) |
| `_posts/` | Articles publicats (`YYYY-MM-DD-slug.md`) |
| `index.html` | Portada amb llista d'articles |
| `sobre.md` | Pàgina "Sobre este blog" |
| `assets/css/style.css` | Estils (serif per a lectura, accent verd fosc) |

## Pendents

- [ ] Nom definitiu de marca + domini propi (canviar `title`, `url`, `baseurl`)
- [ ] Text definitiu de `sobre.md`
- [ ] Formulari de subscripció Brevo al footer i a `sobre.md`
- [ ] `publish.js` (fase 2): article validat → post + log anti-duplicació
