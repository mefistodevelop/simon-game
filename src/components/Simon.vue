<template>
  <div class="simon">
    {{ active ? setActive(active) : setActive('') }}

    <div class="half-left">
      <div 
        class="quarter top-left"
        :class="{'top-left_flashed': activeElement === 'blue'}"
        @click="handleClick(1, 'blue')"
      >
        {{ activeElement === 'blue' ? playAudio(sounds.blue) : '' }}
      </div>
      <div 
        class="quarter bottom-left"
        :class="{'bottom-left_flashed': activeElement === 'yellow'}"
        @click="handleClick(2, 'yellow')"
      >
        {{ activeElement === 'yellow' ? playAudio(sounds.yellow) : '' }}
      </div>
    </div>

    <div class="half-right">
      <div 
        class="quarter top-right"
        :class="{'top-right_flashed': activeElement === 'red'}"
        @click="handleClick(3, 'red')"
      >
        {{ activeElement === 'red' ? playAudio(sounds.red) : '' }}
      </div>
      <div 
        class="quarter bottom-right"
        :class="{'bottom-right_flashed': activeElement === 'green'}"
        @click="handleClick(4, 'green')"
      >
        {{ activeElement === 'green' ? playAudio(sounds.green) : '' }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Simon',
    data() {
      return {
        activeElement: '',
        sounds: {
          red: require('../assets/sounds/1.mp3'),
          blue: require('../assets/sounds/2.mp3'),
          yellow: require('../assets/sounds/3.mp3'),
          green: require('../assets/sounds/4.mp3'),
        },
      };
    },
    methods: {
      playAudio(src) {
        const audio = new Audio(src);
        audio.play();
      },

      handleClick(number, color) {
        if (this.isGame) {
          this.$emit('tap', number);
          this.playAudio(this.sounds[color]);
        }
        return;
      },

      setActive(element) {
        this.activeElement = element;
      }
    },
    props: {
      active: {
        type: String,
        default: '',
      },
      isGame: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  $simon-size: 13rem;
  $active-blue: #0000ff;
  $active-red: #ff0000;
  $active-yellow: #ffff00;
  $active-green: #00ff00;

  .simon {
    display: flex;
    margin-bottom: 2rem;
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
        background-color: $active-blue;
      }

      &_flashed {
        background-color: $active-blue;
      }
    }

    &-right {
      background-color: rgba(255, 0, 0, .5);
      border-radius: 0 $simon-size 0 0;

      &:hover {
        box-shadow: 2px -2px 1px 1px rgb(156, 156, 156);
      }

      &:active {
        background-color: $active-red;
      }

      &_flashed {
        background-color: $active-red;
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
        background-color: $active-yellow;
      }

      &_flashed {
        background-color: $active-yellow;
      }
    }

    &-right {
      background-color: rgba(0, 255, 0, .5);
      border-radius: 0 0 $simon-size 0;

      &:hover {
        box-shadow: 2px 2px 1px 1px rgb(156, 156, 156);
      }

      &:active {
        background-color: $active-green;
      }

      &_flashed {
        background-color: $active-green;
      }
    }
  }
</style>