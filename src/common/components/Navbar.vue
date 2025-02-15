<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark', theme.global.current.value.dark);
}
</script>

<template>
  <div class="flex items-center justify-between shadow px-4 py-3  dark:bg-gray-900">
    <div>
      Starter Kit
    </div>
    <v-btn @click="toggleTheme">
      toggle theme
    </v-btn>
  </div>
</template>
