<template>
  <div id="app">
    <Header/>
    <router-view :key="$route.path + $route.query.t"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-width: 1280px;
}

body {
  margin: 0px;
}
</style>
