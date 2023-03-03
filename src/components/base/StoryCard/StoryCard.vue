<script setup lang="ts">
import { Link } from '@/types';

defineProps<{
  title: any;
  link: Link;
  category?: string;
  image: string;
}>();
</script>

<template>
  <article class="relative flex flex-col justify-between text-white bg-brown group aspect-[3/4] overflow-hidden w-full max-w-[400px]" :title="title && title">
    <div class="relative z-10 p-4">
      <BaseTag v-if="category" :title="category" data-test="tag" />
    </div>

    <div
      :class="[
        'relative z-10 grid gap-6 px-6 pb-6',
        'md:px-10 md:pb-10'
      ]"
    >
      <h2 v-if="title" class="max-w-[200px] text-h4 leading-5">{{ title }}</h2>
      <BaseArrowButton variant="tertiary" />
    </div>

    <figure v-if="image" class="absolute inset-0 object-cover w-full h-full overflow-hidden">
      <BaseImage
        data-test="image"
        :src="image"
        alt=""
        loading="lazy"
        format="webp"
        :class="[
          'object-cover w-full h-full',
          'transition-all duration-300',
          'group-hover:scale-105 group-focus-within:scale-105',
        ]"
      />
      <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-black/0"></div>
    </figure>
    <NuxtLink v-if="link" :to="link.url" :target="link.target" class="absolute inset-0 z-20 w-full h-full cursor-pointer" data-test="link" />
  </article>
</template>
