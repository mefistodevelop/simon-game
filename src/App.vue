<template>
  <div id="app">
    <h1 class="title">Simon the Game</h1>
    <div class="container">
      <Simon
        :isGame="isStarted"
        :active="activeElement"
        v-on:tap="handleUserClick"
      />
      <Panel
        :round="round"
        :result="result"
        v-on:start="startGame"
        v-model="currentLevel"
      />
    </div>
    <button @click="updateSequence">TEST</button>
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
        sequenceCopy: [],
        round: 0,
        result: 0,
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
        this.sequenceCopy = [];
        this.userSequence = [];
        this.updateSequence();
      },
      stopGame() {
        this.isStarted = false;
        this.result = this.round;
        this.round = 0;
      },
      increaseRound() {
        if (!this.sequence.length) this.round += 1;
      },
      handleUserClick(tap) {
        if (this.sequence[0] === tap) {
          this.sequence.shift(tap);
          this.increaseRound();
          this.updateSequence();
        } else {
          this.stopGame();
        }
        console.log(this.sequence)
      },
      updateSequence() {
        if (this.sequence.length === 0) {
          const tap = Math.floor((Math.random() * 4) + 1);
          const newSequence = [...this.sequenceCopy, tap];

          this.sequence.push(...newSequence);
          this.sequenceCopy.push(tap);
          console.log('sequence' + this.sequence)
        }
        return;
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

