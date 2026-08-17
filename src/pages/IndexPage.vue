<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <q-btn-toggle v-model="slide" no-caps :options="[
        { label: $t('indexPage.cover'), value: 'cover' },
        { label: $t('indexPage.letter1'), value: 'letter_1' },
        { label: $t('indexPage.letter2'), value: 'letter_2' },
      ]" />
    </div>
    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated
      control-color="primary" class="rounded-borders" style="height: 100%">
      <q-carousel-slide name="cover" class="column no-wrap flex-center">
        <q-img src="~assets/Lagarrues_p12.jpg" style="max-width: 500px" />
        <div class="q-mt-md text-center">
          {{ $t('indexPage.coverCaption') }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="letter_1" class="column no-wrap flex-center">
        <q-img src="~assets/Lagarrues_p16.jpg" style="max-width: 500px" />
        <div class="q-mt-md text-center">
          {{ $t('indexPage.letter1') }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="letter_2" class="column no-wrap flex-center">
        <q-img src="~assets/Lagarrues_p17.jpg" style="max-width: 500px" />
        <div class="q-mt-md text-center">
          {{ $t('indexPage.letter2') }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {},
  setup() {
    return {
      slide: ref('cover'),
    };
  }
});
</script>