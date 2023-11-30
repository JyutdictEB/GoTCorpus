<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-table class="my-sticky-header-table" flat bordered wrap-cells title="Phoneme Description" :rows="rows"
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
import phonemeDescriptionJsonData from 'assets/phoneme_description.json';

export default defineComponent({
  name: 'PhonemeDescriptionPage',
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
        name: 'Original Page',
        label: 'Original Page',
        align: 'left',
        field: 'Original Page',
      },
      {
        name: 'Presumptions',
        label: 'Presumptions',
        align: 'left',
        field: 'Presumptions',
      },
      {
        name: 'Spellings',
        label: 'Spellings',
        align: 'left',
        field: 'Spellings',
      },
      {
        name: 'Descriptions',
        label: 'Descriptions',
        align: 'left',
        field: 'Descriptions',
      },
      {
        name: 'Machine Translation',
        label: 'Machine Translation',
        align: 'left',
        field: 'Machine Translation',
      },
      {
        name: 'Language Analogues',
        label: 'Language Analogues',
        align: 'left',
        field: 'Language Analogues',
      },
      {
        name: 'Example Words',
        label: 'Example Words',
        align: 'left',
        field: 'Example Words',
      }
    ]

    const rows = phonemeDescriptionJsonData
    return { filter: ref(''), columns, rows };
  }
});
</script>