<template>
  <form @submit.prevent="handleSubmit">
    <div class="input_layout">
      <div>
        <input placeholder="day" class="input_column_1" v-model="day" />
      </div>
      <div>
        <input placeholder="account" class="input_column_2" v-model="account" />
        <input placeholder="price" class="input_column_3" v-model="price" />
      </div>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
  export default {
    props: {
      travels: Array,
      days: Set,
      calculate: Function,
    },
    data: function () {
      return {
        account: '',
        price: 0,
        day: 1,
      }
    },
    methods: {
      handleSubmit() {
        this.$props.travels.push({
          account: this.account,
          price: Number(this.price),
          day: this.day,
          id: Math.random(),
        })

        console.log(this.$props.travels)

        this.$props.days.add(this.day)
        this.$emit('calculate')


        this.account = ''
        this.price = 0
        this.day = 1
      }
    }
  };

</script>

<style scoped>
  input {
    text-align: center;
    border-radius: 8px;
    border: transparent;
    padding: 5px;
  }

  button {
    border-radius: 8px;
    padding: 10px;
    max-width: 200px;
    border: transparent;
  }

  .input_layout {
    background: rgba(196, 196, 196, 0.72);
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 1px solid black;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 8px;
    padding: 10px 0;
    overflow: scroll;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid transparent;
    box-shadow: 2px 2px 10px 1px;
  }

  .input_column_1 {
    display: flex;
    flex-direction: column;
    min-width: 170px;
    height: 91px;
    float: right;
    margin-right: 10px;
  }

  .input_column_2 {
    display: flex;
    flex-direction: column;
    min-height: 36px;
    min-width: 380px;
    margin-bottom: 10px;
  }

  .input_column_3 {
    display: flex;
    flex-direction: column;
    min-width: 380px;
    min-height: 36px;
    margin-top: 10px;
  }

  @media (max-width: 620px) {
    .input_layout {
      display: flex;
      flex-direction: column;
    }

    .input_column_1 {
      /* width: 93%; */
      min-width: 380px;
      margin: 0 auto;
      float: none;
      height: 36px;
      margin-bottom: 10px;
    }

    .input_column_2 {
      /* width: 93%; */
      max-width: 380px;
      margin: 0 auto;
      margin-bottom: 10px;

    }

    .input_column_3 {
      /* width: 93%; */
      max-width: 380px;
      margin: 0 auto;
    }
  }

</style>
