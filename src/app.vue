<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Ref } from 'vue';
import { useLayout } from './stores/layout';

const layoutStore = useLayout();
const { scrollLockEnabled } = storeToRefs(layoutStore);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let scrollControl: any | Ref<any>;
watch(
  () => scrollLockEnabled.value,
  (value) => {
    if (scrollControl) {
      scrollControl.value = value;
    }
  }
);

onMounted(() => {
  try {
    const bodyElement = ref<HTMLElement | null>(null);
    bodyElement.value = document.body;
    scrollControl = useScrollLock(bodyElement);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to setup scroll lock feature.', error);
  }
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
