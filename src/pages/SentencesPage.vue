<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-table class="my-sticky-header-table" flat bordered wrap-cells title="Sentences" :rows="rows" :columns="columns"
        row-key="name" :filter="filter" :rows-per-page-options="[5, 10]">
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
import sentencesJsonData from 'assets/sentences.json';

export default defineComponent({
  name: 'SentencesPage',
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
        name: 'PDF Page',
        label: 'PDF Page',
        align: 'left',
        field: 'PDF Page',
      },
      {
        name: 'Original Page',
        label: 'Original Page',
        align: 'left',
        field: 'Original Page',
      },
      {
        name: 'Original French Text',
        label: 'Original French Text',
        align: 'left',
        field: 'Original French Text',
      },
      {
        name: 'DeepL Trans.',
        label: 'DeepL Trans.',
        align: 'left',
        field: 'DeepL Trans.',
      },
      {
        name: 'Original Text',
        label: 'Original Text',
        align: 'left',
        field: 'Original Text',
      },
      {
        name: 'Corres. Char.',
        label: 'Corres. Char.',
        align: 'left',
        field: 'Corres. Char.',
      },
      {
        name: 'Jyutping++',
        label: 'Jyutping++',
        align: 'left',
        field: 'Jyutping++',
      },
      {
        name: 'Jyutping++ (Tokenized)',
        label: 'Jyutping++ (Tokenized)',
        align: 'left',
        field: 'Jyutping++ (Tokenized)',
      },
      {
        name: 'Note',
        label: 'Note',
        align: 'left',
        field: 'Note',
      }
    ]

    const rows = sentencesJsonData
    return { filter: ref(''), columns, rows };
  }
});
</script>