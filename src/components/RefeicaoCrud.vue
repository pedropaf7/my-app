<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>RefeiçãoCrud</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          dense
          :headers="headers"
          :items="refeicoes"
          item-key="id"
          class="elevation-1"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "RefeicoesCrud",
  data: () => ({
    headers: [
      {text: "ID", value: "id"},
      {text: "Nome", value: "nome"},
      {text: "Caloria", value: "caloria"},
      {text: "Preço", value: "preco"},
      {text: "Tipo", value: "tipo"},
    ],
    refeicoes: [
      { id: 1, 
        nome: "", 
        caloria: 2.5, 
        preco: 1.99, 
        tipo: ""
      }
    ],
  }),
  methods: {
    inicializa() {
      axios("http://localhost:3000/refeicoes")
        .then((response) => {
          this.refeicoes = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.inicializa();
  },
};
</script>
<style scoped></style>