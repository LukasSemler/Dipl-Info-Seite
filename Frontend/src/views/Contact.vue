<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-40"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="success"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Erfolgreich!</p>
                <p class="mt-1 text-sm text-gray-500">Ihre Email wurde erfolgreich gesendet.</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="success = false"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-40"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="error"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <XMarkIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Fehler!</p>
                <p class="mt-1 text-sm text-gray-500">Es gab eine Fehler beim Senden der Email.</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="error = false"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = true">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div>
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100"
                >
                  <ExclamationTriangleIcon class="h-6 w-6 text-sky-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"
                    >AGB's</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Bitte akzeptieren Sie unsere AGBs um fortzufahren
                    </p>
                    <br />
                    <p @click="toAGB" class="text-sm text-gray-700 text-left">
                      zu den <span class="underline">AGBs</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none sm:text-sm"
                  @click="agbs"
                >
                  Akzeptieren
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div class="bg-white">
    <main class="overflow-hidden">
      <!-- Header -->
      <div class="bg-white">
        <div class="pb-24 lg:pb-32 pt-10">
          <div class="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
            <h1
              class="text-4xl font-bold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl"
            >
              Kontaktieren Sie uns
            </h1>
            <p class="mt-6 max-w-3xl text-xl text-warm-gray-500">
              Wenn Sie noch weitere Fragen zu uns, zu unserem Produkt oder sonstigen Themen haben,
              können Sie uns gerne über das unten angeführte Kontaktfeld kontaktieren. Auch wenn
              Ihnen ein Problem oder ein Fehler bei unsere Webapp aufgefallen ist, freuen wir uns
              über eine Nachricht von Ihnen.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact section -->
      <section class="relative bg-white" aria-labelledby="contact-heading">
        <div class="absolute h-1/2 w-full bg-white" aria-hidden="true" />
        <!-- Decorative dot pattern -->
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <svg
            class="absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-warm-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="relative bg-white shadow-xl">
            <h2 id="contact-heading" class="sr-only">Contact us</h2>

            <div class="grid grid-cols-1 lg:grid-cols-3">
              <!-- Contact information -->
              <div
                class="relative overflow-hidden bg-gradient-to-b from-sky-500 to-sky-600 py-10 px-6 sm:px-10 xl:p-12"
              >
                <!-- Decorative angle backgrounds -->
                <div class="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                  <svg
                    class="absolute inset-0 h-full w-full"
                    width="343"
                    height="388"
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 h-full w-full"
                    width="359"
                    height="339"
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 h-full w-full"
                    width="160"
                    height="678"
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white">Kontakt Informationen</h3>
                <p class="mt-6 max-w-3xl text-base text-sky-50">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst
                  amet. Sapien tortor lacus arcu.
                </p>
                <dl class="mt-8 space-y-6">
                  <dt><span class="sr-only">Email</span></dt>
                  <dd class="flex text-base text-sky-50">
                    <EnvelopeIcon class="h-6 w-6 flex-shrink-0 text-sky-200" aria-hidden="true" />
                    <span class="ml-3">semler.l04@htlwienwest.at</span>
                  </dd>
                </dl>
              </div>

              <!-- Contact form -->
              <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 class="text-lg font-medium text-warm-gray-900">Senden Sie uns Ihre Anfrage</h3>
                <form
                  action="#"
                  method="POST"
                  class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label for="first-name" class="block text-sm font-medium text-warm-gray-900"
                      >Vorname</label
                    >
                    <div class="mt-1">
                      <input
                        type="text"
                        v-model="state.vorname"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                      />
                    </div>
                    <p
                      v-if="val.vorname.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ val.vorname.$silentErrors[0].$message }}
                    </p>
                  </div>
                  <div>
                    <label for="last-name" class="block text-sm font-medium text-warm-gray-900"
                      >Nachname</label
                    >
                    <div class="mt-1">
                      <input
                        type="text"
                        v-model="state.nachname"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                      />
                    </div>
                    <p
                      v-if="val.nachname.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ val.nachname.$silentErrors[0].$message }}
                    </p>
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-warm-gray-900"
                      >Email</label
                    >
                    <div class="mt-1">
                      <input
                        id="email"
                        v-model="state.email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                      />
                    </div>
                    <p v-if="val.email.$invalid" class="mt-2 text-sm text-red-600" id="email-error">
                      {{ val.email.$silentErrors[0].$message }}
                    </p>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label for="phone" class="block text-sm font-medium text-warm-gray-900"
                        >Telefonnummer</label
                      >
                    </div>
                    <div class="mt-1">
                      <input
                        type="text"
                        v-model="state.telNr"
                        name="phone"
                        id="phone"
                        autocomplete="tel"
                        class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                        aria-describedby="phone-optional"
                      />
                    </div>
                    <p v-if="val.telNr.$invalid" class="mt-2 text-sm text-red-600" id="email-error">
                      {{ val.telNr.$silentErrors[0].$message }}
                    </p>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="subject" class="block text-sm font-medium text-warm-gray-900"
                      >Betreff</label
                    >
                    <div class="mt-1">
                      <input
                        type="text"
                        v-model="state.betreff"
                        name="subject"
                        id="subject"
                        class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                      />
                    </div>
                    <p
                      v-if="val.betreff.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ val.betreff.$silentErrors[0].$message }}
                    </p>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label for="message" class="block text-sm font-medium text-warm-gray-900"
                        >Nachricht</label
                      >
                      <span id="message-max" class="text-sm text-warm-gray-500"
                        >Max. 500 characters</span
                      >
                    </div>
                    <div class="mt-1">
                      <textarea
                        id="message"
                        v-model="state.nachricht"
                        name="message"
                        rows="4"
                        class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                        aria-describedby="message-max"
                      />
                    </div>
                    <p
                      v-if="val.nachricht.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ val.nachricht.$silentErrors[0].$message }}
                    </p>
                  </div>
                  <div class="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      @click="recaptcha"
                      class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Senden
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted, reactive, computed } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
import { XMarkIcon } from '@heroicons/vue/20/solid';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import axios from 'axios';
// Vuelidate Imports
import useValidate from '@vuelidate/core';
import { required, email, maxLength } from '@vuelidate/validators';
// recaptcha
import { useReCaptcha } from 'vue-recaptcha-v3';
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();
let open = ref(false);
const router = useRouter();
let success = ref(false);
let error = ref(false);
const state = reactive({
  vorname: '',
  nachname: '',
  email: '',
  telNr: '',
  betreff: '',
  nachricht: '',
});
// Rules for vuelidate
const rules = computed(() => {
  return {
    vorname: { required },
    nachname: { required },
    email: { required, email },
    telNr: { required },
    betreff: { required },
    nachricht: { required, maxLength: maxLength(500) },
  };
});
const val = useValidate(rules, state);
onMounted(() => {
  console.log('Mount');
  const agbs = localStorage.getItem('AGBs');
  if (agbs == 'true') open.value = false;
  else open.value = true;
});
function agbs() {
  localStorage.setItem('AGBs', true);
  open.value = false;
}
function toAGB() {
  open.value = false;
  router.push('/agb');
}
const offices = [
  { id: 1, city: 'Los Angeles', address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'] },
];
const recaptcha = async (e) => {
  e.preventDefault();
  // (optional) Wait until recaptcha has been loaded.
  await recaptchaLoaded();
  // Execute reCAPTCHA with action "login".
  const token = await executeRecaptcha('login');
  // Do stuff with the received token.
  console.log(token);

  try {
    val.value.$validate();
    if (!val.value.$error) {
      const data = {
        service_id: 'Oil4youTest',
        template_id: 'template_aweyw4k',
        user_id: 'UOSx_d01TPH9X5MzB',
        template_params: {
          from_name: `${state.vorname} ${state.nachname}`,
          vorname: state.vorname,
          nachname: state.nachname,
          reply_to: state.email,
          tel: state.telNr,
          betreff: state.betreff,
          nachricht: state.nachricht,
        },
      };
      const result = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      felderClearen();
      if (result.status == 200) {
        success.value = true;
        setInterval(() => (success.value = false), 3000);
      }
    } else {
      console.log('Fehler');
    }
  } catch (error) {
    felderClearen();
    error.value = true;
    setInterval(() => (error.value = false), 3000);
    console.log(error.message);
  }
};
async function sendMail(e) {
  e.preventDefault();
}
function felderClearen() {
  state.vorname = '';
  state.nachname = '';
  state.email = '';
  state.telNr = '';
  state.betreff = '';
  state.nachricht = '';
}
</script>
