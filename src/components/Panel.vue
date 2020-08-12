<template>
  <div class="panel">
    <div class="info">
      <h2 class="subtitle">Round: 1</h2>
      <button class="button">Start</button>
      <span class="status">You lost after 100 round</span>
    </div>

    <div class="options">
      <h2 class="subtitle">Game options</h2>
      <ul class="level-list">
        <li class="level">
          <label>
            <input
              type="radio"
              name="level"
              v-model="inputValue"
              value="easy"
            >
            easy
          </label>
        </li>
        <li class="level">
          <label>
            <input
              type="radio"
              name="level"
              v-model="inputValue"
              value="medium"
            >
            medium
          </label>
        </li>
        <li class="level">
          <label>
            <input
              type="radio"
              name="level"
              v-model="inputValue"
              value="hard"
            >
            hard
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Panel',
    data() {
      return {
        pickedLevel: 'easy',
      };
    },
    props: {
      value: {
        type: String,
        default: 'easy'
      },
    },
    computed: {
      inputValue: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit('input', value);
        },
      },
    },
  };
</script>

<style lang="scss" scoped>

  .panel {
    max-width: 25rem;
    background-color: #fff;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;
    height: 15rem;
  }

  .subtitle {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    text-align: center;
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

  .level-list {
    list-style: none;
  }

  .level:not(:last-child) {
    margin-bottom: 2rem;
  }

</style>