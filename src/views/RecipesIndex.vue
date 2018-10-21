<template>
  <div class="recipes-index">
    <div class="row">
      <div class="col-md-4" v-for="recipe in recipes">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" v-bind:src="recipe.image_url" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ recipe.title }}</h5>
            <p class="card-text">Prep Time: {{ recipe.formatted.prep_time }}</p>
            <div class="card-text">
              <ul>
                <li v-for="ingredient in recipe.formatted.ingredients">{{ ingredient }}</li>
              </ul>
            </div>
            <div>
              <router-link class="btn btn-primary" v-bind:to="'/recipes/' + recipe.id">More Info</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      recipes: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/recipes")
    .then(function(response) {
      this.recipes = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>













