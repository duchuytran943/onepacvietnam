<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="increaseCounter">Increase</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
      this.$eventBus.$emit('increaseCounter', this.counter);
    },
  },
};
</script>
