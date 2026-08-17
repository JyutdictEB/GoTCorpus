<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-table class="my-sticky-header-table" flat bordered wrap-cells :title="$t('pages.introduction.title')" :rows="rows"
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
  name: 'IntroductionPage',
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
        name: 'Original Text',
        label: t('columns.originalText'),
        align: 'left',
        field: 'Original Text',
      },
      {
        name: 'Google Trans.',
        label: t('columns.googleTrans'),
        align: 'left',
        field: 'Google Trans.',
      },
      {
        name: 'DeepL Trans.',
        label: t('columns.deepLTrans'),
        align: 'left',
        field: 'DeepL Trans.',
      }
    ])

    const loading = ref(true);
    const rows = ref<unknown[]>([]);
    onMounted(async () => {
      rows.value = (await import('assets/introduction.json')).default;
      loading.value = false;
    });
    return { filter: ref(''), columns, rows, loading };
  }
});
</script>