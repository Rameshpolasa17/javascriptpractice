const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBook=books.filter((bk)=>bk.edition>=2005)
// console.log(userBook)

// let user=books.filter((bk)=>bk.title==='Book Seven')
// console.log(user)
// let search=books.filter((bk)=>{
//     return bk.genre==='History' && bk.publish>='1985'
// })
// console.log(search)

// let search1=books.filter((bk)=>bk.genre==="History" && bk.edition>=2000)
// console.log(search1)
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.map((num)=>num+10)
// console.log(newNums)
// const check=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
// console.log(check)
// const add=myNums.reduce(function(acc,curr){
//   return acc + curr
// },0)
// console.log(add)
// const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
// console.log(myTotal)

const Courses=[
  {
    CourseName:"Javascript",
    Price:1999
  },
  {
    CourseName:"Python",
    Price:1500
  },
  {
    CourseName:"Java",
    Price:2999
  },
  {
    CourseName:"React",
    Price:4999
  },
]

const Total=Courses.reduce((acc,curr)=>acc + curr.Price,0)
console.log(Total)
