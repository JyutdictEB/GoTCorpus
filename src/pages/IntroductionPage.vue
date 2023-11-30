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
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
import introductionJsonData from 'assets/introduction.json';

export default defineComponent({
  name: 'IntroductionPage',
  components: {},
  setup() {
    const columns = [
      {
        name: 'index',
        required: true,
        label: 'Index',
        align: 'left',
        field: row => row.index,
        format: val => `${val}`,
        sortable: true,
      },
      {
        name: 'original',
        label: 'Original Text',
        align: 'left',
        field: 'original',
      },
      {
        name: 'google-translation',
        label: 'Google Translation',
        align: 'left',
        field: 'google-translation',
      },
      {
        name: 'deepl-translation',
        label: 'DeepL Translation',
        align: 'left',
        field: 'deepl-translation',
      }
    ]

    const rows = introductionJsonData
    return { filter: ref(''), columns, rows };
  }
});
</script>