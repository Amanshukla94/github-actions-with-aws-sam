var marks = new Array(12,22,122,1221,2,5,155,55,55,5,15,8,5)
var marks = [12,22,122,1221,2,5,155,55,55,5,15,8,5]
/*console.log(marks)
console.log (marks[5])
console.log(marks.length)
marks[5]=202
console.log(marks[5])
marks.push(120)
console.log(marks.length)
marks.pop(12)
console.log(marks[0])
console.log(marks.length)
console.log(marks.indexOf(155))
console.log(marks.includes(5))
console.log(marks.unshift(158))
console.log(marks)*/
let submarks = (marks.slice(1,5))
console.log(submarks)
var sum = 0
for (let i=0; i<marks.length; i++)
{
   sum = sum+marks[i] 
  // console.log(sum)
   
}
console.log(sum)

/*var totalmarks = marks.reduce((sum, marks)=>sum+marks,0)
console.log(totalmarks)

let evenscore = []
for (var k =0; k<marks.length; k++);
{
    if (marks[k]%2==0)
  {
     evenscore.push(marks[k])
  }
}

console.log(evenscore[])*/

var sumofnumbers  = (a,b) => a+b
sumofnumbers(2,3)
console.log(sumofnumbers(2,3))
