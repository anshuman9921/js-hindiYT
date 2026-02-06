// const coding = ["js", "ruby", "Java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = myNums.filter( (num) => num > 4)
// console.log(newnums)

const newnums = []
myNums.forEach( (num) => {
    if (num > 4){
        newnums.push(num)
    }
})

// console.log(newnums)

const books = [
  {
    "title": "The Silent Code",
    "genre": "Technology",
    "publish": 2021,
    "edition": 2021
  },
  {
    "title": "Deep Space Journey",
    "genre": "Science Fiction",
    "publish": 2019,
    "edition": 2020
  },
  {
    "title": "Learning Python Step by Step",
    "genre": "Education",
    "publish": 2023,
    "edition": 2024
  },
  {
    "title": "The Last Kingdom",
    "genre": "Historical Fiction",
    "publish": 2018,
    "edition": 2019
  },
  {
    "title": "Mastering Power Platform",
    "genre": "Technology",
    "publish": 2024,
    "edition": 2024
  },
  {
    "title": "Mindful Productivity",
    "genre": "Self Help",
    "publish": 2022,
    "edition": 2023
  },
  {
    "title": "Secrets of the Startup World",
    "genre": "Business",
    "publish": 2020,
    "edition": 2021
  },
  {
    "title": "The Hidden Algorithm",
    "genre": "Thriller",
    "publish": 2021,
    "edition": 2022
  },
  {
    "title": "Design Thinking Explained",
    "genre": "Design",
    "publish": 2019,
    "edition": 2020
  },
  {
    "title": "Future of Artificial Intelligence",
    "genre": "Technology",
    "publish": 2024,
    "edition": 2025
  }
];

// const userbooks = books.filter( (bk) => bk.genre === 'Technology')
const userbooks = books.filter( (bk) => bk.publish > 2020 && bk.genre === "Thriller")

console.log(userbooks);


