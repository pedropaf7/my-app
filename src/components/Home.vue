<template>
  <v-card >
    <v-row>
      <v-col class="mb-10"></v-col>
    </v-row>
        <v-app-bar id="nav-bar"  color="#385F73" dark>
          <v-toolbar-title>
            <h3 v-if="lista1">Monte sua refeição</h3>
            <h3 v-else class="amber--text">Sua refeição | Total: R$ {{total}}</h3>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn v-if="off" @click="voltar()" color="blue" class="black--text">voltar</v-btn>
          <v-btn v-if="lista1"  @click="showCarrinho()" color="red">Check-out</v-btn>
          <v-btn  @click="limpar()" text>Limpar</v-btn>
          <v-btn v-if="off"  @click="finalizar()" class="red--text" color="yellow">Finalizar</v-btn>
          <div v-if="lista1">
            <v-btn icon>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
              <v-btn>R$ {{total}}</v-btn>
          </div>
        </v-app-bar>

    <v-container v-if="lista1">
      <v-row dense>
        <v-col v-for="(ref, i) in refeicoes" :key="i" cols="8">
          <v-card id="cards">
            <div class="d-flex flex-no-wrap justify-space-between" >
              <div>
                <v-card-title class="headline" v-text="ref.nome"></v-card-title>
                <v-card-text class="text--primary">
                  <div v-text="ref.tipo"></div>
                  <div v-text="ref.caloria+' kcal'"></div><br>
                  <div class="display-1 text--primary" v-text="'R$ '+ref.preco"></div>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="addRefeicao(ref.preco, ref)" class="mx-2" fab dark small color="blue darken-4" >
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                  <v-btn @click="deleteRefeicao(ref.preco, ref)" class="mx-2" fab dark small color="red accent-4" >
                    <v-icon dark>mdi-minus</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3"  size="125" tile>
                <v-img :src="ref.imagem"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-show="off">
      <v-row dense>
        <v-col v-for="(ref, i) in carrinho" :key="i" cols="8">
          <v-card id="cards">
            <div class="d-flex flex-no-wrap justify-space-between" >
              <div>
                <v-card-title class="headline" v-text="ref.nome"></v-card-title>
                <v-card-text class="text--primary">
                  <div v-text="ref.tipo"></div>
                  <div v-text="ref.caloria+' kcal'"></div><br>
                  <div class="display-1 text--primary" v-text="'R$ '+ref.preco"></div>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="addRefeicao(ref.preco, ref)" class="mx-2" fab dark small color="blue darken-4" >
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                  <v-btn @click="deleteRefeicao(ref.preco, ref)" class="mx-2" fab dark small color="red accent-4" >
                    <v-icon dark>mdi-minus</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3"  size="125" tile>
                <v-img :src="ref.imagem"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
  #nav-bar{
    position: fixed;
    right: 0;
    top: 9%;
  }
  #cards{
    left: 25%;
  }
  
</style>
<script>
import axios from "axios";
  export default {
    name: 'Home',

    data: () => ({
      total: 0,
      lista1: true,
      off: false,
      carrinho: [],
      refeicoes: [
        {
          nome: '',
          imagem: '',
          caloria: 0,
          preco: 0,
          tipo: '',
        },
      ],
    }),
    methods:{
      inicializa() {
      axios("http://localhost:3000/refeicoes")
        .then((response) => {
          this.refeicoes = response.data;
        })
        .catch((error) => console.log(error));
      },
      addRefeicao(valor, item){ 
        const t = this.total + valor;
        this.total = parseFloat(t.toFixed(2));
        this.carrinho.push(item);
      },
      deleteRefeicao(valor, item){ 
        if(this.total <= 0){
          this.total = 0;
        }else{
          const t = this.total - valor;
          this.total = parseFloat(t.toFixed(2));
          this.carrinho.splice(this.carrinho.indexOf(item),1);

        }
      },
      limpar(){
        this.total = 0;
        this.carrinho = [];
      },
      showCarrinho() {
        this.lista1 = false;
        this.off = true;
      },
      voltar() {
        this.lista1 = true;
        this.off = false;
      },
      finalizar() {
        confirm("Obrigado por comer no Flux Restaurante! Tenha um bom dia!");
        this.limpar();
        this.lista1 = true;
        this.off = false;
      },
    },
    created() {
      this.inicializa();
    },
  };
</script>
