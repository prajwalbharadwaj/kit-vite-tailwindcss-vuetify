<script setup>
// function setTheme() {
//   if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
//     document.documentElement.classList.add('dark');

//   else
//     document.documentElement.classList.remove('dark');
// }

// const current_theme = computed(() => {
//   return localStorage.getItem('theme') || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
// });

// onMounted(() => {
//   setTheme();
// });
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex items-center justify-between shadow px-4 py-3 bg-white dark:bg-gray-900">
    <div>
      Starter Kit
    </div>
    <div @click="toggleDark()">
      Change theme
    </div>
  </div>
</template>
