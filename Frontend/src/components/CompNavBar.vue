<template>
  <Disclosure as="nav" class="bg-wite shadow-md" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="/Coming-Home-Safe-Icon.webp"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="/Coming-Home-Safe-Icon.webp"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigationRichtig"
                :key="item.name"
                @click="router.push(item.link)"
                :class="[
                  item.current
                    ? 'bg-sky-500 text-white'
                    : 'text-gray-800 hover:bg-sky-500 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium cursor-pointer',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden z-10 ">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigationRichtig"
          :key="item.name"
          as="a"
          @click="router.push(item.link)"
          :class="[
            item.current
              ? 'bg-sky-500 text-white'
              : 'text-gray-800 hover:bg-sky-500 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium sticky top-0 left-0 right-0 z-10',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();

const navigation = [
  { name: 'Home', link: '/', current: true },
  { name: 'Unsere Arbeit', link: '/arbeit', current: false },
  { name: 'Fortschritt', link: '/fortschritt', current: false },
  { name: 'Über uns', link: '/aboutUs', current: false },
  { name: 'Kontakt', link: '/contact', current: false },
];

const navigationRichtig = computed(() => {
  const erg = navigation.map((item) => {
    return {
      ...item,
      current: router.currentRoute.value.path === item.link,
    };
  });

  return erg;
});
</script>
