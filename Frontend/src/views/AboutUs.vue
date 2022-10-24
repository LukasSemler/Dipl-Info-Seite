<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Über uns</h2>
          <p class="text-xl text-gray-500">
            Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu
            condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
          </p>
        </div>
        <div class="lg:col-span-2">
          <ul
            role="list"
            class="animate__animated animate__fadeInRight space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
          >
            <li v-for="person in people" :key="person.name" class="sm:py-8">
              <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <img class="rounded-lg object-cover shadow-lg" :src="person.imageUrl" alt="" />
                </div>
                <div class="sm:col-span-2">
                  <div class="space-y-4">
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h3>{{ person.name }}</h3>
                      <p class="text-sky-500">{{ person.role }}</p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500">{{ person.bio }}</p>
                    </div>
                    <ul role="list" class="flex space-x-5">
                      <li>
                        <a :href="person.instagramUrl"
                          ><img class="w-6" src="../assets/Instagram_logo.svg" alt=""
                        /></a>
                      </li>
                      <li>
                        <a :href="`mailto:${person.email}`"><EnvelopeIcon class="w-6" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon } from '@heroicons/vue/24/outline';

const people = [
  {
    name: 'Lukas Semler',
    role: 'Frontend Developer',
    imageUrl: '/seml_ich4_portrait-v1.jpg',
    bio: 'Lukas hat sich bei biesem Programm um das Frontend sowie das Design gekümmert.',
    instagramUrl: 'https://www.instagram.com/lukas_102065/',
    email: 'semler.l04@htlwienwest.at',
  },
  {
    name: 'Benjamin Stauf',
    role: 'Backend Developer',
    imageUrl: '/stau_Portrait_Ich1_V1.jpeg',
    bio: 'Benjamin hat das Backend, also die Logik hinter dem Programm programmiert und die Datenbank entworfen.',
    instagramUrl: 'https://www.instagram.com/benni_stauf/',
    email: 'stauf.b03@htlwienwest.at',
  },
];
</script>
