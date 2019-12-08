<template>
  <div>
    <h4>Loading...</h4>
  </div>
</template>

<script>
export default {
  mounted() {
    let code = this.$route.query.code;
    this.$axios
      .$get(`${process.env.BASE_API_URL}/auth/login/callback?code=${code}`)
      .then(res => {
        this.$store.commit('saveUser', res.user.user)
        this.$router.push('/')
      })
      .catch(err => console.log(err));
  }
};
</script>

<style></style>
