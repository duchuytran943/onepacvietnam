<template>
  <div class="content__container">
    <Search />
    <div class="content__wrap">
      <ViewToggle />
      <ListAssets />
    </div>
  </div>
</template>

<script>
import { Search } from '@/components/Search';
import { ViewToggle } from '@/components/ViewToggle';
import { ListAssets } from '@/components/ListAssets';

export default {
  name: 'ContentContainer',

  components: {
    Search,
    ViewToggle,
    ListAssets,
  },

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
