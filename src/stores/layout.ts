import { acceptHMRUpdate, defineStore } from 'pinia';

export const useLayout = defineStore('layout', () => {
  const scrollLockEnabled = ref<boolean>(false);

  return {
    scrollLockEnabled
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayout, import.meta.hot));
}
