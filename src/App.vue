<template>
  <div id="app">
    <h1 class="title">Simon the Game</h1>
    <div class="container">
      <div class="simon">
        <audio ref="blue-sound">
          <source src="./assets/sounds/1.ogg" type="audio/ogg"/>
          <source src="./assets/sounds/1.mp3" type="audio/mpeg"/>
        </audio>
        <audio ref="red-sound">
          <source src="./assets/sounds/2.ogg" type="audio/ogg"/>
          <source src="./assets/sounds/2.mp3" type="audio/mpeg"/>
        </audio>
        <audio ref="yellow-sound">
          <source src="./assets/sounds/3.ogg" type="audio/ogg"/>
          <source src="./assets/sounds/3.mp3" type="audio/mpeg"/>
        </audio>
        <audio ref="green-sound">
          <source src="./assets/sounds/4.ogg" type="audio/ogg"/>
          <source src="./assets/sounds/4.mp3" type="audio/mpeg"/>
        </audio>
        <div class="half-left">
          <div class="quarter top-left" @click="playAudio('blue-sound')"></div>
          <div class="quarter bottom-left" @click="playAudio('red-sound')"></div>
        </div>

        <div class="half-right">
          <div class="quarter top-right" @click="playAudio('yellow-sound')"></div>
          <div class="quarter bottom-right" @click="playAudio('green-sound')"></div>
        </div>
      </div>

      <div class="info-wrapper">
        <div class="info">
          <h2 class="subtitle">Round: 1</h2>
          <button class="button">Start</button>
          <span class="status">You lost after 100 round</span>
        </div>

        <div class="options">
          <h2 class="subtitle">Game options</h2>
          <ul class="level-list">
            <li class="level">easy</li>
            <li class="level">medium</li>
            <li class="level">hard</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    playAudio(ref) {
      this.$refs[ref].play();
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

  .simon {
    display: flex;
  }

  .quarter {
    width: $simon-size;
    height: $simon-size;
  }

  .top {
    &-left {
      background-color: rgba(0, 0, 255, .5);
      border-radius: $simon-size 0 0 0;

      &:hover {
        box-shadow: -2px -2px 1px 1px rgb(156, 156, 156);
      }

      &:active {
        background-color: #0000ff;
      }
    }

    &-right {
      background-color: rgba(255, 0, 0, .5);
      border-radius: 0 $simon-size 0 0;

      &:hover {
        box-shadow: 2px -2px 1px 1px rgb(156, 156, 156);
      }

      &:active {
        background-color: #ff0000;
      }
    }
  }

  .bottom {
    &-left {
      background-color: rgba(251, 255, 0, 0.5);
      border-radius: 0 0 0 $simon-size;

      &:hover {
        box-shadow: -2px 2px 1px 1px rgb(156, 156, 156);
      }

      &:active {
        background-color: #ffff00;
      }
    }

    &-right {
      background-color: rgba(0, 255, 0, .5);
      border-radius: 0 0 $simon-size 0;

      &:hover {
        box-shadow: 2px 2px 1px 1px rgb(156, 156, 156);
      }

      &:active {
        background-color: #00ff00;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 25rem;
    height: 15rem;
    background-color: #fff;
  }

  .subtitle {
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 10rem;
    height: 4rem;

    border: none;
    border-radius: 1rem;
    background-color: #77ff55;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
  }

  .status {
    font-size: 1.6rem;
  }


  .options {
    width: 15rem;
    background-color: lightgreen;
  }

  .level-list {
    list-style: none;
  }

  .level:not(:last-child) {
    margin-bottom: 2rem;
  }
</style>

