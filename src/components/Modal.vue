<template>
  <div class="modal_background">
    <form @submit.prevent="handleSubmit">
      <div class="modal">
        <input v-model="account" placeholder="account" />
        <input v-model="price" placeholder="price" />
      <button>Submit</button>
      </div>
    </form>
    <button @click="handleClosed">close</button>
  </div>
</template>

<script>
export default {
  props: ["edit"],
  data: function() {
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
    position: absolute;
    z-index: 998;
    border: 1px solid red;
    width: 100vw;
    height: 105.5vh;
    background-color: rgba(52, 73, 94, 0.6);
  }

  .modal {
    color: white;
    position: absolute;
    z-index: 999;
    background-color: rgba(52, 73, 94, 0.6);
  }
</style>
