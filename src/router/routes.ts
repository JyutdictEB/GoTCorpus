import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'introduction', component: () => import('pages/IntroductionPage.vue') },
      { path: 'phoneme_description', component: () => import('pages/PhonemeDescriptionPage.vue') },
      { path: 'vocabulary', component: () => import('pages/VocabularyPage.vue') },
      // { path: 'sentences', component: () => import('pages/SentencesPage.vue') },
      // { path: 'idioms', component: () => import('pages/IdiomsPage.vue') },
      // { path: 'about', component: () => import('pages/AboutPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
