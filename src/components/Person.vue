<template>
    <div
        class="container"
        v-bind:class="{ selected: isSelected }"
        @click="isSelected = !isSelected">
        <div style="display: flex;">
            <div style="display: inline-block">
            <!-- <img :src="person.picture.medium" alt=""> -->
            <!-- <img style="height: 70px" src="file:///C:/Users/Eriks/Documents/Macibas/LU/Bakalaura darbs/projekti_perf/vue-perf/dist/user-pic.png" alt="" /> -->
            <!-- <img style="height: 70px" src="./assets/user-pic.png" alt="" /> -->
            <!-- <img style="height: 70px" src="@/assets/user-pic.png" alt="" /> -->
            </div>
            <div style="display: inline-block; padding-left: 15px; padding-top: 9px">
            <strong>Name: {{person.name.title}} {{person.name.first}} {{person.name.last}}</strong>
            <div>Gender: {{person.gender}}</div>
            <div>Age: {{person.dob.age}}</div>    
            </div>
        </div>

        <div style="padding-top: 10px">E-Mail: {{person.email}}</div>
        <div>Phone: {{person.phone}}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Person } from '../models/Person';

export default defineComponent({
    props: ['person'],
    data() {
        return {
            isSelected: false
        }
    }
    /*props: {
        person: Person
    }*/
});
</script>

<style>
    .container:hover {
        background-color: rgb(228, 255, 226);
    }

    .selected {
        background-color: lightgreen !important;
    }
</style>