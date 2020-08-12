<template>
  <div id="app">
    <h1 class="title">Simon the Game</h1>
    <div class="container">
      <Simon />
      <Panel v-model="currentLevel" />
    </div>
  </div>
</template>

<script>
  import Simon from './components/Simon';
  import Panel from './components/Panel';

  export default {
    name: 'App',
    components: { Simon, Panel },
    data() {
      return {
        currentLevel: 'easy',
        levels: {
          easy: 1500,
          medium: 1000,
          hard: 400,
        },
      };
    },
    
  }
</script>

<style lang="scss" scoped>
  $simon-size: 13rem;
  #app {
    padding: 2rem;
    max-width: 120rem;
    min-height: 100%;
    background-color: lightblue;
    margin: 0 auto;
  }

  .title {
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
    text-align: center;
  }

  .container {
    display: flex;
    justify-content: space-between;
    max-width: 60rem;
    margin: 0 auto; 
  }

</style>

