<template>
  <div class="thumbnail__container">
    <img v-lazy="link" class="thumbnail" />
    <ul class="action">
      <li class="action__item" :class="{ active: item.data[0].like }" @click="onClickLike()">
        {{ item.data[0].like ? $t('general.action.unLike') : $t('general.action.like') }}
        <span v-if="item.data[0].like"> +1</span>
      </li>
      <li class="action__item" @click="onClickEdit()">{{ $t('general.action.edit') }}</li>
      <li class="action__item" @click="onClickRemove()">
        {{ item.data[0].remove ? $t('general.action.undo') : $t('general.action.remove') }}
      </li>
    </ul>
    <Modal v-if="showEditModal">
      <template v-slot:header>
        <h3>Edit Info</h3>
      </template>
      <template v-slot:body>
        <EditInfo :item="item" :showEditModal.sync="showEditModal" />
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Modal } from '@/components/common';
import EditInfo from './EditInfo.vue';

export default {
  name: 'ItemThumbnail',

  components: {
    Modal,
    EditInfo,
  },

  props: {
    item: Object,
  },

  data() {
    return {
      showEditModal: false,
    };
  },

  computed: {
    link() {
      const link = this.item.links && this.item.links.filter(l => l.rel === 'preview');
      return link && link[0].href;
    },
  },

  created() {},

  methods: {
    ...mapActions('collection', ['updateAsset']),

    onClickLike() {
      const asset = { ...this.item };
      asset.data[0].like = !asset.data[0].like;
      this.updateAsset(asset);
    },

    onClickRemove() {
      // eslint-disable-next-line no-alert
      const confirm = window.confirm(`${this.$t('general.areYouSure')}`);
      if (confirm) {
        const asset = { ...this.item };
        asset.data[0].remove = !asset.data[0].remove;
        this.updateAsset(asset);
      }
    },

    onClickEdit() {
      this.showEditModal = true;
    },

    onCloseModal() {
      this.showEditModal = false;
    },
  },
};
</script>
