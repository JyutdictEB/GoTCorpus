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
import { Todo, Meta } from 'components/models';
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
        name: 'Corresponding Character',
        label: 'Character',
        align: 'left',
        field: 'Corresponding Character',
      },
      {
        name: 'French',
        label: 'French',
        align: 'left',
        field: 'French',
      },
      {
        name: 'French (GT)',
        label: 'French (GT)',
        align: 'left',
        field: 'French (GT)',
      },
      {
        name: 'French (T-Correction)',
        label: 'French (T-Correction)',
        align: 'left',
        field: 'French (T-Correction)',
      },
      {
        name: 'Vietnamese',
        label: 'Vietnamese',
        align: 'left',
        field: 'Vietnamese',
      },
      {
        name: 'Vietnamese (GT)',
        label: 'Vietnamese (GT)',
        align: 'left',
        field: 'Vietnamese (GT)',
      },
      {
        name: 'Vietnamese (T-Correction)',
        label: 'Vietnamese (T-Correction)',
        align: 'left',
        field: 'Vietnamese (T-Correction)',
      }
    ]

    const rows = vocabularyJsonData
    return { filter: ref(''), columns, rows };
  }
});
</script>