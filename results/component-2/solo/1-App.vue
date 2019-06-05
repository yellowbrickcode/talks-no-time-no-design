<template>
  <div id="app">
    <nav>
      <span>LegoLog </span> 
      <!-- <a to="/">Home</a> -->
      <router-link to="/">Home</router-link>
      <input id="search" type="text" placeholder="Search..." autocomplete="off" />
    </nav>
    <section id="main-content">
      <router-view></router-view>
    </section>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

nav {
  background-color: #2196F3;
  grid-column: col-start / span 12;
  padding: 1rem;
  grid-row: 1 / 2;
}

nav > a {
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
}

nav > a.router-link-active {
  background-color: #42A5F5;
}

#main-content {
  grid-column: col-start / span 12;
  grid-row: 2 / 2;
  display: grid;
  grid-template-columns: repeat(12, [inner-col-start] 1fr);
}

input {
  border-radius: 0.25rem;
  border: 1px solid #0D47A1;
  padding: 0.5rem;
}

#search {
  float: right;
}
</style>
