<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-table class="my-sticky-header-table" flat bordered wrap-cells :title="$t('pages.vocabulary.title')" :rows="rows"
        :columns="columns" row-key="name" :filter="filter" :rows-per-page-options="[5, 10]" :loading="loading">
        <template v-slot:top-right>
          <q-input outlined dense debounce="300" v-model="filter" :placeholder="$t('common.search')">
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
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'VocabularyPage',
  components: {},
  setup() {
    const { t } = useI18n()

    const columns = computed(() => [
      {
        name: 'Index',
        required: true,
        label: t('columns.index'),
        align: 'left',
        field: row => row['Index'],
        format: val => `${val}`,
        sortable: true,
      },
      {
        name: 'PDF Page',
        label: t('columns.pdfPage'),
        align: 'left',
        field: 'PDF Page',
      },
      {
        name: 'Original Page',
        label: t('columns.originalPage'),
        align: 'left',
        field: 'Original Page',
      },
      {
        name: 'Original Text',
        label: t('columns.originalText'),
        align: 'left',
        field: 'Original Text',
      },
      {
        name: 'Jyutping++',
        label: t('columns.jyutpingPlusPlus'),
        align: 'left',
        field: 'Jyutping++',
      },
      {
        name: 'Corres. Char.',
        label: t('columns.corresChar'),
        align: 'left',
        field: 'Corres. Char.',
      },
      {
        name: 'Original French Text',
        label: t('columns.originalFrenchText'),
        align: 'left',
        field: 'Original French Text',
      },
      {
        name: 'French (Google Trans.)',
        label: t('columns.frenchGoogleTrans'),
        align: 'left',
        field: 'French (Google Trans.)',
      },
      {
        name: 'French (Trans. Corr.)',
        label: t('columns.frenchTransCorr'),
        align: 'left',
        field: 'French (Trans. Corr.)',
      },
      {
        name: 'Original Vietnamese Text',
        label: t('columns.originalVietnameseText'),
        align: 'left',
        field: 'Original Vietnamese Text',
      },
      {
        name: 'Vietnamese (Google Trans.)',
        label: t('columns.vietnameseGoogleTrans'),
        align: 'left',
        field: 'Vietnamese (Google Trans.)',
      },
      {
        name: 'Vietnamese (Trans. Corr.)',
        label: t('columns.vietnameseTransCorr'),
        align: 'left',
        field: 'Vietnamese (Trans. Corr.)',
      },
      {
        name: 'Note',
        label: t('columns.note'),
        align: 'left',
        field: 'Note',
      }
    ])

    const loading = ref(true);
    const rows = ref<unknown[]>([]);
    onMounted(async () => {
      rows.value = (await import('assets/vocabulary.json')).default;
      loading.value = false;
    });
    return { filter: ref(''), columns, rows, loading };
  }
});
</script>