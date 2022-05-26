<template>
  <div class="card">
    <p>{{ formula.name }}</p>
    <p>{{ formula.homepage }}</p>
    <p>{{ formula.desc }}</p>
    <p>{{ formula.versions.stable }}</p>
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
  }
})
</script>

<style scoped lang="sass">
.card
  border: 1px solid purple
  border-radius: 2px
  width: 100px
  margin: 0 20px
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px
</style>
