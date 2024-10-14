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

const emit = defineEmits(['emit:SelectedYear', 'update:SelectedArea', 'update:SelectedAge']);

const updateYear = (event) => {
    emit(updateSelectedYear, event.target.value);
};

const updateArea = (event) => {
    emit(updateSelectedArea, event.target.value);
};

const updateAge = (event) => {
    emit(updateSelectedAge, event.target.value);
}

</script>

<template>
    <div>
        <label>
            Year:
            <wa-select :value="selectedYear" @change="UpdateYear">
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </wa-select>
        </label>

        <label>
            Area:
            <wa-select :value="selectedArea" @change="UpdateArea">
                <option v-for="area in areas" :key="area" :value="area">{{ area }}</option>
            </wa-select>
        </label>

        <label>
            Age:
            <wa-select :value="selectedAge" @change="UpdateAge">
                <option v-for="age in ages" :key="age" :value="age"></option>
            </wa-select>
        </label>
    </div>
</template>