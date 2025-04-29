<template>
  <v-btn
    :color="color"
    :variant="variant"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    @click="$emit('click')"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  color?: string;
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  disabled?: boolean;
  loading?: boolean;
}>();

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style scoped>
.v-btn {
  text-transform: none;
}
</style> 