<template>
  <div class="panel">
    <div class="info">
      <h2 class="subtitle">Round: {{ round }}</h2>
      <button
        type="button"
        class="button"
        @click="$emit('start')"
        >
          Start
        </button>
      <span
        class="status"
        v-show="result"
        >
          You lost after {{ result }} rounds
        </span>
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
      };
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      round: {
        type: Number,
        default: 0,
      },
      result: {
        type: Number,
        default: 0,
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

    margin-bottom: 2rem;
    height: 15rem;
  }

  .subtitle {
    margin: 0;
    margin-bottom: 2rem;
    padding: 0;
    font-size: 2rem;
    text-align: center;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 2rem;
    width: 10rem;
    height: 4rem;

    border: none;
    border-radius: 1rem;
    background-color: #77ff55;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
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