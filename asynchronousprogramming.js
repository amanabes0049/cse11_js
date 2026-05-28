let promise = new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("Promise is resolved");
    }else{
        reject("Promise is rejected");
    }
});
promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});
