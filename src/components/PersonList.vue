<script lang="ts">
import { defineComponent } from 'vue';
import PersonComp from './Person.vue';
import { Person } from '../models/Person';
import people1k from '../testsets/people1k';
import people10k from '../testsets/people10k';

export default defineComponent({
    components: {
        PersonComp
    },

    data() {
        return {
            people: []
        }
    },

    created() {
        this.fetchData();
    },

    methods: {
        // getPeople(countInK) {
        //     let ppl = JSON.parse(people10k).results.slice(0, countInK * 1000);
        //     for (let idx in ppl) {
        //         ppl[idx].id = idx;
        //     }
        //     return ppl;
        // },
        fetchData() {
            // this.people = this.getPeople(1);
                    fetch("https://randomuser.me/api/?results=1000").then(function(response) {
            return response.json();
          }).then((data) => {
            this.people = data.results;
          });
        },
        onAddClick(event) {
            // this.people.push(...this.getPeople(1));
                    fetch("https://randomuser.me/api/?results=1000").then(function(response) {
            return response.json();
          }).then((data) => {
            this.people.push(...data.results);
          });
        },
        onAdd10Click(event) {
            // this.people.push(...this.getPeople(10));
            fetch("https://randomuser.me/api/?results=10000").then(function(response) {
            return response.json();
          }).then((data) => {
            this.people.push(...data.results);
          });
        },
        onUpdateClick(event) {
            let counter = 1;
            for (let person of this.people) {
                person.name.first = counter.toString();
                person.name.last = counter.toString();
                person.email = counter.toString();
                person.phone = counter.toString();
                counter++;
            }
        },
        onUpdate10Click(event) {
            let counter = 1;
            for (let person of this.people) {
                if (counter % 10 === 0) {
                    person.name.first = counter.toString();
                    person.name.last = counter.toString();
                    person.email = counter.toString();
                    person.phone = counter.toString();                    
                }
                counter++;
            }
        },
        onClearClick() {
            this.people = [];
        },
        swap2rows() {
            let i1 = 0;
            let i2 = 100;

            let temp = this.people[i1];
            this.people[i1] = this.people[i2];
            this.people[i2] = temp;  
        }
    }
});
</script>

<template>
    <button @click="onAddClick">Add 1k Rows</button>
    <button @click="onAdd10Click">Add 10k Rows</button>
    <button @click="onUpdateClick">Update All Rows</button>
    <button @click="onUpdate10Click">Update Every 10 Rows</button>
    <button @click="onClearClick">Clear All Rows</button>
    <br>
    <button @click="swap2rows">Swap 2 Rows</button>
    <p>Rows: {{people.length}}</p>
    <div v-for="person of people" :key="person.id">
        <PersonComp :person="person"></PersonComp>
        <hr>
    </div>
</template>

<style>

</style>