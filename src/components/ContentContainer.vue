<template>
  <div class="content__container">
    <Search />
    <SortBar :sort.sync="sort" />
    <ViewToggle :viewToggle.sync="viewToggle" />
    <LoadingSpinner v-if="isLoading" />
    <ListAssets v-if="listAssets.length" :items="listAssets" />
    <EmptyData v-else :isLoading="isLoading" />
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
import { mapActions, mapState } from 'vuex';
import Paginate from 'vuejs-paginate';
import httpAxios from '@/httpAxios';
import { Search } from '@/components/Search';
import { ViewToggle } from '@/components/ViewToggle';
import { ListAssets } from '@/components/ListAssets';
import { LoadingSpinner, EmptyData } from '@/components/common';
import { SortBar } from '@/components/SortBar';

export default {
  name: 'ContentContainer',

  components: {
    Search,
    ViewToggle,
    ListAssets,
    Paginate,
    LoadingSpinner,
    EmptyData,
    SortBar,
  },

  data() {
    return {
      isLoading: false,
      currentPage: 1,
      pageCount: 1,
      limit: 100,
      keyword: '',
      collection: {},
      viewToggle: 'all',
      sort: 'newest',
    };
  },

  computed: {
    ...mapState('collection', ['assets']),

    listAssets() {
      const sortedAsstes = this.sortAssets();
      if (this.viewToggle === this.$vConfig.VIEW_TOGGLE.ALL) {
        return sortedAsstes.filter(asset => !asset.data[0].remove);
      }
      if (this.viewToggle === this.$vConfig.VIEW_TOGGLE.LIKED) {
        return sortedAsstes.filter(asset => asset.data[0].like && !asset.data[0].remove);
      }
      if (this.viewToggle === this.$vConfig.VIEW_TOGGLE.REMOVED) {
        return sortedAsstes.filter(asset => asset.data[0].remove);
      }
      return sortedAsstes;
    },
  },

  created() {
    this.getListData();
    this.$eventBus.$on('searchByKeyword', this.searchByKeyword);
  },

  methods: {
    ...mapActions('collection', ['setAssets']),

    onChangeCurrentPage() {
      this.viewToggle = this.$vConfig.VIEW_TOGGLE.ALL;
      this.getListData();
      this.$scrollToTop();
    },

    searchByKeyword(keyword) {
      this.keyword = keyword;
      this.viewToggle = this.$vConfig.VIEW_TOGGLE.ALL;
      this.currentPage = 1;
      this.getListData();
    },

    getParams() {
      const now = new Date();
      const nowYear = now.getFullYear();
      let params = {
        page: this.currentPage,
        year_start: 1,
        year_end: nowYear,
      };
      if (this.keyword) {
        params = {
          page: this.currentPage,
          q: this.keyword,
        };
      }
      return params;
    },

    getListData() {
      const params = this.getParams();
      this.isLoading = true;
      httpAxios({
        url: `${this.$backendUrl}/search`,
        method: 'GET',
        params,
      })
        .then(response => {
          this.collection = response.data.collection;
          const { items, metadata } = this.collection;
          this.setAssets(items);
          localStorage.listAssets = JSON.stringify(items);
          this.pageCount = Math.ceil(metadata.total_hits / this.limit);
        })
        .catch(e => {
          console.log(e);
          this.$router.push('Error404');
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    sortAssets() {
      const newAssets = [...this.assets];
      if (this.sort === this.$vConfig.SORT.NEWEST) {
        newAssets.sort((a, b) => {
          const dateA = new Date(a.data[0].date_created);
          const dateB = new Date(b.data[0].date_created);
          return dateB - dateA;
        });
        return newAssets;
      }
      if (this.sort === this.$vConfig.SORT.OLDEST) {
        newAssets.sort((a, b) => {
          const dateA = new Date(a.data[0].date_created);
          const dateB = new Date(b.data[0].date_created);
          return dateA - dateB;
        });
        return newAssets;
      }
      if (this.sort === this.$vConfig.SORT.ATOZ) {
        newAssets.sort((a, b) => `${a.data[0].title}`.localeCompare(b.data[0].title));
        return newAssets;
      }
      if (this.sort === this.$vConfig.SORT.ZTOA) {
        newAssets.sort((a, b) => `${b.data[0].title}`.localeCompare(a.data[0].title));
        return newAssets;
      }
      return newAssets;
    },
  },

  beforeDestroy() {
    this.$eventBus.$off('searchByKeyword', this.searchByKeyword);
  },
};
</script>
