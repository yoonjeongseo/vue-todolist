<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">

        <i class="chkBtn fas fa-check" v-bind:class="{chkBtnCom: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCom: todoItem.completed}">{{ todoItem.item }}</span>
        <!-- <button v-on:click="removeTodo">Delete</button> -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
      // removeItem라는 이벤트 이름을 정해서 todoItem, index을 App.vue로 올려보내기 위해 $emit을 한다
    },
    toggleComplete: function(todoItem) {
      this.$emit('toggleItem', todoItem, index);
      // toggleItem라는 이벤트 이름을 정해서 todoItem, index을 App.vue로 올려보내기 위해 $emit을 한다
    }
  }
}
</script>


<style scoped>
  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;  
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #fff;
    border-radius: 5px;
  }
  .chkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .chkBtnCom {
    color: #b3adad;
  }
  .textCom {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, .03);
  }
</style>