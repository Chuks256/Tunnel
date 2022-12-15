//nodejs library for hashing password 
// import require module
const crypt=require('crypto');
const os=require("os");


const useAlgo={
    useMd4:"md4",
    useSha256:"sha256",
    useWhirlpool:'whirlpool',
    useShake256:'shake256',
    useRSA:'RSA-MD5'
}

const system_type={
    Win_7_ultimate:"Windows 7 ultimate",
    Win_7_pro:"Windows 7 pro",
    Win_7:"Windows 7"
}

// create tunnel class 
class tunnel_helper{
    constructor(){
        this.details="hash you passcode easy"; 
        this.algo_type= null;
        } 
// check system compatibility
    checkSystemType(){
        if(os.arch()=="x32" ){
            throw new Error("Platform type must be of x64 or above to enable fast computing")
        }

        if(os.version()==system_type.Win_7_ultimate ||os.version()== system_type.Win_7_pro || os.version()== system_type.Win_7){
        throw new Error("system type is not supported must be windows 8 > or above")
        }
    }

    // check algorithm type 
    checkAlgoParameterType(algo_parameter_type){
        if(algo_parameter_type=="useMd4"){
           return useAlgo.useMd4;
        }
        else{
            if(algo_parameter_type=="useSha256"){
            return useAlgo.useSha256;
            } 
        }
            if(algo_parameter_type=="useWhirlpool"){
              return useAlgo.useWhirlpool;
            } 
            if(algo_parameter_type=="useShake256"){
                return useAlgo.useShake256;
              } 
              if(algo_parameter_type=="useRSA"){
                return useAlgo.useRSA;
              } 
    }

        // hash user key 
    hash_my_key(algorithm_type,mysecret,mykey){
        this.checkSystemType();
        this.algo_type=algorithm_type;
        if(this.algo_type=="" || mysecret=="" || mykey==""){
            throw new Error("parameter value should nnot be left empty !")
        }
        const algo_key=this.checkAlgoParameterType(this.algo_type);
        const secret=mysecret;
       const concat_key=secret+mykey;
       const encrypt_key=crypt.createHash(algo_key).update(concat_key).digest('hex');
       return encrypt_key.toString();
    }

    // verified user_key and stored_user_key returns boolean result 
    verify_my_key(Mysecret,stored_key,new_key){
        const encoded_key=this.hash_my_key(this.algo_type,Mysecret,new_key);
        if(encoded_key==stored_key){
            return true 
        }
        else{
            return false;
        }
    }

}

module.exports=tunnel_helper;