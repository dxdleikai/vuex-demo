<template>
  <div class="hello">
     <div>
       <h1>{{$store.state.count}}</h1>
       <el-button @click="increment"> + </el-button>
       <el-button @click="decrement"> - </el-button>
     </div>
     <div>
       <p>{{name}}</p>
       <p>{{myName}}</p>
       <el-button @click="edit('abc')">修改名字</el-button>
       <el-button @click="edit2('def')">修改名字2</el-button>
     </div>
    
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      show: true
    }
  },
  computed: {
    ...mapState('myNameSpace', {
      name: state => state.name
    }),
    ...mapGetters('myNameSpace', ['myName'])
  },
  methods: {
    ...mapMutations('myNameSpace', ['editName']),
    ...mapActions('myNameSpace', ['editNameAction']),
    edit(arg) {
      this.editName(arg);
    },
    edit2(arg) {
      this.editNameAction(arg);
    },
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
