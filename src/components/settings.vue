<template>
  <div class="settingsPages">
    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="accountName"
      name="accountName"
      label="账户名"
      placeholder="账户名"
      :rules="[{ required: true, message: '请填写账户名' }]"
    />
    <van-field
      v-model="paymentAmount"
      type="text"
      name="paymentAmount"
      label="支付金额"
      placeholder="支付金额"
      :rules="[{ required: true, message: '请填写支付金额' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      生成订单
    </van-button>
  </div>
</van-form>
  </div>
</template>

<script>
export default {
  name: 'settingsPages',
  props: {
    msg: String
  },
  data() {
    return {
      accountName: '',
      paymentAmount: ''
    }
  },
  methods: {
    onSubmit( values ) {
      sessionStorage.setItem('accountInfo', JSON.stringify(values))
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.settingsPages{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
::v-deep .van-field__body input {
  font-size: 20px;
}
::v-depp .van-field__label {
  font-size: 20px;
}
</style>
