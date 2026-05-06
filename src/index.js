let obj = {
        firstName : 'Tommy',
        lastName : 'Oliver',
        zord : 'Dragon',
        suit : 'Green',
        age : 16,
        inHighSchool : true
      }

let func = (a,b,c) => {
    return a[b];
}
console.log(func(obj,"firstName"));