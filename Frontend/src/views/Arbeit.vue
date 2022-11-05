<template>
  <div class="flex justify-center">
    <!-- <h1
      class="text-center text-3xl font-bold mt-12 shadow-lg w-1/2 p-5 rounded-lg bg-sky-500 text-white animate__animated animate__fadeInDown"
    >
      UNDER CONSTRUCTION
    </h1> -->

    <div class="relative px-4 sm:px-6 lg:px-8 py-16">
      <div class="mx-auto max-w-prose text-lg">
        <!--Überschrift-->
        <h1>
          <span
            class="animate__animated animate__fadeInRight block text-center text-lg font-semibold text-sky-500"
            >Coming Home Safe</span
          >
          <span
            class="animate__animated animate__fadeInLeft mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
          >
            Unsere Arbeit</span
          >
        </h1>
      </div>

      <!--Projektidee-->
      <div class="prose prose-lg prose-sky mx-auto mt-6 text-gray-500">
        <h1 class="mt-16">
          <span
            class="mt-2 block text-center font-bold leading-8 tracking-tight text-gray-900 text-2xl"
          >
            Projektidee</span
          >
        </h1>

        <p>
          Wir wollten eine Webseite entwickeln, bei dem sich Frauen anmelden können, um abends
          freiwillig getrackt zu werden. Der Sinn dieser Überwachung ist, dass sich die User*innen
          sicherer fühlen und im Notfall der letzte Standort von der Person vorhanden ist. Wenn die
          Überwachung gestartet wird, sehen die Mitarbeiter des Vereins die Person mit Namen,
          persönlichen Hobbys und Interessen auf der Karte.
          <br />
          Der Standort der Frau wird dauerhaft getrackt und auf der Karte des Mitarbeiters
          angezeigt. Wenn eine Frau glaubt, dass sie in Gefahr ist, kann durch das Drücken eines
          Alarm-Knopfes ein Signal ausgelöst werden. Die Mitarbeiter sehen die Person, welche einen
          Alarm ausgelöst hat, auf der Karte, sowie im Interface. Auf dem Handy des vermeintlichen
          Opfers wird eine Route zur nächsten Polizeistation angezeigt.
          <br />
          Weiters besteht die Möglichkeit, die Polizei über die Webseite telefonisch zu
          kontaktieren. Um auf sich aufmerksam zu machen wird ein lauter unangenehmer Ton
          abgespielt.
        </p>
      </div>

      <!--Technologien-->
      <h1 class="mt-16">
        <span
          class="mt-2 block text-center font-bold leading-8 tracking-tight text-gray-900 text-2xl"
        >
          Technologien</span
        >
      </h1>

      <div class="prose prose-lg prose-sky mx-auto mt-6">
        <p class="text-center text-gray-500">
          Die benötigten Technologien, welche für die Umsetzung, als auch Fertigstellung essenziell
          wichtig sind.
        </p>

        <div class="flex justify-center">
          <div class="grid grid-cols-4 gap-1 md:gap-3 md:mx-16 w-72 md:w-full">
            <div class="flex justify-center">
              <img src="/images/unsereArbeit/VueJS.png" alt="Vue.js" />
            </div>
            <div class="flex justify-center">
              <img src="/images/unsereArbeit/tailwind.jpg" alt="Tailwind CSS" />
            </div>
            <div class="flex justify-center">
              <img src="/images/unsereArbeit/NodeJS.svg.png" alt="Node.js" />
            </div>
            <div class="flex justify-center">
              <img src="/images/unsereArbeit/Mapbox.png" alt="Mapbox API" />
            </div>
          </div>
        </div>

        <ul class="list-disc">
          <li class="text-emerald-500">
            <p class="text-lg block text-gray-500">
              <span class="font-bold text-emerald-500">Vue.js: </span>Vue.js (View, englische
              Aussprache [vjuː]) ist ein clientseitiges JavaScript-Webframework zum Erstellen von
              Single-Page-Webanwendungen nach dem MVVM-Muster, es kann allerdings auch in
              Multipage-Webseiten für einzelne Abschnitte verwendet werden. Ab Version 2.0
              unterstützt es auch serverseitiges Rendern.
            </p>
          </li>
          <li class="text-cyan-400">
            <p class="text-lg block text-gray-500">
              <span class="font-bold text-cyan-400">Tailwind CSS: </span>Tailwind CSS ist ein
              Open-Source- CSS-Framework . Das Hauptmerkmal dieser Bibliothek ist, dass sie im
              Gegensatz zu anderen CSS-Frameworks wie Bootstrap keine Reihe vordefinierter Klassen
              für Elemente wie Schaltflächen oder Tabellen bereitstellt. Stattdessen erstellt es
              eine Liste von "Hilfs"-CSS-Klassen, die verwendet werden können, um jedes Element
              durch Mischen und Anpassen zu stylen.
            </p>
          </li>
          <li class="text-green-700">
            <p class="text-lg block text-gray-500">
              <span class="font-bold text-green-700">Node.js: </span>
              Node.js ist eine plattformübergreifende Open-Source-JavaScript-Laufzeitumgebung, die
              JavaScript-Code außerhalb eines Webbrowsers ausführen kann. Damit kann zum Beispiel
              ein Webserver betrieben werden. Node.js wird in der JavaScript-Laufzeitumgebung V8
              ausgeführt, die ursprünglich für Google Chrome entwickelt wurde, und bietet eine
              ressourcensparende Architektur, die eine besonders große Anzahl gleichzeitig
              bestehender Netzwerkverbindungen ermöglicht. Node.js wurde ursprünglich von Ryan Dahl
              2009 entwickelt, einem Software-Entwickler aus San Diego, Kalifornien. 2018 stellte
              Ryan Dahl mit Deno einen Nachfolger für Node.js vor, der einige als grundlegende
              Probleme identifizierte Eigenschaften von Node.js beheben soll.
            </p>
          </li>
          <li class="text-blue-700">
            <p class="text-lg block text-gray-500">
              <span class="font-bold text-blue-700">Mapbox API: </span>
              Mapbox ist ein amerikanischer Anbieter von benutzerdefinierten Online-Karten für
              Websites und Anwendungen wie Foursquare, Lonely Planet, Financial Times, The Weather
              Channel, Instacart Inc. und Snapchat. Seit 2010 hat es die Nische der
              benutzerdefinierten Karten schnell erweitert, als Antwort auf die begrenzte Auswahl,
              die von Kartenanbietern wie Google Maps angeboten wird. Mapbox ist der Schöpfer
              einiger Open-Source- Mapping-Bibliotheken und -Anwendungen oder ein maßgeblicher
              Mitwirkender, einschließlich der Mapbox GL-JS JavaScript-Bibliothek, der
              MBTiles-Spezifikation, der TileMill cartography IDE, die Leaflet
              -JavaScript-Bibliothek und die CartoCSS-Kartengestaltungssprache und -Parser.
            </p>
          </li>
        </ul>
      </div>

      <!--Bilder-->
      <div class="prose prose-lg prose-sky mx-auto mt-6 text-gray-500">
        <h1 class="mt-16">
          <span class="block text-center font-bold leading-8 tracking-tight text-gray-900 text-2xl">
            Screenshots</span
          >
        </h1>

        <carousel class="p-0 m-0" :items-to-show="1.5">
          <slide v-for="(s, id) in links" :key="id">
            <a :href="s"><img :src="s" alt="" /></a>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const links = ref([
  '/images/unsereArbeit/6.PNG',
  '/images/unsereArbeit/5.PNG',
  '/images/unsereArbeit/4.PNG',
  '/images/unsereArbeit/3.png',
  '/images/unsereArbeit/2.png',
  '/images/unsereArbeit/1.png',
]);
</script>
