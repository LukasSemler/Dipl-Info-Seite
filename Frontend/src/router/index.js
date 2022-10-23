import { createRouter, createWebHashHistory } from 'vue-router';
import LandingPageView from '../views/LandingPageView.vue';
import AboutUs from '../views/AboutUs.vue';
import Contact from '../views/Contact.vue';
import Fortschritt from '../views/Fortschritt.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPageView,
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/fortschritt',
      name: 'Fortschritt',
      component: Fortschritt,
    },
  ],
});

export default router;
