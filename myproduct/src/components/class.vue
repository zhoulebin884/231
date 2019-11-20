<template>
  <div>
    <h1>这是App组件</h1>

    <mt-button type="danger" disabled icon="more">default</mt-button>
    <mt-button type="primary" size="large" plain>default</mt-button>
    <mt-button type="default" size="small" @click="show">default</mt-button>

    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">GoodsList</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
  // 一般mint-ui 中的 js组件，都需要按需引入
  import { Toast } from "mint-ui";
  export default {
    data: function() {
      return {
        // 把这个 Toast实例 注册到data中，只要在这个组件内部中，都能访问到
        toastInstanse: null
      };
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        //模拟获取列表的一个 ajax 方法
        // 在获取数据之前，立即弹出 Toast 提示用户，正在加载数据
        this.show();
        setTimeout(() => {
          //在setTimeout中，要用箭头函数，否则会改变作用域
          // 当 3 秒过后，数据获取回来了，要把 Toast 移除
          this.toastInstanse.close();
        }, 2000);
      },
      show() {
        // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
        this.toastInstanse = Toast({
          message: "2秒我就消失", //弹窗内容
          position: "middle", //弹窗位置
          duration: -1, //弹窗时间毫秒,如果值为-1，则不会消失
          iconClass: "glyphicon glyphicon-heart", //设置 图标类
          className: "mytoast" //自定义Toast 样式，需要自己提供一个类名
        });
      }
    }
  };
</script>
<style>
</style>
