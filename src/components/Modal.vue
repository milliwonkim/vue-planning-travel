<template>
  <form @submit.prevent="handleSubmit">
    <div class="modal_background">
      <div class="modal">
        <input class="modal_input" v-model="account" placeholder="account" />
        <input class="modal_input" v-model="price" placeholder="price" />
        <div class="modal_button">
          <button class="modal_button_individual">Submit</button>
          <button class="modal_button_individual" @click="handleClosed">close</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    props: ["edit"],
    data: function () {
      return {
        account: null,
        price: null,
        id: null,
        day: null
      }
    },
    methods: {
      handleClosed() {
        this.$emit('handleModalClose')
      },
      handleSubmit() {
        console.log('this.account', this.account, 'this.account', this.price)
        this.$emit('handleEdit', {
          account: this.account,
          price: this.price,
          day: this.day,
          id: this.id
        })
        this.handleClosed()
      }
    },
    created() {
      this.account = this.$props.edit.account;
      this.price = this.$props.edit.price;
      this.day = this.$props.edit.day;
      this.id = this.$props.edit.id;
    }
  }

</script>

<style scoped>
  .modal_background {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 998;
    border: transparent;
    width: 100vw;
    height: 108vh;
    background-color: rgba(52, 73, 94, 0.6);
  }

  .modal {
    display: flex;
    flex-direction: column;
    color: white;
    position: absolute;
    z-index: 999;
  }

  .modal_input {
    margin: 10px 0;
    text-align: center;
    border-radius: 8px;
    border: transparent;
    min-width: 60vw;
    padding: 5px;
    min-height: 36px;
  }

  .modal_button {
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    min-width: 50vw;
    justify-content: space-around;
  }

  .modal_button_individual {
    border-radius: 8px;
    border: transparent;
    width: 30vw;
    height: 36px;
  }

</style>
