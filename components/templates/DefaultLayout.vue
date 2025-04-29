<template>
  <v-app>
    <v-app-bar :elevation="2">
      <v-app-bar-title>Twinspeak UI</v-app-bar-title>
      <v-spacer />
      <v-btn
        v-if="!isLoggedIn"
        color="primary"
        variant="text"
        to="/login"
      >
        Login
      </v-btn>
      <v-btn
        v-else
        color="primary"
        variant="text"
        @click="handleLogout"
      >
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-footer
      app
      :elevation="2"
    >
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            class="text-center"
          >
            © {{ new Date().getFullYear() }} Twinspeak UI
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import { computed } from 'vue';

const authStore = useAuthStore();
const isLoggedIn = computed(() => authStore.isLoggedIn);

const handleLogout = () => {
  authStore.logout();
  navigateTo('/login');
};
</script> 