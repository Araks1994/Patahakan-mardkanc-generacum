new Vue({
    el:"#profit",
    data:{
        user:null,
        limit:3
    },
    created:function(){
        let data=sessionStorage.user;
        if(data){
            this.user=JSON.parse(data)
        }
        else{
            setInterval(()=>{
                if(this.limit==1){
                    location.href="index.html"
                }
                this.limit--;

            },1000)
        }


    },
    methods:{
        logout:function(){
            delete sessionStorage.user
            location.href="index.html"
        }
    }




})