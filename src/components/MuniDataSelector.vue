<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    years : Array,
    areas : Array,
    ages: Array,
    selectedYear: String,
    selectedArea: String,
    selectedAge: String,
});

const emit = defineEmits(['update:selectedYear', 'update:selectedArea', 'update:selectedAge']);

const updateYear = (event) => {
    emit('update:selectedYear', event.target.value);
};

const updateArea = (event) => {
    emit('update:selectedArea', event.target.value);
};

const updateAge = (event) => {
    emit('update:selectedAge', event.target.value);
}

</script>

<template>
    <div>
        <label>
            Vuosi:
            <select :value="selectedYear" @change="updateYear">
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
        </label>

        <label>
            Kunta:
            <select :value="selectedArea" @change="updateArea">
                <option v-for="area in areas" :key="area" :value="area">{{ area }}</option>
            </select>
        </label>

        <label>
            Ikäryhmä:
            <select :value="selectedAge" @change="updateAge">
                <option v-for="age in ages" :key="age" :value="age"> {{ age }}</option>
            </select>
        </label>
    </div>
</template>

<style scoped>
    select {
        font-size: 1.4em;
    }
</style>