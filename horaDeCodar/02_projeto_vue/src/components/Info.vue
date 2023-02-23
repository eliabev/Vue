<template>
  <div>
    <p>{{ email }}</p>
    <p v-if="esta_trabalhando">Atualmente trabalho no KOBOSS</p>
    <p v-else>Tô no deserto</p>
    <p>Conheço as seguintes tecnologias do back-end:</p>
    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <ul>
      <li v-for="(technology, index) in backEnd" v-bind:key="index">
        {{ technology }}
      </li>
    </ul>
    <p>E conheço as seguintes tecnologias do front-end:</p>
    <ul>
      <li v-for="technology in frontEnd" :key="technology.id">
        {{ technology.name }}
      </li>
    </ul>
    <div>
      <button @click="showEmail">{{ texto_botao }}</button>
      <!-- <p><input type="checkbox" @click="showEmail" checked /></p> -->
      <p v-show="!mostrar_email">Fala comigo não, por favor</p>
    </div>
    <div v-show="mostrar_email">
      <p>Mande um email para {{ email }}</p>
      <p class="classe">
        Para acessar meu portifólio, clique
        <a v-bind:href="meu_link">aqui</a>
      </p>
      <Picture />
    </div>
  </div>
</template>

<script>
import Picture from "./Picture.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Info",
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      meu_link: "https://github.com/eliabe-ciandt",
      texto_botao: "Mostrar e-mail",
      backEnd: ["Java", "Python", "Node"],
      frontEnd: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "HTML" },
        { id: 3, name: "CSS" },
        { id: 4, name: "Vue" },
      ],
    };
  },
  components: { Picture },
  methods: {
    showEmail() {
      this.mostrar_email = !this.mostrar_email;
      this.texto_botao = this.mostrar_email
        ? "Esconder e-mail"
        : "Mostrar e-mail";
    },
  },
  props: {
    // eslint-disable-next-line vue/no-dupe-keys
    email: String,
  },
};
</script>
