import { defineStore } from 'pinia';

interface User {
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false,
  }),

  getters: {
    currentUser: (state) => state.user,
    isLoggedIn: (state) => state.isAuthenticated,
  },

  actions: {
    async login(email: string, password: string) {
      // Mock authentication
      if (email === 'ante@gostudion.com' && password === 'Ante123+') {
        this.user = {
          email: 'ante@gostudion.com',
          name: 'Ante'
        }
        this.isAuthenticated = true
        return true
      }
      return false
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
}); 