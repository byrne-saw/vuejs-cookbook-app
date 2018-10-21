<template>
  <div class="recipes-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Create a Recipe</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Title:</label> 
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="form-group">
          <label>Ingredients:</label>
          <input type="text" class="form-control" v-model="ingredients">
          <h6>Input ingredients as a list seperated by comma and a space</h6>
        </div>
        <div class="form-group">
          <label>Directions:</label>
          <input type="text" class="form-control" v-model="directions">
          <h6>Input directions as a list seperated by comma and a space</h6>
        </div>
        <div class="form-group">
          <label>Prep Time:</label>
          <input type="text" class="form-control" v-model="prepTime">
        </div>
        <div class="form-group">
          <label>Image URL:</label>
          <input type="text" class="form-control" v-model="imageURL">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      ingredients: "",
      directions: "",
      prepTime: "",
      imageURL: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        ingredients: this.ingredients,
        directions: this.directions,
        prep_time: this.prepTime,
        image_url: this.imageURL
      };
      axios
        .post("http://localhost:3000/api/recipes", params)
        .then(response => {
          this.$router.push("/recipes/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>