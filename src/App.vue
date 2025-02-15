<script setup>
import { useTheme } from 'vuetify';
// import { useDark } from '@vueuse/core';
import { useCommonImports } from '~/common/composables/CommonImports.composable.js';
import AuthLayout from '~/common/layouts/AuthLayout.vue';
import DefaultLayout from '~/common/layouts/DefaultLayout.vue';

const { route } = useCommonImports();
const theme = useTheme();

const isDark = computed(() => theme.global.name.value === 'dark');
const is_layout = computed(() => route?.meta?.layout === 'auth' ? AuthLayout : DefaultLayout);

function setTheme() {
  const html = document.getElementsByTagName('html')[0];

  if (isDark.value) {
    html.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  }
  else {
    html.removeAttribute('data-theme');
    document.documentElement.classList.remove('dark');
  }
}

onMounted(() => setTheme());

watch(isDark, (newValue, oldValue) => {
  if (newValue !== oldValue)
    setTheme();
}, { immediate: false });
</script>

<template>
  <component :is="is_layout" />
</template>
