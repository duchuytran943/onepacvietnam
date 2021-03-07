<template>
  <div class="info__container">
    <table class="info__inner">
      <tr v-if="title">
        <td class="property">
          <p>{{ $t('general.info.title') }}:</p>
        </td>
        <td class="value">
          <p>{{ title }}</p>
        </td>
      </tr>
      <tr v-if="dateCreated">
        <td class="property">
          <p>{{ $t('general.info.dateCreated') }}:</p>
        </td>
        <td class="value">
          <p>{{ dateCreated }}</p>
        </td>
      </tr>
      <tr v-if="description">
        <td class="property">
          <p>{{ $t('general.info.description') }}:</p>
        </td>
        <td class="value">
          <p>{{ description }}</p>
        </td>
      </tr>
      <tr v-if="location">
        <td class="property">
          <p>{{ $t('general.info.location') }}:</p>
        </td>
        <td class="value">
          <p>{{ location }}</p>
        </td>
      </tr>
      <tr v-if="mediaType">
        <td class="property">
          <p>{{ $t('general.info.mediaType') }}:</p>
        </td>
        <td class="value">
          <p>{{ mediaType }}</p>
        </td>
      </tr>
      <tr v-if="keywords">
        <td class="property">
          <p>{{ $t('general.info.keywords') }}:</p>
        </td>
        <td class="value">
          <p>{{ keywords }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    item: Object,
  },

  data() {
    return {};
  },

  computed: {
    info() {
      return this.item.data[0];
    },

    title() {
      return this.info.title;
    },

    dateCreated() {
      return this.info.date_created && new Date(this.info.date_created).toUTCString();
    },

    description() {
      return this.info.description;
    },

    location() {
      return this.info.location;
    },

    mediaType() {
      return this.info.media_type;
    },

    keywords() {
      if (!this.info.keywords) {
        return '';
      }
      const displayKeywords = this.info.keywords.join(' | ');
      return displayKeywords;
    },
  },

  created() {},

  methods: {},
};
</script>
