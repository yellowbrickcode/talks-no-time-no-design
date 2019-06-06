<template>
    <section id="content">
        <h1>Your LegoLog</h1>
        <p>
            You currently have {{catalogue.length}} sets.
        </p>
        <ul>
            <li v-for="item in catalogue" :key="item.id" @click="itemClicked">
                <section id="id">{{item.id}}</section>
                <section id="theme">{{item.theme}}</section>
                <section id="set">{{item.set}}</section>
                <section id="pieces">{{item.pieces}}</section>
                <section id="built">
                    <span v-if="item.built">Yes</span>
                    <span v-if="!item.built">No</span>
                </section>
            </li> 
        </ul>
      </section>
</template>
<style scoped>
#content {
  grid-column: inner-col-start 3 / span 8;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    border: 1px solid #0D47A1;
    padding: 1rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(12, [item-col-start] 1fr);
}

li:hover {
    background-color: #E3F2FD;
    cursor: pointer;
}

#id {
    grid-column: item-col-start / span 1;
    grid-row: 1/1;
}

#theme {
    grid-column: item-col-start 2 / span 3;
    grid-row: 1/1;
}

#set {
    grid-column: item-col-start 5 / span 5;
    grid-row: 1/1;
}

#pieces {
    grid-column: item-col-start 10 / span 2;
    grid-row: 1/1;
}

#built {
    grid-column: item-col-start 12 / span 1;
    grid-row: 1/1;
}
</style>
<script>
import catalogue from '@/shared/catalogue';

export default {
    name: 'CatalogueList',
    data() {
      return {
        catalogue: catalogue.items
      }
    },
    methods: {
        itemClicked: function(event) {
            console.log(event);
        }
    }
}
</script>
