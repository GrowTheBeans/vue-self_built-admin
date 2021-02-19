<template>
  <div class="Layout">
    <v-header />
    <v-menu />
    <v-footer />
  </div>
</template>

<script>
import Header from './Header/index.vue';
import Menu from './Menu/index.vue';
import Footer from './Footer/index.vue';

export default {
  name: 'Layout',
  components: {
    'v-header': Header,
    'v-menu': Menu,
    'v-footer': Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
