# CLI

## Commandes de base de Vue CLI

Créer un projet

```shell
vue create hello-world
```

Si vous préférez une interface graphique:

```shell
vue ui
```

---

Installer des dépendances

```shell
npm install
```

---

Compiler + hot-reload pour les développements

```shell
npm run serve
```

---

Compiler et minifier pour la production

```shell
npm run build
```

"Linter" et corriger les fichiers

```shell
npm run lint
```

[Configuration personnalisée](https://cli.vuejs.org/config/).



## Prototypage "instantané"

Où comment "Inspecter un composant". Il est facile de générer l'aperçu d'un composant en utilisant vue serve.
Pour installer de manière globale vue-cli-service, tapez la commande `npm install -g @vue/cli-service-global`

Puis pour générer un seul fichier tapez la commande:

```Shell
vue serve MyComponent.vue
```
