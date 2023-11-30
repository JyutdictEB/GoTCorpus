<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <q-btn-toggle v-model="slide" no-caps :options="[
        { label: 'Cover', value: 'cover' },
        { label: 'Letter from General Galliéni (1)', value: 'letter_1' },
        { label: 'Letter from General Galliéni (2)', value: 'letter_2' },
      ]" />
    </div>
    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated
      control-color="primary" class="rounded-borders" style="height: 100%">
      <q-carousel-slide name="cover" class="column no-wrap flex-center">
        <q-img src="~assets/Lagarrues_p12.jpg" style="max-width: 500px" />
        <div class="q-mt-md text-center">
          Cover page of the book
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="letter_1" class="column no-wrap flex-center">
        <q-img src="~assets/Lagarrues_p16.jpg" style="max-width: 500px" />
        <div class="q-mt-md text-center">
          Letter from General Galliéni (1)
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="letter_2" class="column no-wrap flex-center">
        <q-img src="~assets/Lagarrues_p17.jpg" style="max-width: 500px" />
        <div class="q-mt-md text-center">
          Letter from General Galliéni (2)
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