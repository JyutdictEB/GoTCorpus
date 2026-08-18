<template>
  <q-page padding>
    <div class="text-h5 q-my-lg q-mx-lg">
      {{ $t('about.heading') }}
    </div>
    <div class="q-my-lg q-mx-lg">
      <h6>{{ $t('about.insightHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.insightBody') }}
      </p>

      <h6>{{ $t('about.inceptionHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.inceptionBody') }}
      </p>

      <h6>{{ $t('about.workflowHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.workflowBody') }}
      </p>

      <h6>{{ $t('about.lingualHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.lingualBody') }}
      </p>

      <h6>{{ $t('about.openAccessHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.openAccessBody1') }}
      </p>
      <p class="text-body1">
        {{ $t('about.openAccessBody2') }}
      </p>
    </div>
    <div class="text-h5 q-my-lg q-mx-lg">
      {{ $t('about.citationHeading') }}
    </div>
    <div class="q-my-lg q-mx-lg">
      <i18n-t keypath="about.citationIntro" tag="p" class="text-body1">
        <template #supplementary>
          <b>{{ $t('about.citationSupplementary') }}</b>
        </template>
        <template #main>
          <b>{{ $t('about.citationMain') }}</b>
        </template>
        <template #github>
          <b>{{ $t('about.citationGithub') }}</b>
        </template>
      </i18n-t>

      <h6>{{ $t('about.supplementaryHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.mlaLabel') }}
      </p>
      <blockquote class="text-body1">
        Huang, Junxin, and Joeng-zit Lai. "Evolving Pre-processing of Raw Corpus: The Digitization Initiative of
        Cantonese Material at the Sino-Vietnamese Border in the Late 19th Century." <i>Buckeye East Asian
          Linguistics</i>, vol. 9, Nov 2024, pp. 32–51.
      </blockquote>
      <p class="text-body1">
        {{ $t('about.apaLabel') }}
      </p>
      <blockquote class="text-body1">
        Huang, J., & Lai, J. (2024, Nov). Evolving pre-processing of raw corpus: The digitization initiative of
        Cantonese material at the Sino-Vietnamese border in the late 19th century. <i>Buckeye East Asian
          Linguistics</i>, 9, 32–51.
      </blockquote>

      <h6>{{ $t('about.mainHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.mlaLabel') }}
      </p>
      <blockquote class="text-body1">
        Lai, Joeng-zit, et al. "The Affiliation of Cantonese at the Sino-Vietnamese Border in the Late 19th Century."
        <i>Current Research in Chinese Linguistics</i>, vol. 102, no. 2, July 2023, DOI:
        10.29499/CrCL.202307_102(2).0004.
      </blockquote>
      <p class="text-body1">
        {{ $t('about.apaLabel') }}
      </p>
      <blockquote class="text-body1">
        Lai, J., Wòng, P., Huang, J., & Ng, G.-O. (2023, July). The affiliation of Cantonese at the Sino-Vietnamese
        border in the late 19th century. <i>Current Research in Chinese Linguistics, 102</i>(2).
        https://doi.org/10.29499/CrCL.202307_102(2).0004
      </blockquote>

      <h6>{{ $t('about.githubHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.mlaLabel') }}
      </p>
      <blockquote class="text-body1">
        Jyutdict Editorial Board IT Workgroup of Lingnaam Jyutjam. <i>Lagarrue's GoT Cantonese Online Corpus</i>.
        Version v0.1.0, GitHub, 27 Nov. 2024, <a href="https://github.com/JyutdictEB/GoTCorpus"
          target="_blank">https://github.com/JyutdictEB/GoTCorpus</a>. Accessed [YOUR ACCESS DATE].
      </blockquote>
      <p class="text-body1">
        {{ $t('about.apaLabel') }}
      </p>
      <blockquote class="text-body1">
        Jyutdict Editorial Board IT Workgroup of Lingnaam Jyutjam. (2024, November 27). <i>Lagarrue's GoT Cantonese
          Online
          Corpus</i> (Version v0.1.0). GitHub. <a href="https://github.com/JyutdictEB/GoTCorpus"
          target="_blank">https://github.com/JyutdictEB/GoTCorpus</a>
      </blockquote>
    </div>
    <div class="text-h5 q-my-lg q-mx-lg">
      {{ $t('about.contactHeading') }}
    </div>
    <div class="q-my-lg q-mx-lg">
      <i18n-t keypath="about.contactIntro" tag="p" class="text-body1">
        <template #email>
          <b>jyutjam@tutanota.com</b>
        </template>
      </i18n-t>
      <i18n-t keypath="about.contactGithub" tag="p" class="text-body1">
        <template #githubPage>
          <a href="https://github.com/JyutdictEB/GoTCorpus">{{ $t('about.githubPageLink') }}</a>
        </template>
      </i18n-t>
      <p class="text-body1">
        {{ $t('about.friendlyLinks') }}
      </p>
      <ul class="text-body1">
        <li>{{ $t('about.links.hamzauBaakwaa') }}
          <ul>
            <li><a href="https://hamzau.com" target="_blank">https://hamzau.com</a></li>
          </ul>
        </li>
        <li>{{ $t('about.links.jyutdict') }} <a href="https://jyutdict.org" target="_blank">https://jyutdict.org</a></li>
        <li>{{ $t('about.links.lingnaamJyutjamHomepage') }} <a href="https://jyutjam.org"
            target="_blank">https://jyutjam.org</a></li>
        <li>{{ $t('about.links.jyutpingPlusPlus') }} <a href="https://jyutjam.org/j++/" target="_blank">https://jyutjam.org/j++</a></li>
        <li>{{ $t('about.links.jyutping') }} <a href="https://jyutping.org" target="_blank">https://jyutping.org</a></li>
        <li>{{ $t('about.links.jyutpingInputMethod') }} <a href="https://jyutping.net/"
            target="_blank">https://jyutping.net</a></li>
      </ul>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  components: {},
  setup() {
    return {};
  }
});
</script>

<style scoped>
h6 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: 400;
}

.text-h5 {
  font-weight: 500;
}
</style>