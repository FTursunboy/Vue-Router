<template>
  <div>
    <h2>{{email}}</h2>

    <button class="btn">Закрыть</button>
  </div>
</template>

<script>
export default {

  inject: ['emails'],
  props: ['mailId'],
  computed: {
    email() {
      return this.emails.find(e => e.id === this.mailId);
    }
  }

}
</script>

<style scoped>

</style>