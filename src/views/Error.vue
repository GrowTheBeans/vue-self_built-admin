<template>
  <div class="error">
    <img src="../assets/404.png" alt="404" />
  </div>
</template>

<script>
export default {
  name: "Error",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 349px;
    height: 190px;
  }
}
</style>
