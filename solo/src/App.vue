<template>
  <div id="app">
    <nav>
      <a href="/">Home</a>
    </nav>
    <section id="main-content">
      <section id="sidebar">
        Sidebar
      </section>
      <section id="content">
        Content
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
}

#sidebar {
  grid-column: col-start / span 3;
}

#content {
  grid-column: col-start 4 / span 9;
}
</style>
