<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 card p-5 mt-5">
        <div v-if="$store.state.user.name" class="text-center">
          <h3>Hello {{ $store.state.user.name }}</h3>
          <p>Visit me on <a href="">{{$store.state.user.html_url}}</a></p>
        </div>
        <div v-else>
          <h3>Hi, Plase Login First</h3>
          <button class="btn btn-primary mt-3" @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      window.location.href = `${process.env.BASE_API_URL}/auth/login`;
    }
  }
};
</script>

<style></style>
