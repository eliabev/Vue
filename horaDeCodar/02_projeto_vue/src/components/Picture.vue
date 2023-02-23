<template>
  <div>
    <img :src="avatar" :alt="descricao" />
    <!-- eslint-disable-next-line vue/valid-v-on -->
    <MudarImagem @mudar-imagem="mudarImagem" />
  </div>
</template>

<script>
import MudarImagem from "./MudarImagem.vue";
export default {
  components: { MudarImagem },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Picture",
  data() {
    return {
      avatar:
        "https://i.kym-cdn.com/photos/images/original/000/916/872/942.jpg",
      descricao: "The true avatar",
    };
  },
  methods: {
    mudarImagem() {
      this.avatar = "/img/avatar2.png";
    },
  },
};
</script>
