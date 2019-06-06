<template>
    <section>
        <v-layout justify-center row wrap>
            <v-flex xs12 md8>
                <v-card>
                    <v-card-title primary-title>
                        <v-flex xs12 sm6>
                        <div>
                            <h1 class="headline">Your LegoLog</h1>
                            <p>You currently have {{catalogue.length}} sets.</p>
                        </div>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Search"
                                single-line
                                hide-details></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-data-table
                                :headers="headers"
                                :items="catalogue"
                                :search="search">
                                <template v-slot:items="props">
                                    <tr @click="itemClicked(props.item)">
                                        <td>{{props.item.id}}</td>
                                        <td>{{props.item.set}}</td>
                                    </tr>
                                </template>
                            </v-data-table>
                        </v-flex>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </section>
</template>
<style scoped>
tr {
    cursor: pointer;
}
</style>

<script>
import catalogue from '@/shared/catalogue';

export default {
    name: "CatalogueList",
    data() {
        return {
            catalogue: catalogue.items,
            headers: [
                { text: 'ID', align: 'left', sortable: true, value: 'id' },
                { text: 'Set', align: 'left', sortable: true, value: 'set' }
            ],
            search: ''
        }
    },
    methods: {
        itemClicked: function(item) {
            console.log(item.id);
        }
    }
}
</script>

