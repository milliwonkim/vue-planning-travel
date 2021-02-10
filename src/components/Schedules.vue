<template>
  <div class="entire">
    <Modal v-if="isShow" :edit="edit" @handleEdit="handleEdit" @handleModalClose="handleModalClose" />
    <Add :travels="travels" :days="days" @calculate="calculate" />
    <div class="layout">
      <div v-for="day in days" :key="day">
        <div class="day">
          <div class="individual_day">
            <div>{{day}}일차</div>
          </div>
          <div class="travels">
            <div v-for="travel in travels" v-bind:key="travel.id">
              <div class="travel" v-if='day === travel.day'>
                <div @dblclick="handleModalOpen(travel.id)" class="travel_account">{{travel.account}}</div>
                <div @dblclick="handleModalOpen(travel.id)" class="travel_price">{{travel.price}}</div>
                <div @click="handleDelete(travel.id)" class="travel_delete">Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total">
      <h1>{{total}}</h1>
    </div>
  </div>
</template>

<script>
  import Add from '@/components/Add.vue'
  import Modal from '@/components/Modal.vue'

  export default {
    data: function () {
      return {
        edit: {
          account: '',
          price: 0,
          id: 0,
          day: 0
        },
        isShow: false,
        total: 0,
        days: new Set([1]),
        travels: [{
            account: "고기",
            price: 10000,
            id: Math.random(),
            day: 1,
          },
          {
            account: "회",
            price: 30000,
            id: Math.random(),
            day: 1
          }
        ]
      }
    },
    props: {
      msg: String
    },
    components: {
      Add,
      Modal
    },
    created() {
      this.total = this.travels.reduce((acc, val) => acc + val.price, 0)
    },
    beforeUpdate() {
      this.sortTravel()
    },
    methods: {
      handleModalOpen(id) {
        console.log('doubleClicked')
        console.log(id, 'id of handleModalOpen')
        this.travels.map(travel => {
          if (travel.id === id) {
            this.edit = {
              account: travel.account,
              price: travel.price,
              id: travel.id,
              day: travel.day
            }
            console.log(this.edit, 'this.edit')
          }
        })
        this.isShow = true;
      },
      handleModalClose() {
        console.log('handleClose')
        this.isShow = false;
      },
      handleEdit(edit) {
        this.travels.map(travel => {
          if (travel.id === Number(edit.id)) {
            travel.account = edit.account;
            travel.price = edit.price;
            console.log(travel, 'travel of handleEdit')
          }
        })
        console.log(this.travels, '**** travels ****')
      },
      calculate() {
        this.total = this.travels.reduce((acc, val) => acc + val.price, 0)
      },
      handleDelete(id) {
        this.travels = this.travels.filter(travel => travel.id !== id)
      },
      sortTravel() {
        this.days = new Set([...this.days].sort((a, b) => {
          return a - b
        }))
        this.travels = this.travels.sort((a, b) => {
          return a.day - b.day
        })
      }
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: white;
  }

  .entire {
    position: relative;
    z-index: 1;
  }

  .layout {
    background: rgba(196, 196, 196, 0.72);
    margin: 40px auto;
    max-width: 600px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid transparent;
    box-shadow: 2px 2px 10px 1px;
    max-height: 65vh;
    overflow: scroll;
  }

  .day {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-radius: 8px;
    overflow: auto;
    padding: 10px;
  }

  .travels {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    overflow: scroll;
  }

  .travel {
    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    margin: 5px 0;
  }

  .individual_day {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    max-width: 180px;
    background-color: white;
    margin-right: 10px;
  }

  .travel_account {
    max-width: 300px;
    overflow-wrap: break-word;
    border-radius: 8px;
    padding: 5px;
    margin-right: 10px;
    background-color: white;
  }

  .travel_price {
    min-width: 50px;
    overflow-wrap: break-word;
    padding: 5px;
    border-radius: 8px;
    background-color: white;
  }

  .travel_delete {
    cursor: pointer;
    margin-left: 10px;
    min-width: 50px;
    overflow-wrap: break-word;
    padding: 5px;
    border-radius: 8px;
    background-color: white;
  }

  .total {
    background: rgba(196, 196, 196, 0.72);
    border: 1px solid black;
    border-radius: 8px;
    box-radius: 2px 2px 2px;
    max-width: 600px;
    margin: 40px auto auto auto;
    border-radius: 8px;
    border: 1px solid transparent;
    box-shadow: 2px 2px 10px 1px;
  }

</style>
