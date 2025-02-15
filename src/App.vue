<script setup>
import { useDark } from '@vueuse/core';
// import { computed, onMounted, watch } from 'vue';
import { useCommonImports } from '~/common/composables/CommonImports.composable.js';
import AuthLayout from '~/common/layouts/AuthLayout.vue';
import DefaultLayout from '~/common/layouts/DefaultLayout.vue';

const { route } = useCommonImports();
const isDark = useDark();

const is_layout = computed(() => route?.meta?.layout === 'auth' ? AuthLayout : DefaultLayout);

function setTheme() {
  const html = document.getElementsByTagName('html')[0];

  isDark.value
    ? html.setAttribute('data-theme', 'dark')
    : html.removeAttribute('data-theme'); ;
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
