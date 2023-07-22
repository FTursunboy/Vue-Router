<template>
  <div>
    <h2 v-if="$route.params.mailId">{{email.theme}}</h2>
    <h2 v-else>Выберите запись</h2>

    <button class="btn">Закрыть</button>
  </div>
</template>

<script>
export default {

  data() {
    return {

    }
  },
  inject: ['emails'],
  props: {
    mailId: Number
  },



  computed: {
    email() {
      return this.emails.find(e => e.id === this.mailId)
    }
  }

}
</script>

<style scoped>

</style>