<template>
  <div class="card-container">
    <div v-for="formula in formulas" :key="formula">
      <Card :formula="formula" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './Card.vue'

export default defineComponent({
  name: 'CardContainer',
  components: {
    Card
  },
  data () {
    return {
      formulas: []
    }
  },
  methods: {
    getRange (data: [], count: number): [] {
      const res: any = []
      if (Array.isArray(data)) {
        for (let i = 0; i <= count; i++) {
          res.push(data[i])
        }
      }
      return res
    },
    async fetchResults (): Promise<void> {
      const res = await fetch('https://formulae.brew.sh/api/formula.json')
      const resJson = await res.json()

      this.formulas = this.getRange(resJson, 10)
    }
  },
  mounted () {
    this.fetchResults()
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.card-container
  max-width: 1000px
  border: 1px solid gray
  display: flex
  flex-direction: row
  flex-wrap: wrap
.card-container > *
  flex: 1 1 160px
</style>
