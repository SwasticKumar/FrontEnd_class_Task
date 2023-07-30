let promiseObj=new Promise((resolve,reject)=>{
    console.log("getting the purchase history from DB")
    setTimeout(()=>{
        console.log("6 months of punchased product!!")
    },3000)
})
console.log(promiseObj)