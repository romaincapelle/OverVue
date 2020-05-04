# Conditionals

## Conditional v-if/v-else

#### Input:

<<< @/docs/.vuepress/components/Conditional/Data.vue{11-14,22}

#### Output:

<Conditional-Data />

## Conditional using a template

#### Input:

<<< @/docs/.vuepress/components/Conditional/Template.vue{11-15,23}

#### Output:

<Conditional-Template />

## Conditional using v-show

#### Input:

<<< @/docs/.vuepress/components/Conditional/Vshow.vue{12,20}

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
