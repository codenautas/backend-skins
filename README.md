# backend-skins
Skins for backend-plus

# Adding a skin

Create a folder in dist. CSS files go in the folder css and icon images go in the folder img. For password change and login screens, the same applies inside the folder unlogged.

Add the folder name to the local config of your backed-plus application

```
server:
    skins:
        modern:
        local-path: node_modules/backend-skins/dist/
```

In your backend-plus application local config, set the desired skin

```
client-setup:
  skin: modern
```

# Button styles
In the modern skin, elements are automatically colored via the attribute 'color'. The possible values are 'primary', 'secondary', 'success', 'warning', and 'danger'.
Additionally, the element can be outlined by adding the attribute outline=true.

For example, when using the dialog-promise library, the buttons can be configured as follows:
```js
confirmPromise("Confirm prompt", {
    buttonsDef:[
        {label:'Accept', value:true, attributes: { color: 'primary', }},
        {label:'Cancel', value:false, attributes: { color: 'secondary', outline: true, }},
    ]
})
```

## Publicación

Se publica en npm desde GitHub Actions (`.github/workflows/publish.yml`), igual que backend-plus y dmencu. No hacer `npm publish` local.

```bash
npm test                   # compila todos los .styl de dist/
npm version patch          # sube package.json, hace el commit y crea el tag vX.Y.Z
git push --follow-tags     # el push del tag dispara el workflow
```

Requisito (una sola vez): el paquete `backend-skins` en npmjs.com necesita un *Trusted publisher* para GitHub Actions con organización `codenautas`, repositorio `backend-skins` y workflow `publish.yml`.
