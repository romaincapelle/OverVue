---
pageClass: vuejs
---

# Filters

Filters are use to transform output in the template. It does NOT transform the data itself, but transforms what the user sees.

## Local filter

To use filter locally in a component, You define filters in a component’s options. To use that filter you append it to the mustache interpolation or to the v-bind expression.

#### Input:

<<< @/docs/.vuepress/components/Filter/Local.vue{2,12-16}

#### Output:

<Filter-Local />

## Global Filter

You might want to use a filter in several components. To do so, you can set up the filter in the `main.js` file.

<<< @/docs/.vuepress/components/Filter/main.js{4-6}

Then, you can use it in any component.

<<< @/docs/.vuepress/components/Filter/Local.vue{2}

#### Output:

<Filter-Global />

## Chaining Filters

You can chain filters. When you have several filters, the following ones will be applied to the output of the previous filter. Here I am changing the data to uppercase, then reversing it, then changing it to lowercase.

<<< @/docs/.vuepress/components/Filter/Chaining.vue{2,12-32}

#### Output:

<Filter-Chaining />

