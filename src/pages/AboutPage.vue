<template>
  <q-page padding>
    <div class="text-h5 q-my-lg q-mx-lg">
      About
    </div>
    <div class="q-my-lg q-mx-lg">
      <h6>An Insight into the Linguistic Legacy of the Gulf of Tonkin</h6>
      <p class="text-body1">
        Linguistic heritage is a tapestry that interweaves the essence of culture, history, and communication across
        generations and geographies. With a unique digitization initiative, the Lagarrue's GoT Cantonese Online Corpus
        emerges as a testament to this. Nestled at the crossroads of history and modern technology, this digital
        repository is dedicated to preserving and perpetuating the Cantonese linguistic materials from the Gulf of Tonkin
        (GoT) region, specifically those dating back to the late 19th century.
      </p>

      <h6>The Inception of Preservation</h6>
      <p class="text-body1">
        The journey of transcribing and preserving the Cantonese dialect from a time when such efforts were rare makes
        this corpus extraordinary. At the heart of the corpus is the groundbreaking work from the late Qing materials,
        particularly an exceptional resource authored by a French military officer. This resource is distinctive as it
        documents the Cantonese language using the Vietnamese alphabet—a striking distinction from the conventional usage
        of the Latin alphabet. With its rich compendium of over 2,400 vocabulary items and more than 2,500 unique
        characters with pronunciation, this corpus serves as a bridge connecting researchers to a long-forgotten dialect
        of the Cantonese language.
      </p>

      <h6>Pre-processing Workflow: A Benchmark in Corpus Digitization</h6>
      <p class="text-body1">
        Constructing a comprehensive pre-processing workflow has been integral to transforming these historical materials
        into an accessible format. This workflow encompasses organized data curation, advanced optical character
        recognition (OCR), precise machine translation, and a Unicode rule-based algorithm for Vietnamese alphabet
        processing. The establishment and continuous improvement of a transcription scheme, known as Jyutping++, further
        exemplify the meticulous approach toward enhancing linguistic analysis.
      </p>

      <h6>Lingual Analysis and Digitization: Gateways to Linguistic Frontiers</h6>
      <p class="text-body1">
        The 27th International Conference on Yue Dialects was a pivotal moment for the project, marking the presentation
        of a paper that delves into the pre-processing and its significant implications for understanding Cantonese. The
        insights gained through this analytical process are crucial, revealing historical sound variations and tone
        mergers that enhance our comprehension of the Cantonese spoken at the Sino-Vietnamese border in the late 19th
        century.
      </p>

      <h6>Embracing Open Access for an Enlightened Future</h6>
      <p class="text-body1">
        In an era that champions the free exchange of knowledge, the decision to make the corpus widely accessible and
        eventually open source embodies a commitment to fostering global research collaboration. By providing an online
        platform with a query function, the corpus democratizes the access to information and invites linguistic
        enthusiasts and scholars alike to conduct their own explorations into this rich dialect.
      </p>
      <p class="text-body1">
        This corpus, therefore, not only encapsulates an invaluable section of linguistic history but also signifies a
        leap toward an inclusive and interconnected scholarly community. With the commitment to open-sourcing the database
        post further proofreading, the corpus aspires to be a beacon for future linguistic research and an enduring legacy
        for the digitization of rare linguistic materials.
      </p>
    </div>
    <div class="text-h5 q-my-lg q-mx-lg">
      Contact Us
    </div>
    <div class="q-my-lg q-mx-lg">
      <p class="text-body1">
        For any questions or comments, please contact us at <b>jyutjam@tutanota.com</b>.
      </p>
      <p class="text-body1">
        This project is supported by our personal passions. Source code is available on our <a
          href="https://github.com/JyutdictEB/GoTCorpus">GitHub page</a>.
      </p>
      <p class="text-body1">
        Friendly Links:
      <ul>
        <li>Jyutdict: <a href="https://jyutdict.org" target="_blank">https://jyutdict.org</a></li>
        <li>Lingnaam Jyutjam Homepage: <a href="https://jyutjam.org" target="_blank">https://jyutjam.org</a></li>
        <li>Jyutping++: <a href="https://jyutjam.org/j++/" target="_blank">https://jyutjam.org/j++</a></li>
        <li>Jyutping: <a href="https://jyutping.org" target="_blank">https://jyutping.org</a></li>
        <li>Jyutping Input Method: <a href="https://jyutping.net/" target="_blank">https://jyutping.net</a></li>
      </ul>
      </p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  components: {},
  setup() {
    return {};
  }
});
</script>