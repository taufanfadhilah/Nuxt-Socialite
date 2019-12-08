<template>
  <div>
    <h4>Hi {{ user.name }}</h4>
    <p>Youre logged by Github</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    let code = this.$route.query.code;
    this.$axios
      .$get(`${process.env.BASE_API_URL}/auth/login/callback?code=${code}`)
      .then(res => (this.user = res.user))
      .catch(err => console.log(err));
  }
};
</script>

<style></style>
