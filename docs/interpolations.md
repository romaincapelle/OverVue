# Interpolation

## Interpolate text

### Basic:

#### Input:

<<< @/docs/.vuepress/components/VueInterpolationText.vue{2,8}

#### Output:

<VueInterpolationText />

## v-pre and v-once

#### Input:

<<< @/docs/.vuepress/components/VueInterpolations.vue{3-5,14}

#### Output:

<VueInterpolations />

## Interpolate some JavaScript

You can use simple JS expression:

#### Input:

```
<p> {{ numberOfDalmatians * 2 }}</p>
```

#### Output:

202
