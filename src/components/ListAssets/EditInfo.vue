<template>
  <div class="edit-info__container">
    <table class="info__inner">
      <tr>
        <td class="property">
          <p>{{ $t('general.info.title') }}:</p>
        </td>
        <td class="value">
          <input v-model="newInfo.title" type="text" class="value__inner" />
        </td>
      </tr>
      <!-- <tr>
        <td class="property">
          <p>{{ $t('general.info.dateCreated') }}:</p>
        </td>
        <td class="value">
          <input v-model="newInfo.date_created" type="date" class="value__inner" />
        </td>
      </tr> -->
      <tr>
        <td class="property">
          <p>{{ $t('general.info.description') }}:</p>
        </td>
        <td class="value">
          <textarea v-model="newInfo.description" rows="6" class="value__inner" />
        </td>
      </tr>
      <tr>
        <td class="property">
          <p>{{ $t('general.info.location') }}:</p>
        </td>
        <td class="value">
          <input v-model="newInfo.location" type="text" class="value__inner" />
        </td>
      </tr>
      <!-- <tr>
        <td class="property">
          <p>{{ $t('general.info.mediaType') }}:</p>
        </td>
        <td class="value">
          <input v-model="newInfo.media_type" type="text" class="value__inner" />
        </td>
      </tr> -->
      <!-- <tr>
        <td class="property">
          <p>{{ $t('general.info.keywords') }}:</p>
        </td>
        <td class="value">
          <input v-model="newInfo.keywords" type="text" class="value__inner" />
        </td>
      </tr> -->
    </table>

    <div class="edit-info__footer">
      <button class="btn btn--cancel" @click="closeModal()">{{ $t('general.cancel') }}</button>
      <button class="btn btn--save" @click="updateEdit()">{{ $t('general.save') }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {},

  props: {
    item: Object,
    showEditModal: Boolean,
  },

  data() {
    return {
      newInfo: {},
    };
  },

  computed: {
    info() {
      return this.item.data[0];
    },
  },

  created() {
    this.cloneInfo();
  },

  methods: {
    ...mapActions('collection', ['updateAsset']),

    cloneInfo() {
      this.newInfo = { ...this.info };
    },

    closeModal() {
      this.$emit('update:showEditModal', false);
    },

    updateEdit() {
      // eslint-disable-next-line no-alert
      const confirm = window.confirm(`${this.$t('general.areYouSure')}`);
      if (confirm) {
        const asset = { ...this.item, data: [{ ...this.newInfo }] };
        this.updateAsset(asset);
        this.closeModal();
      }
    },
  },
};
</script>
