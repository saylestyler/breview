<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <CardContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardContainer from './components/CardContainer.vue'

export default defineComponent({
  name: 'App',
  components: {
    CardContainer
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
