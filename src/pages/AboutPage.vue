<template>
  <q-page padding>
    <div class="text-h5 q-my-lg q-mx-lg">
      {{ $t('about.heading') }}
    </div>
    <div class="q-my-lg q-mx-lg">
      <h6>{{ $t('about.sourceMaterialHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.sourceMaterialBody') }}
      </p>

      <h6>{{ $t('about.contentsHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.contentsBody') }}
      </p>

      <h6>{{ $t('about.digitizationHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.digitizationBody') }}
      </p>

      <h6>{{ $t('about.findingsHeading') }}</h6>
      <p class="text-body1">
        {{ $t('about.findingsBody') }}
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
            <li><a :href="$t('about.linkUrls.hamzauBaakwaa')" target="_blank">{{ $t('about.linkUrls.hamzauBaakwaa') }}</a></li>
          </ul>
        </li>
        <li>{{ $t('about.links.jyutdict') }} <a :href="$t('about.linkUrls.jyutdict')" target="_blank">{{ $t('about.linkUrls.jyutdict') }}</a></li>
        <li>{{ $t('about.links.lingnaamJyutjamHomepage') }} <a :href="$t('about.linkUrls.lingnaamJyutjamHomepage')"
            target="_blank">{{ $t('about.linkUrls.lingnaamJyutjamHomepage') }}</a></li>
        <li>{{ $t('about.links.jyutpingPlusPlus') }} <a :href="$t('about.linkUrls.jyutpingPlusPlus')" target="_blank">{{ $t('about.linkUrls.jyutpingPlusPlus') }}</a></li>
        <li>{{ $t('about.links.jyutping') }} <a :href="$t('about.linkUrls.jyutping')" target="_blank">{{ $t('about.linkUrls.jyutping') }}</a></li>
        <li>{{ $t('about.links.jyutpingInputMethod') }} <a :href="$t('about.linkUrls.jyutpingInputMethod')"
            target="_blank">{{ $t('about.linkUrls.jyutpingInputMethod') }}</a></li>
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