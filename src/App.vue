<script setup>
import { computed } from 'vue';
import DefaultLayout from '~/common/layouts/DefaultLayout.vue';
import AuthLayout from '~/common/layouts/AuthLayout.vue';

import { useCommonImports } from '~/common/composables/CommonImports.composable.js';

const { route } = useCommonImports();

const layout = computed(() => {
  if (route?.meta?.layout === 'auth')
    return AuthLayout;
  else
    return DefaultLayout;
});
</script>

<template>
  <component :is="layout" />
</template>