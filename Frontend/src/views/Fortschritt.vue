<template>
  <div class="relative overflow-hidden bg-white py-16">
    <div
      class="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]"
    >
      <div class="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
        <svg
          class="absolute top-12 left-full translate-x-32 transform"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
        <svg
          class="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg
          class="absolute bottom-12 left-full translate-x-32 transform"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-lg">
        <h1>
          <span
            class="animate__animated animate__fadeInRight block text-center text-lg font-semibold text-sky-500"
            >Coming Home Safe</span
          >
          <span
            class="animate__animated animate__fadeInLeft mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
          >
            Fortschritt</span
          >
        </h1>
        <p class="mt-8 text-xl leading-8 text-gray-500">
          Hier wird der aktuelle Diplomarbeits-Fortschritt in Form von Todos angezeigt.
        </p>
      </div>
      <!-- Fortschritt-->
      <div class="lg:mx-32 mt-16 flex justify-center animate__animated animate__bounceIn">
        <div class="w-1/2">
          <div class="flow-root">
            <ul role="list" class="-mb-8">
              <li v-for="(event, eventIdx) in timeline" :key="event.id">
                <div class="relative pb-8">
                  <span
                    v-if="eventIdx !== timeline.length - 1"
                    class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        :class="[
                          event.iconBackground,
                          'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                        ]"
                      >
                        <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p class="text-sm text-gray-500">
                          {{ event.content }}
                          <a :href="event.href" class="font-medium text-gray-900">{{
                            event.target
                          }}</a>
                        </p>
                      </div>
                      <div class="whitespace-nowrap text-right text-sm text-gray-500">
                        <time :datetime="event.datetime">{{ event.date }}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/vue/20/solid';

const timeline = [
  // {
  //   id: 1,
  //   content: 'Applied to',
  //   target: 'Front End Developer',
  //   href: '#',
  //   date: 'Sep 20',
  //   datetime: '2020-09-20',
  //   icon: UserIcon,
  //   iconBackground: 'bg-gray-400',
  // },
  // {
  //   id: 2,
  //   content: 'Advanced to phone screening by',
  //   target: 'Bethany Blake',
  //   href: '#',
  //   date: 'Sep 22',
  //   datetime: '2020-09-22',
  //   icon: HandThumbUpIcon,
  //   iconBackground: 'bg-blue-500',
  // },
  // {
  //   id: 3,
  //   content: 'Completed phone screening with',
  //   target: 'Martha Gardner',
  //   href: '#',
  //   date: 'Sep 28',
  //   datetime: '2020-09-28',
  //   icon: CheckIcon,
  //   iconBackground: 'bg-green-500',
  // },

  {
    id: 1,
    content: 'Datenbank erstellt',
    target: '(Postgres)',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 2,
    content: 'Webseitengrundgreüst erstellt',
    target: '(Vue.js)',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 3,
    content: 'Anmeldung und Registration durch',
    target: 'User',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Standort des Users muss sichtbar sein auf der ',
    target: 'Mitarbeiter-Map',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 5,
    content: 'User müssen getrackt werden können',
    target: '',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 6,
    content: 'Administrator kann Mitarbeiter anlegen. Weiterleitung auf ',
    target: 'Mitarbeiter-View',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 7,
    content:
      'User-Alarm. User kann einen Alarm auslösen, welcher für den Mitarbeiter als Warnsignal angezeigt wird. Dadurch erhält der User eine Navigation zur nächsten Polizeistation.',
    target: '',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 8,
    content: '2-Faktorenauthentifizierung bei Registration, sowie bei Login auf ',
    target: 'Mitarbeiter-Map',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 9,
    content: 'Kommunikation zwischen Mitarbeiter und User geschieht über ein integriertes',
    target: 'Chat-System',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 10,
    content: 'Testen der gesamten Web-Applikation',
    target: '',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 11,
    content: 'Fertiger Deploy, der Web-Applikation bei Coming-Home-Safe',
    target: '',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
];
</script>
