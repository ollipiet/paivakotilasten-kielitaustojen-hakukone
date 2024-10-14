<script setup>
import { ref } from 'vue'

const textstring = 'Hello World'
const message = ref('')
</script>

<template>
  <div>
    <textarea v-model="message" :placeholder="textstring" />
  </div>
</template>

<style scoped>

</style>
