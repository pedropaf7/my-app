<template>
  <v-container>
    <v-row>
      <v-col class="mb-5"></v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table 
          dense
          :headers="headers"
          :items="clientes"
          :items-per-page="10"
          item-key="id"
          class="elevation-1"
        >
        <template v-slot:top>
          <v-toolbar flat dense>
            <v-toolbar-title>Cliente CRUD</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{on, attrs}">
                <v-btn color="primary" dark class="mb-0" v-bind="attrs" v-on="on">
                  Add
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{formTitle}}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.id"
                          label="ID">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nome"
                          label="Nome">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.telefone"
                          label="Telefone">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.endereco"
                          label="Endereço">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.email"
                          label="E-mail">
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{item}">
          <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>  
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ClienteCrud",
  data: () => ({
    dialog: false,
    headers: [
      {text: "ID", value: "id"},
      {text: "Nome", value: "nome"},
      {text: "Telefone", value: "telefone"},
      {text: "Endereço", value: "endereco"},
      {text: "E-mail", value: "email"},
      {text: "Ações", value: "actions", sortable: false},
    ],
    clientes: [
      { id: 0, 
        nome: "", 
        telefone: "", 
        endereco: "", 
        email: ""
      }
    ],
    editedIndex: -1,
    editedItem:{
      id: 0, 
      nome: "", 
      telefone: "", 
      endereco: "", 
      email: ""
    },
    defaultItem:{
      id: 0, 
      nome: "", 
      telefone: "", 
      endereco: "", 
      email: ""
    },
  }),
  methods: {
    inicializa() {
      axios("http://localhost:3000/clientes")
        .then((response) => {
          this.clientes = response.data;
        })
        .catch((error) => console.log(error));
    },
    close(){
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save(){
      if(this.editedIndex > -1){
        axios
        .put(
          "http://localhost:3000/clientes/" + this.editedItem.id,
          this.editedItem
        )
        .then((response) => {
          console.log(response);
          Object.assign(this.clientes[this.editedIndex], this.editedItem);
          this.close();
        }) 
        .catch((error) => console.log(error));
      }else{
        axios
          .post("http://localhost:3000/clientes/", this.editedItem)
          .then((response) => {
            console.log(response);
            this.clientes.push(this.editedItem);
            this.close();
          })
          .catch((error) => console.log(error));
      }
    },
    editItem(item){
      this.editedIndex = this.clientes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item){
      const index = this.clientes.indexOf(item);
      confirm("Deseja realmente deletar esse item?") &&
        axios.delete("http://localhost:3000/clientes/" + item.id)
      .then((response) => {
          console.log(response.data);
          this.clientes.splice(index, 1); 
      }).catch((error) => console.log(error));
    },
  },
  computed:{
    formTitle() {
      return this.editedIndex === -1 ? "Novo Item" : "Editar Item";
    },
  },

  watch: {
    dialog(val){
      val || this.close();
    },
    dialogDelete(val){
      val || this.closeDelete();
    },
  },
  created() {
    this.inicializa();
  },
};
</script>
<style scoped></style>