<template>
  <div id="app">
    <nav>
      <span>LegoLog </span> 
      <a href="/">Home</a>
    </nav>
    <section id="main-content">
      <section id="content">
        <h1>Welcome to the LegoLog!</h1>
        <p>Catalogue all of your personal Lego sets to keep track of what you have, what you've built and what's yet to be built.</p>
      </section>
    </section>
  </div>
</template>

<style>
#app {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 1rem;
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

#main-content {
  grid-row: 2 / 2;
  grid-column: col-start / span 12;
}

#content {
  grid-column: col-start 2 / span 8;
}
</style>
