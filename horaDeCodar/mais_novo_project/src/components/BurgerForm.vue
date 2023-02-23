<template>
    <div>
        <Message :msg="msg" v-show="msg"/>
        <div>
            <form id="burger-form" @submit="createBurger($event)">
                <div class="input-container">
                    <label for="name">Client name </label>
                    <input type="text" name="name" id="name"
                    v-model="name" placeholder="Type your name">
                </div>
                <div class="input-container">
                    <label for="bread">Choose your bread:</label>
                    <select name="bread" id="bread" v-model="bread">
                        <option value="">Select your bread </option>
                        <option v-for="bread in breads"
                        :key="bread.id" :value="bread.tipo">{{ bread.tipo }} </option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="meat">Choose your meat </label>
                    <select name="meat" id="meat" v-model="meat">
                        <option value="">Select your meat </option>
                        <option v-for="meat in meats"
                        :key="meat.id" :value="meat.tipo">{{ meat.tipo }} </option>
                    </select>
                </div>
                <div id="optionals-container" class="input-container">
                    <label id="optionals-title" for="optionals">Choose your optionals </label>
                    <div class="checkbox-container"
                    v-for="optional in optionalsData" :key="optional.id">
                        <input type="checkbox" name="optionals"
                        v-model="optionals" :value="optional.tipo">
                        <span> {{ optional.tipo }}</span>
                    </div>
                </div>

            <div class="input-container">
                <input type="submit" class="submit-btn" value="Create my burger">
            </div>
            </form>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';

export default {
  components: { Message },
  name: 'BurgerForm',
  data() {
    return {
      breads: null,
      meats: null,
      optionalsData: null,
      name: null,
      bread: null,
      meat: null,
      optionals: [],
      msg: null,
    };
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredientes');
      const data = await req.json();

      this.breads = data.paes;
      this.meats = data.carnes;
      this.optionalsData = data.opcionais;

      // console.log(this.optionalsData)
    },

    async createBurger(e) {
      e.preventDefault();

      const data = {
        name: this.name,
        meat: this.meat,
        bread: this.bread,
        optionals: Array.from(this.optionals),
        status: 'Requested',
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch('http://localhost:3000/burgers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson,
      });

      // eslint-disable-next-line no-unused-vars
      const res = await req.json();

      this.msg = `${this.name}, pedido nº ${res.id} realizado com sucesso!`;

      // eslint-disable-next-line no-return-assign
      setTimeout(() => (this.msg = ''), 5000);

      this.name = '';
      this.meat = '';
      this.optionals = [];
      this.bread = '';
    },

    components: {
      Message,
    },
  },
  mounted() {
    this.getIngredients();
  },
};
</script>

<style scoped>
#burger-form {
    max-width: 400px;
    margin: 0 auto;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
}

input, select {
    padding: 5px 10px;
    width: 300px;
}

#optionals-container {
    flex-direction: row;
    flex-wrap: wrap;
}

#optionals-title {
    width: 100%;
}

.checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
    width: auto;
}

.checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
}

.submit-btn {
    background-color: #222;
    color: #FCBA03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}

.submit-btn:hover {
    background-color: transparent;
    color: #222;
}
</style>
