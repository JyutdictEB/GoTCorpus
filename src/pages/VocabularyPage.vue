<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-table class="my-sticky-header-table" flat bordered wrap-cells title="Vocabulary" :rows="rows" :columns="columns"
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
import vocabularyJsonData from 'assets/vocabulary.json';

export default defineComponent({
  name: 'VocabularyPage',
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
        name: 'Original Text',
        label: 'Original Text',
        align: 'left',
        field: 'Original Text',
      },
      {
        name: 'Jyutping++',
        label: 'Jyutping++',
        align: 'left',
        field: 'Jyutping++',
      },
      {
        name: 'Corres. Char.',
        label: 'Corres. Char.',
        align: 'left',
        field: 'Corres. Char.',
      },
      {
        name: 'Original French Text',
        label: 'Original French Text',
        align: 'left',
        field: 'Original French Text',
      },
      {
        name: 'French (Google Trans.)',
        label: 'French (Google Trans.)',
        align: 'left',
        field: 'French (Google Trans.)',
      },
      {
        name: 'French (Trans. Corr.)',
        label: 'French (Trans. Corr.)',
        align: 'left',
        field: 'French (Trans. Corr.)',
      },
      {
        name: 'Original Vietnamese Text',
        label: 'Original Vietnamese Text',
        align: 'left',
        field: 'Original Vietnamese Text',
      },
      {
        name: 'Vietnamese (Google Trans.)',
        label: 'Vietnamese (Google Trans.)',
        align: 'left',
        field: 'Vietnamese (Google Trans.)',
      },
      {
        name: 'Vietnamese (Trans. Corr.)',
        label: 'Vietnamese (Trans. Corr.)',
        align: 'left',
        field: 'Vietnamese (Trans. Corr.)',
      },
      {
        name: 'Note',
        label: 'Note',
        align: 'left',
        field: 'Note',
      }
    ]

    const rows = vocabularyJsonData
    return { filter: ref(''), columns, rows };
  }
});
</script>