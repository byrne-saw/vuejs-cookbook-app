<template>
  <div class="recipes-show">
    <h1>{{ recipe.title }}</h1>
    <h5>By: {{ recipe.chef }}</h5>
    <h4>Prep Time: {{ recipe.formatted.prep_time }}</h4>

    <h4>Ingredients</h4>
    <ul>
      <li v-for="ingredient in recipe.formatted.ingredients">
        {{ingredient}}
      </li>
    </ul>
    <h4>Directions</h4>
    <ol>
      <li v-for="direction in recipe.formatted.directions">
        {{direction}}
      </li>
    </ol>

    <img v-bind:src="recipe.image_url" v-bind:alt="recipe.name">
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      recipe: {
        formatted: {
          ingredients: [],
          directions: [],
          prep_time: ""
        }
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/recipes/" + this.$route.params.id)
    .then(response => {
      this.recipe = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>