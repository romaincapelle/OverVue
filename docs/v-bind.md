# Bind an HTML attribute / v-bind

Use "v-bind" ( or just ":") to bind an html any attribute like "src", "href"...

## Bind an image

To bind an image in a vue template, use `v-bind:src` or the shortcut `:src`

#### Input:

<<< @/docs/.vuepress/components/Directive/Vbind.vue{2,8}

---

::: tip Shorthand
Use :src instead of v-bind:src
:::

#### Output:

<Directive-Vbind />

##### [See the official Vue.js doc](https://vuejs.org/v2/guide/syntax.html#Arguments)

## Bind a link href

To bind a link in a vue template, use `v-bind:href` or the shortcut `:href`

#### Input:

<<< @/docs/.vuepress/components/Directive/Links.vue{3,10}

#### Output:

<Directive-Links />

::: warning
To link to a different "page" of the SPA, <ins>[use Vue Router](/router)</ins>
:::

##### [See the official Vue.js doc](uuuuuuuuu)
