<template>
  <div class="card-container">
    <div class="card" v-for="formula in formulas" :key="formula">
      <p>{{ formula.name }}</p>
      <p>{{ formula.homepage }}</p>
      <p>{{ formula.desc }}</p>
      <p>{{ formula.versions.stable }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  data () {
    return {
      formulas: []
    }
  },
  props: {
    msg: String
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
    async fetchResults () {
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
  border: 1px solid gray
  display: flex
  flex-direction: row
  flex-wrap: wrap
.card-container > *
  flex: 1 1 160px

.card
  border: 1px solid purple
  width: 100px
  margin: 0 20px
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px
</style>
