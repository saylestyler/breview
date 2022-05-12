<template>
  <div class="hello">
    {{ formulas }}
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
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
