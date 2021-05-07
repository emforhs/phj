<template>
<div class="fullscreen bg-primary text-center q-pa-md flex flex-center">
  <q-card class="my-card login-area">
    <q-card-section style="margin-bottom:50px">
      <div class="text-h2">Login</div>
    </q-card-section>
    <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="이메일"
      />
      <q-input
        filled
        v-model="pw"
        label="비밀번호"
      />
      <div>
        <q-btn label="로그인" color="primary" class="login-btn" @click="login()"/>
      </div>
    </q-form>
  </q-card>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: "",
      pw: "",
    }
  },
  computed :{},
  created() {
    if(window.localStorage.getItem('login')){
      let re = JSON.parse(window.localStorage.getItem('login'));
      this.email = re.email;
      this.pw = re.pw;
    }
  },
  methods: {
    login(){
      if(this.email && this.pw && this.$isEmail(this.email)){
        if(window.localStorage.getItem('login')) window.localStorage.removeItem("login");
        window.localStorage.setItem("login",JSON.stringify({email:this.email,pw:this.pw}));
        this.$router.push("/");
      }else{
        let message = "";
        if(!this.email){
          message="이메일을 입력해주세요.";
        }else if(!this.pw){
          message="비밀번호를 입력해주세요.";
        }else{
          message="정보을 제대로 입력해주세요.";
        }
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: message
        });
      }
    }
  }
}
</script>
