---
pageClass: vuejs
---

# Forms / v-model & 2-Way Binding

## Basic input

Use v-model for two-way binding in forms.

`v-model="something"`

is like using the combination of:

`v-bind:value="something" v-on:input="something = $event.target.value"`

#### Input:

<<< @/docs/.vuepress/components/Forms/Basic.vue{5,16}

#### Output:

<Forms-Basic />

## Form Data as an object

#### Input:

<<< @/docs/.vuepress/components/Forms/DataAsObject.vue{4,6,15-18}

#### Output:

<Forms-DataAsObject />

## Text Area

What will work is to bind the message with v-model.
Line breaks are taken into account but not automatically rendered.
You can render line break by using some css.

#### Input:

<<< @/docs/.vuepress/components/Forms/TextArea.vue{5,7,16-18}

#### Output:

<Forms-TextArea />

## Checkbox

The Key to save data from a checkboxes into one array, is to use the same v-model on the input and Vue will bind them into an array.

#### Input:

<<< @/docs/.vuepress/components/Forms/Checkboxes.vue{5,7,9,13,22}

#### Output:

<Forms-Checkboxes />

## Radio Buttons

To save data from radio buttons, use the same v-model on the input.

#### Input:

<<< @/docs/.vuepress/components/Forms/RadioButtons.vue{5,7,9,22}

#### Output:

<Forms-RadioButtons />

## Select / Dropdown

#### Input:

<<< @/docs/.vuepress/components/Forms/SelectDropdown.vue{5-9,18-23}

#### Output:

<Forms-SelectDropdown />

## Using modifiers

There are three different modifier in Vue 2.x

### Waiting to complete an input

Use .lazy on v-model to update only when focusing outside of that input

#### Input:

<<< @/docs/.vuepress/components/Forms/LazyModifier.vue{8}

#### Output:

<Forms-LazyModifier />

### Convert input to number

Use .number on v-model to "make sure" the input is of type "number"

#### Input:

<<< @/docs/.vuepress/components/Forms/NumberModifier.vue{7}

#### Output:

<Forms-NumberModifier />

### Trim the input

Use .trim to prevent user to input double or triple white space.

#### Input:

<<< @/docs/.vuepress/components/Forms/TrimModifier.vue{7}

#### Output:

<Forms-TrimModifier />

## Custom input in forms

#### Input (Parent Component / Form)

<<< @/docs/.vuepress/components/MyParentSwitch.vue{8,16}

#### Input (Child Component/ Custom input)

<<< @/docs/.vuepress/components/SwitchComponent.vue{3-4,10,12-14}

#### Output:

<myParentSwitch />

##### [See the official Vue.js doc](https://vuejs.org/v2/guide/forms.html)

## Submit a form

Use `.prevent` for the submit event to no longer reload the page. (It's an [event modifiers](/vuejs-events))

#### Input

<<< @/docs/.vuepress/components/Forms/Submit.vue{5,20-22}

#### Output:

<Forms-Submit />
