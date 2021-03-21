<template>          <!-- 底部导航 -->
  <div class="bottom-bar">         
    <div class="bar-item bar-left">          <!-- 底部左边--> 
      <div>
        <i class="icon service"></i>            <!-- 矢量图-->
        <span class="text">客服</span>           <!-- 文字-->  
      </div>
      <div>
        <i class="icon shop"></i>             <!-- 矢量图-->
        <span class="text">店铺</span>           <!-- 文字-->  
      </div>
      <div>
        <i class="icon select"></i>              <!-- 矢量图-->          
        <span class="text">收藏</span>              <!-- 文字--> 
      </div>
    </div>
    <div class="bar-item bar-right">           <!-- 底部右边--> 
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart() {
        this.$emit('addToCart')                   /* 指定添加函数*/
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
	  position: absolute;
	  z-index: 10px;
    height: 49px;
    position: fixed;
    background-color: white;
    left: 0px;
    right: 0px;
    bottom: 0px;              /* 使用position:fixed弹性布局,紧贴底部 */

    display: flex;            /* 盒子概念*/
    text-align: center;        /* 文字居中*/
  }
  .bar-item {                   /* 左右自由平摊*/
    flex: 1;               
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {                    /* 矢量图,块级,宽高设置 */
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
	background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;   /* 导入地址*/
  }

  .bar-left .service {
    background-position:0 -54px;               
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 49px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }
</style>
