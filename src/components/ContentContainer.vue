<template>
  <div class="content__container">
    <Search />
    <ViewToggle />
    <ListAssets />
    <Paginate
      v-model="page"
      :page-count="pageCount"
      :margin-pages="1"
      :page-range="5"
      :click-handler="onChangePage"
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
    ></Paginate>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate';
import { Search } from '@/components/Search';
import { ViewToggle } from '@/components/ViewToggle';
import { ListAssets } from '@/components/ListAssets';

export default {
  name: 'ContentContainer',

  components: {
    Search,
    ViewToggle,
    ListAssets,
    Paginate,
  },

  data() {
    return {
      page: 500,
      pageCount: 1000,
    };
  },

  created() {},

  methods: {
    onChangePage() {
      console.log('onChangePage');
    },
  },
};
</script>
