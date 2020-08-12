<template>
  <div id="app">
    <h1 class="title">Simon the Game</h1>
    <div class="container">
      <Simon :active="activeElement" v-on:tap="updateUserSequence" />
      <Panel
        :round="round"
        v-on:start="startGame"
        v-model="currentLevel"
      />
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
        isStarted: false,
        sequence: [],
        userSequence: [],
        round: 0,
        currentLevel: 'easy',
        activeElement: '',
        levels: {
          easy: 1500,
          medium: 1000,
          hard: 400,
        },
      };
    },
    methods: {
      startGame() {
        this.isStarted = true;
        this.round = 1;
        this.sequence = [];
        this.userSequence = [];
      },
      updateUserSequence(tap) {
        this.userSequence.push(tap);
      },
    },
  }
</script>

<style lang="scss" scoped>
  $simon-size: 13rem;
  #app {
    padding: 2rem;
    max-width: 120rem;
    min-height: 100%;
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

