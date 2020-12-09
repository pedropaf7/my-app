<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>ClienteCrud</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          dense
          :headers="headers"
          :items="clientes"
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
  name: "ClientesCrud",
  data: () => ({
    headers: [
      {text: "ID", value: "id"},
      {text: "Nome", value: "nome"},
      {text: "Telefone", value: "telefone"},
      {text: "Endereço", value: "endereco"},
      {text: "E-mail", value: "email"},
      {text: "Refeições", value: "refeicoes"},
    ],
    clientes: [
        {id: 1, 
        nome: "", 
        telefone: 2285664852, 
        endereco: "", 
        email: "",
        refeicoes: [""]}
    ],
  }),
  methods: {
    inicializa() {
      axios("http://localhost:3000/clientes")
        .then((response) => {
          this.clientes = response.data;
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