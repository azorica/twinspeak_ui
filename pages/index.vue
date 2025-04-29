<template>
  <div class="home">
    <h1>Welcome to Twinspeak</h1>
    <p>This is your dashboard. More features coming soon!</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'authenticated'
})
</script>

<style scoped>
.home {
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #666;
}
</style> 