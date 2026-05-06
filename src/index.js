let fun = function(a) {
    let result = ""
      for (let i = 0; i < a.length; i++)
      {
        result += a[i];
      }
      return result;

};

let a = ['Coding ', 'is ', 'the ', 'best!']
console.log(fun(a))