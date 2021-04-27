new Vue({

el:"#users",

data:{
    users:[]

},

methods:{
    login:function(obj){
        let code=prompt("please enter your password");
        console.log(obj.login.password)
        if(code==obj.login.password){
            sessionStorage.user=JSON.stringify(obj)
            location.href="profit.html"

        }
        else{
            alert("error!")
        }

    
    }

},
created:function(){
    axios.get("https://randomuser.me/api?results=40")
    .then(r=>{
        console.log(r.data.results)
        this.users=r.data.results;
    })
},



})