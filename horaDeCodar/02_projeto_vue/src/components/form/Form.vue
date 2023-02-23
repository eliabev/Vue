<template>
  <div>
    <form action="" @submit="enviarFormulario($event)">
      <div>
        <input type="text" v-model="name" />
      </div>
      <div>
        <input type="text" v-model="email" />
      </div>
      <div>
        <Submit />
      </div>
    </form>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
  </div>
</template>

<script>
import InputText from "./InputText.vue";
import Submit from "./Submit.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    InputText,
    // eslint-disable-next-line vue/no-unused-components
    Submit,
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();

      // eslint-disable-next-line no-unused-vars
      const name = this.name;
      // eslint-disable-next-line no-unused-vars
      const email = this.email;
      alert(`Email: ${email}\nNome: ${name}`);
    },
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },
};
</script>

<style scoped>
p {
  margin-right: 50px;
}
</style>
