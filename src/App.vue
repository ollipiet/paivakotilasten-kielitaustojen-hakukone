<script setup>
import { ref, computed } from 'vue';

/* Kokeilin lisätä myös komponenttityylejä Web Component -kirjastosta, mutta en saanut tätä sen pidemmälle 
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.4/dist/components/select/select.js';*/

import MuniDataSelector from "./components/MuniDataSelector.vue";

import kuntaData from './assets/data.json';
/*
const kuntaData = { 
  "columns": [
    {"code":"Vuosi","text":"Vuosi","type":"t"},
    {"code":"Alue","text":"Alue","type":"d"},
    {"code":"Ikä","text":"Ikä","type":"d"},
    {"code":"vaka_lapsi_lkm","text":"Varhaiskasvatukseen osallistuneet lapset","type":"c"},
    {"code":"ulko","text":"Ulkomaalaiset varhaiskasvatukseen osallistuneet lapset","type":"c"},
    {"code":"vko","text":"Vieraskieliset varhaiskasvatukseen osallistuneet lapset","type":"c"}
  ],
  "comments": [],
  "data": [
    {"key":["2022","KU020","SSS"],"values":["534","19","23"]},
    {"key":["2022","KU005","SSS"],"values":["283","10","12"]},
    {"key":["2022","KU009","SSS"],"values":["104","5","5"]},
    {"key":["2022","KU010","SSS"],"values":["505","16","21"]},
    {"key":["2022","KU016","SSS"],"values":["249","9","9"]},
    {"key":["2022","KU018","SSS"],"values":["244","1","3"]},
    {"key":["2022","KU019","SSS"],"values":["215","2","2"]},
    {"key":["2022","KU046","SSS"],"values":["36","1","3"]}
  ]
}; */

const selectedYear = ref('2022');
const selectedArea = ref('Akaa');
const selectedAge = ref('Kaikki ikäluokat');

const filteredData = computed(() => {
  return kuntaData.data.filter(item => item.key[0] === selectedYear.value && 
    (selectedArea.value === '' || item.key[1] === selectedArea.value) && (item.key[2] === selectedAge.value)  
   );
});

const areas = computed(() => {
  return [...new Set(kuntaData.data.map(item => item.key[1]))];
});
</script>

<template>
  <div>
    <h1>Vieraskielisten päiväkotilasten kone</h1>
    <MuniDataSelector
      :years="['2022']"
      :areas="areas"
      :ages="['Kaikki ikäluokat']"
      v-model:selectedYear="selectedYear"
      v-model:selectedArea="selectedArea"
      v-model:selectedAge="selectedAge"
    />
    <div v-if="filteredData.length > 0">
      <h2>Selected Data:</h2>
      <ul>
        <li v-for="item in filteredData" :key="item.key.join('-')">
          Alue: {{ item.key[1] }}, 
          Yhteensä: {{ item.values[0] }}, 
          Ulkomaisia: {{ item.values[1] }}, 
          Vieraskielisiä: {{ item.values[2] }}
        </li>
      </ul>
    </div>
    <div v-else>
      Dataa ei löytynyt valinnoilla.
    </div>
  </div>
  <div><p>Vuonna 2022 vieraskielisten opetukseen osallistuvien oppilaiden mediaani oli <b>7 oppilasta</b> Suomen kunnista.</p></div>
</template>

<style scoped>

</style>
