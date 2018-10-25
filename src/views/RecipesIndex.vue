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

        <button @click="setCurrentRecipe(recipe)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
          </div>
        </div>


      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{ currentRecipe.title }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul>
                <h5>By: {{ currentRecipe.chef }}</h5>
                <h4>Prep Time: {{ currentRecipe.formatted.prep_time }}</h4>

                <h4>Ingredients</h4>
                <ul>
                  <li v-for="ingredient in currentRecipe.formatted.ingredients">
                    {{ingredient}}
                  </li>
                </ul>
                <h4>Directions</h4>
                <ol>
                  <li v-for="direction in currentRecipe.formatted.directions">
                    {{direction}}
                  </li>
                </ol>

                <img class="img-thumbnail" v-bind:src="currentRecipe.image_url" v-bind:alt="currentRecipe.name">
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
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
      recipes: [],
      currentRecipe: {
        formatted: {}
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/recipes")
    .then(function(response) {
      this.recipes = response.data;
    }.bind(this));
  },
  methods: {
    setCurrentRecipe: function(inputRecipe) {
      this.currentRecipe = inputRecipe;
    }
  },
  computed: {}
};
</script>













