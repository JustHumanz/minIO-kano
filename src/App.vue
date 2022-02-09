<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <b-navbar-brand href="#"><img src="./assets/mahoro.png" alt="Kanochi" width="42" height="42"> Mahoro Kanochi</b-navbar-brand> 

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="https://www.youtube.com/channel/UCfuz6xYbYFGsWWBi3SpJI1w" target="_blank" rel="noopener noreferrer">Youtube</b-nav-item> <!-- subscribe coek -->
        <b-nav-item href="https://twitter.com/kanomahoro" target="_blank" rel="noopener noreferrer">Twitter</b-nav-item> 
        <b-nav-item href="https://space.bilibili.com/316381099" target="_blank" rel="noopener noreferrer">BiliBili</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </nav>    
    <KanoSekai/>
  </div>
</template>


<style>
#app {
  min-height: 75rem;
  padding-top: 4.5rem;
}
</style>


<script>
import KanoSekai from './components/KanoSekai.vue'
export default {
  name: 'App',
  components: {
    KanoSekai
  }
}
</script>
