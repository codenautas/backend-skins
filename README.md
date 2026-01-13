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