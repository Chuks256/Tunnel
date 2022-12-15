
Tunnel is backend tool that a backend developer cann find useful
it has a builtin security protocol
it is very useful,secured, fast, and easy to use syntax 

programming language used:
Javascript (Nodejs)

Modules used:
Crypto => which is the main and core module of tunnel,
oS => TO Check system compatibility 
useAlgo => useAlgo is a builtin module for selecting algorithm 

Algorithm used:
MD4,SHA256, ,whirlpool
shake256 RSA

Required Platform: 
Windows 8 and above 
x64 and above 
(reason) for fast result or response 


How to use:
Ps: make sure to have nodejs installed
npm dotenv --global --save 
npm install Tunnel --save  

ps: create a .dot file to store your
secret key:

SECRET_KEY:ilovejavascript

! import tunnel module into your file and als dotenv 
const Tunnel=require("/Tunnel/tunnel");
require("dotenv").config();

// call the tunnel method and use any algorithm of your choice like useMd4,useSha256,usewhirlpool,useRSA

const hashed_key=Tunnel.hash_my_key(algorithm_choice,process.env.SECRET_KEY,your key of your choice);

return hashed_key;


/// syntax to verify new key and hashed key 

const verify=Tunnel.verify_my_key(process.env.SECRET_KEY,the stored hash key,new key )

// it returns a boolean result 
if(verify==true){
    console.log("correct key")
}
else{
    console.log("incorrect key")
}

