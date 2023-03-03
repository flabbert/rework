<script setup lang="ts">
defineProps<{
  text: string;
  icon: string;
  vertical?: boolean;
  link?: string | object;
  hideText?: boolean;
  small?: boolean;
}>();

</script>

<template>
  <div
    :class="[
      'flex relative text-inherit justify-center items-center w-fit gap-2',
      { 'flex-col': vertical }
    ]"
  >
    <NuxtIcon :name="icon" class="text-icon text-inherit transition-colors duration-300-ease-out" :class="[{'!text-[1rem]': small}, {'text-[1.5rem]': !small}]" />
    <p v-if="!hideText" class="text-inherit transition-colors duration-300-ease-out" :class="{'text-sm': small}">{{ text }}</p>
    <NuxtLink v-if="link && typeof link === 'string'" :aria-label="text" :to="link" class="text-icon-link absolute inset-0 w-full h-full" />
    <NuxtLink v-else-if="link && typeof link === 'object'" :aria-label="link.name" :to="link.url" :target="link.target" class="text-icon-link absolute inset-0 w-full h-full" />
  </div>
</template>
