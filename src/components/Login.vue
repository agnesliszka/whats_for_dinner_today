<template>
  <v-parallax
    height="665"
    src="https://bloximages.chicago2.vip.townnews.com/postregister.com/content/tncms/assets/v3/editorial/8/58/85810653-a184-5a1b-939f-c3e17e47e0ff/5bef4e5449b9b.image.jpg?resize=1200%2C800"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header" style="color: black; text-align: center">Login</div>
            <div class="card-body">
              <div v-if="error" class="alert alert-danger">{{error}}</div>
              <form action="#" @submit.prevent="submit">
                <div class="form-group row">
                  <label
                    for="email"
                    style="color: black"
                    class="col-md-4 col-form-label text-md-right"
                  >Email</label>

                  <div class="col-md-6">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      value
                      required
                      autofocus
                      v-model="form.email"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="password"
                    style="color: black"
                    class="col-md-4 col-form-label text-md-right"
                  >Password</label>

                  <div class="col-md-6">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      required
                      v-model="form.password"
                    />
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-parallax>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(this.$router.replace({ name: "pickADish" }))
        .catch(err => {
          console.log("nie wlazl");
          this.$router.replace({ name: "main" });
          this.error = err.message;
        });
    }
  }
};
</script>
