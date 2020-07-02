# Conditional / v-if

## Conditional v-if/v-else

Using "v-if, v-else-if, v-else", the false ones will be "rendered out" of the DOM entirely.

#### Input:

<<< @/docs/.vuepress/components/Conditional/Data.vue{11-14,22}

#### Output:

<Conditional-Data />

## Conditional using a template

Use v-if on a template, it won't be rendered as a div that isn't necessarily needed.

#### Input:

<<< @/docs/.vuepress/components/Conditional/Template.vue{11-15,23}

#### Output:

<Conditional-Template />

## Conditional using v-show

Use V-Show to keep data in the DOM with a "display:none"

#### Input:

<<< @/docs/.vuepress/components/Conditional/Vshow.vue{11-12,20}

::: tip
Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.
:::

#### Output:

<Conditional-Vshow />

## Conditional with JS in template

#### Input:

<<< @/docs/.vuepress/components/Conditional/Js.vue{5}

#### Output:

<Conditional-Js />

##### [See the official Vue.js doc](https://vuejs.org/v2/guide/conditional.html)
