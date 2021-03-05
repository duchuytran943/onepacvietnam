<template>
  <div class="content__container">
    <Search />
    <ViewToggle />
    <ListAssets />
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
