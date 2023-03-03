<script setup lang="ts">
import { defineProps, computed } from 'vue'; // for testing purposes
const props = defineProps<{
  link?: string;
  dark: boolean;
}>();

const logoVariant = computed(() => {
  if (props.dark) {
    return '/images/aimpoint-dark.svg';
  }
  return '/images/aimpoint-light.svg';
});
</script>

<template>
  <BaseLink v-if="link" :to="link" class="header_link cursor-pointer">
    <NuxtImg class="logo" :src="logoVariant" />
  </BaseLink>
  <div v-else>
    <NuxtImg class="logo" :src="logoVariant" />
  </div>
</template>
