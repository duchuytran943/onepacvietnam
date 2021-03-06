<template>
  <div class="content__container">
    <Search />
    <ViewToggle />
    <LoadingSpinner v-if="isLoading" />
    <ListAssets :items="items" />
    <Paginate
      v-model="currentPage"
      :page-count="pageCount"
      :margin-pages="1"
      :page-range="5"
      :click-handler="onChangeCurrentPage"
      :container-class="'c-pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link-item'"
      :prev-text="$t('general.paginate.prev')"
      :prev-class="'page-item'"
      :prev-link-class="'page-link-item'"
      :next-text="$t('general.paginate.next')"
      :next-class="'page-item'"
      :next-link-class="'page-link-item'"
      :break-view-class="'break-view'"
      :break-view-link-class="'break-view-link'"
    />
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate';
import httpAxios from '@/httpAxios';
import { Search } from '@/components/Search';
import { ViewToggle } from '@/components/ViewToggle';
import { ListAssets } from '@/components/ListAssets';
import { LoadingSpinner } from '@/components/common';

export default {
  name: 'ContentContainer',

  components: {
    Search,
    ViewToggle,
    ListAssets,
    Paginate,
    LoadingSpinner,
  },

  data() {
    return {
      isLoading: false,
      currentPage: 1,
      pageCount: 1,
      limit: 100,
      items: [],
    };
  },

  computed: {},

  created() {
    this.getListData();
  },

  methods: {
    onChangeCurrentPage() {
      this.getListData();
    },

    getListData() {
      const now = new Date();
      const nowYear = now.getFullYear();
      const params = {
        page: this.currentPage,
        year_start: 1,
        year_end: nowYear,
      };

      this.isLoading = true;
      httpAxios({
        url: `${this.$backendUrl}/search`,
        method: 'GET',
        params,
      })
        .then(response => {
          const { items, metadata } = response.data.collection;
          this.items = items;
          this.pageCount = Math.ceil(metadata.total_hits / this.limit);
        })
        .catch(() => {
          this.$router.push({ name: 'Error404' });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
