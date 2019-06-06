<template>
  <v-app>
    <v-toolbar app dark color="blue">
      <v-toolbar-title>LegoLog</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/catalogue">Catalogue</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-autocomplete
          :items="results"
          item-text="set"
          item-value="id"
          no-data-text="No sets found"
          append-icon="search"
          clearable
          dark
          placeholder="Search..."
          :search-input.sync="searchTerm">
        </v-autocomplete>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import catalogue from '@/shared/catalogue';

export default {
  name: 'App',
  data () {
    return {
      catalogue: catalogue.items,
      searchTerm: '',
    }
  },
  computed: {
    results: function() {
      let searchResults = [];
      if(this.searchTerm) {
        searchResults = this.catalogue.filter(result => result.set.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
      return searchResults;
    }
  }
}
</script>
