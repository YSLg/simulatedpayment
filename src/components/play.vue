<template>
   <div class="playLst">
        <div class="playLstHeader">
            <div class="iconfontBox">
            <span class="iconfont icon-weixinzhifu weixinzhifu"></span>
            <span class="iconfontText">支付成功</span>
            </div>
            <div class="accountName">
                {{ accountInfo.accountName }}
            </div>
            <div style="position: relative;">
                <span class="iconfont icon-weibiaoti- weibiaoti"></span>
                <span class="weibiaotiText">{{ accountInfo.paymentAmount }}</span>
            </div>
        </div>
        <div class="buttonBox">
            <button @click="complete">完成</button>
        </div>
   </div>
  
  </template>
  
  <script>
  export default {
    name: 'PlayLst',
    props: {
      msg: String
    },
    data() {
      return {
        accountInfo:{}
      }
    },
    methods:{
      complete(){
        this.$router.push('/settings')
      }
    },
    mounted(){
        const accountInfo = sessionStorage.getItem('accountInfo')
        this.accountInfo = JSON.parse(accountInfo)
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .playLst{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .playLstHeader{
    padding: 16px;
    padding-top: 27px;
    
  }
  .accountName{
    text-align: center;
    margin-top: 130px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 300;
    font-family: 'Arial';
  }
  .iconfontBox{
  display: flex;
  align-items: center;
  justify-content: center;
}
.weixinzhifu{
  font-size: 22px;
  color: #0cb75e;
}
.iconfontText{
  font-size: 22px;
  color: #0cb75e;
  font-weight: bold;
  margin-left: 10px;
}
.weibiaotiText{
  font-size: 46px;
  font-weight: 500;
  margin-left: 10px;
  color: #000;
}
.weibiaoti{
  position: absolute;
  left: -26px;
  top: 8px;
  font-size: 34px;
}
.buttonBox button{
  background-color: #eee;
  color: #000;
  border: 0;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30%;
}
  </style>
  