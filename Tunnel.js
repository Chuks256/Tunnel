//import required modules
const tunnel_helper=require("./Utils/tunnel.helper");
const tunnel_obj=new tunnel_helper();

const Tunnel={
    hash_my_key:(algorithm_choice,mysecret,userkey)=>{
        return tunnel_obj.hash_my_key(algorithm_choice,mysecret,userkey);
    },
    verify_my_key:(mysecret,stored_key,newkey)=>{
    return tunnel_obj.verify_my_key(mysecret,stored_key,newkey)
    }
}
   
let g=Tunnel.hash_my_key("useMd4",'123456','chmod');
console.log(g);