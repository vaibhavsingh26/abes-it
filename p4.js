function fetchdata(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const students=[
            { name:"alice",score :50},
            {name:"rahul",score:10},
            {name:"parul",score:70},
            
            ];
            resolve(students);
        },4000);


    });
}
fetchdata()
.then((data)=>{
    let sum=0;
data.forEach((element) => {
    sum+=element.score;
});

    console.log(data)
.catch((error)=>{
    console.log(error);
});
}
);