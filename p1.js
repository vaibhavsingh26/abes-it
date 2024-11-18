const myPromise= new Promise((resolve,reject)=>{
  let success=true;
setTimeout(()=>{
  if(success){
    resolve("data sent successfully");
  }
  else{
    reject("data not sent");
  }
  },5000);
});

myPromise
 .then((message)=>
    {console.log("data"  + message);

    })
 .catch((error)=>{
    console.log(error);
 });  
