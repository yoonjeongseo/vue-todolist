<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
    you can use custom content here to overwrite
    default content
  -->
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
        <!-- @click은 v-on:click의 축약 -->
      </h3>
      <!-- slot은 모달의 기능을 재정의 -->

      <div slot="body">
        아무것도 입력하지 않았습니다.
      </div> 
      <!-- ModalPopup.vue의 slot의 name을 가져와 연결 -->
      

      <!-- <div slot="footer">
        푸터
      </div>  
      푸터가 있을 경우 -->
    </Modal>
    <!-- ModalPopup.vue의 내용을 들고와 붙이는 영역 -->
  </div>
</template>

<script>
import Modal from './common/ModalPopup.vue'

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== ''){

        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else { // input에 빈칸일 경우
        this.showModal = !this.showModal; //모달 펍업의 false를 true로 바꾼다
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal,
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    width: calc(100% - 3rem);
    height: 100%;
    border-style: none;
    font-size: 0.9rem;
    float: left;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    text-align: center;
  }
  .addBtn {
    color: #fff;
    /* vertical-align: middle; */
  }
  .closeModalBtn {
    color: #42b983;
  }
  /* 추가 */
</style>