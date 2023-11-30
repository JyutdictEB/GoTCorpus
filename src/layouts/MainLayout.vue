<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Lagarrue's GoT Cantonese Online Corpus
        </q-toolbar-title>

        <div>v0.1.0 Beta</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="175" :breakpoint="700">
      <q-scroll-area style="height: calc(100% - 0px); margin-top: 0px;">
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>

            <q-item-section id="list-name">
              Homepage
            </q-item-section>
          </q-item>

          <q-item to="/introduction" exact clickable v-ripple>

            <q-item-section id="list-name">
              Introduction
            </q-item-section>
          </q-item>

          <q-item to="/phoneme_description" exact clickable v-ripple>

            <q-item-section id="list-name">
              Phoneme Description
            </q-item-section>
          </q-item>

          <q-item to="/vocabulary" exact clickable v-ripple>

            <q-item-section id="list-name">
              Vocabulary
            </q-item-section>
          </q-item>

          <q-item to="/sentences" exact clickable v-ripple>

            <q-item-section id="list-name">
              Sentences
            </q-item-section>
          </q-item>

          <q-item to="/idioms" exact clickable v-ripple>

            <q-item-section id="list-name">
              Idioms
            </q-item-section>
          </q-item>

          <q-item to="/about" exact clickable v-ripple>

            <q-item-section id="list-name">
              About
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
