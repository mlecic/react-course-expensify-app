const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randNum = Math.random() * 100;
        if(randNum > 50){
            resolve('This is my resolved data. Num is greather than 50.');
        }else{
            reject('Rejected data. Num is less or equal than 50.');
        }
        
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch(error => {
    console.log('Error: ' + error);
});

console.log('after');