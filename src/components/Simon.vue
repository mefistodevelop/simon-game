<template>
  <div class="simon">
    <audio ref="blue-sound">
      <source src="../assets/sounds/1.ogg" type="audio/ogg"/>
      <source src="../assets/sounds/1.mp3" type="audio/mpeg"/>
    </audio>
    <audio ref="yellow-sound">
      <source src="../assets/sounds/2.ogg" type="audio/ogg"/>
      <source src="../assets/sounds/2.mp3" type="audio/mpeg"/>
    </audio>
    <audio ref="red-sound">
      <source src="../assets/sounds/3.ogg" type="audio/ogg"/>
      <source src="../assets/sounds/3.mp3" type="audio/mpeg"/>
    </audio> 
    <audio ref="green-sound">
      <source src="../assets/sounds/4.ogg" type="audio/ogg"/>
      <source src="../assets/sounds/4.mp3" type="audio/mpeg"/>
    </audio>
    
    <div class="half-left">
      <div class="quarter top-left" @click="playAudio('blue-sound')"></div>
      <div class="quarter bottom-left" @click="playAudio('red-sound')"></div>
    </div>

    <div class="half-right">
      <div class="quarter top-right" @click="playAudio('yellow-sound')"></div>
      <div class="quarter bottom-right" @click="playAudio('yellow-sound')"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Simon',
    methods: {
      playAudio(ref) {
        this.$refs[ref].play();
      },
    },
  };
</script>

<style lang="scss" scoped>
  $simon-size: 13rem;

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

</style>