<template>
  <div class="login-page">
    <LoginForm />
  </div>
</template>

<script setup>
// No need for definePageMeta here since we're using the default layout
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}
</style> 