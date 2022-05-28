<template>
  <div class="card">
    <p class="formula-name">
      <a :href="formula.homepage"> {{ formula.name }} </a>
    </p>
    <p>{{ formula.desc }}</p>
    <div v-if="formula.urls.stable?.url">
      <p>
        <a :href="formula.urls.stable.url">direct download v {{ formula.versions.stable }}</a>
      </p>
    </div>
    <button @click="copyToClipboard(formula.urls.stable?.url)">
      share url
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Formula } from './types'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Card',
  props: {
    formula: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    async copyToClipboard (url: string) {
      try {
        await navigator.clipboard.writeText(url)
      } catch (error) {
        console.log('Cannot copy', error)
      }
    }
  }
})
</script>

<style scoped lang="sass">
.card
  max-width: 600px // cards shrink to 1px, expand a decent size
  min-width: 200px
  min-height: 200px
  padding: 20px // space around text in the card
  border: 1px solid purple
  border-radius: 2px
  margin: 0 20px
  margin-bottom: 30px
  // box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px

.formula-name
  font-size: 20px
  a
   color: black
   text-decoration: none
</style>
