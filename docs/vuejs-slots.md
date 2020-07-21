---
pageClass: vuejs
---

# Slots

## Default Slot

Using slots, the "JS" goes in the parent, the "CSS" goes in the child.

#### Input Parent:

<<< @/docs/.vuepress/components/Slots/MyParentSlot.vue{4-7,15}

#### Input Child:

<<< @/docs/.vuepress/components/Slots/MyChildSlot.vue{3,8-11}

#### Output:

<Slots-MyParentSlot />

## Named Slots

To use several slots, use "named" slots. You can also combine default and named slots.

#### Input Parent:

<<< @/docs/.vuepress/components/Slots/MyParentNamedSlot.vue{4-7,15}

#### Input Child:

<<< @/docs/.vuepress/components/Slots/MyChildNamedSlot.vue{3,8-11}

#### Output:

<Slots-MyParentNamedSlot />

##### [See the official Vue.js doc](https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots)
