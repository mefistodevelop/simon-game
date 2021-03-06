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
        colors: ['blue', 'yellow', 'red', 'green'],
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
        this.result = 0;
        this.sequence = [];
        this.sequenceCopy = [];
        this.updateSequence();
      },

      stopGame() {
        this.isStarted = false;
        this.result = this.round;
        this.round = 0;
      },

      increaseRound() {
        if (this.sequence.length === 0) this.round += 1;
      },

      handleUserClick(element) {
        if (this.sequence[0] === element) {
          this.sequence.shift(element);
          this.increaseRound();
          this.updateSequence();
        } else {
          this.stopGame();
        }
      },

      updateSequence() {
        if (this.sequence.length === 0) {
          // delay between the last user click and
          // the first flash of the next sequence
          const delayTime = this.sequenceCopy.length ? this.levels[this.currentLevel] : 0;

          setTimeout(() => {
            const newElement = Math.floor((Math.random() * 4) + 1);
            const newSequence = [...this.sequenceCopy, newElement];

            this.sequence.push(...newSequence);
            this.sequenceCopy.push(newElement);
            this.playSequence();
          }, delayTime);
        }
        return;
      },

      delay() {
        // delay between sequnce flashes
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, this.levels[this.currentLevel]);
        });
      },

      async playSequence() {
        for(const element of this.sequence) {
          if (!this.isStarted) return;
          this.activeElement = this.colors[element - 1];

          // duration of the flash
          setTimeout(() => this.activeElement = '', 300);

          await this.delay();
        } 
      },
    },
  }
</script>

<style lang="scss" scoped>
  #app {
    padding: 2rem;
    max-width: 120rem;
    min-height: 100%;
    margin: 0 auto;
  }

  .title {
    margin: 0;
    padding: 0;
    margin-bottom: 5rem;
    text-align: center;

    @media (min-width: 462px) {
      margin-bottom: 10rem;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 60rem;
    margin: 0 auto; 

    @media (min-width: 462px) {
      justify-content: space-between;
    }
  }
</style>

