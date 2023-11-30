<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-table class="my-sticky-header-table" flat bordered wrap-cells title="Introduction" :rows="rows"
        :columns="columns" row-key="name" :filter="filter" :rows-per-page-options="[5, 10]">
        <template v-slot:top-right>
          <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import introductionJsonData from 'assets/introduction.json';

export default defineComponent({
  name: 'IntroductionPage',
  components: {},
  setup() {
    const columns = [
      {
        name: 'Index',
        required: true,
        label: 'Index',
        align: 'left',
        field: row => row['Index'],
        format: val => `${val}`,
        sortable: true,
      },
      {
        name: 'Original Text',
        label: 'Original Text',
        align: 'left',
        field: 'Original Text',
      },
      {
        name: 'Google Trans.',
        label: 'Google Trans.',
        align: 'left',
        field: 'Google Trans.',
      },
      {
        name: 'DeepL Trans.',
        label: 'DeepL Trans.',
        align: 'left',
        field: 'DeepL Trans.',
      }
    ]

    const rows = introductionJsonData
    return { filter: ref(''), columns, rows };
  }
});
</script>