/* 
================================================================================
 TOPIC 7 — OBJECTS
 Learn: Properties, methods, nested objects, object manipulation
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning objects in JavaScript. Before I start coding, help me understand:

1. What is an object and how is it different from an array?
2. How do I create and access object properties?
3. What's the difference between dot notation and bracket notation?
4. What are object methods?
5. How do nested objects work?

Please use simple examples like PERSON INFO or CAR DETAILS.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 7.1: Create Simple Object
--------------------------------------------------------------------------------
 Buat object dengan nama: book
 
 Properties:
 - title: "Harry Potter"
 - author: "J.K. Rowling"
 - year: 1997
 
 Tampilkan semua propertinya.

 Expected Output:
 "Harry Potter"
 "J.K. Rowling"
 1997
--------------------------------------------------------------------------------
*/

// Write your code here
let book = {
  title : "Harry Potter",
  author: "J.K. Rowling",
  year  : 1997
}

console.log(book.title, book.author, book.year)


/*
--------------------------------------------------------------------------------
 EXERCISE 7.2: Access Object Properties
--------------------------------------------------------------------------------
 Buat object dengan nama: student
 Isi dengan properties: name, age, class
 
 Akses dan tampilkan dengan 2 cara:
 1. Dot notation (student.name)
 2. Bracket notation (student["name"])

 Expected Output:
 "Alice"
 "Alice"
--------------------------------------------------------------------------------
*/

// Write your code here
let student = {
  name: "Alice",
  age:18,
  class:12
}

console.log(student.name)
console.log(student["name"])

/*
--------------------------------------------------------------------------------
 EXERCISE 7.3: Object with Method
--------------------------------------------------------------------------------
 Buat object dengan nama: calculator
 
 Buat 2 method:
 - add(a, b) → return a + b
 - multiply(a, b) → return a * b

 Expected Output:
 calculator.add(5, 3) → 8
 calculator.multiply(5, 3) → 15
--------------------------------------------------------------------------------
*/

// Write your code here
let calculator = {
  add(a, b) {
    return a + b
  },
  multiplay(a, b) {
    return a * b
  }
}

console.log(calculator.add(5, 3))
console.log(calculator.multiplay(5, 3))


/*
--------------------------------------------------------------------------------
 EXERCISE 7.4: Nested Object
--------------------------------------------------------------------------------
 Buat object dengan nama: user
 
 Struktur:
 {
   name: "John",
   address: {
     city: "Jakarta",
     postalCode: "12345"
   }
 }
 
 Akses dan tampilkan city-nya.

 Expected Output:
 "Jakarta"
--------------------------------------------------------------------------------
*/

// Write your code here
let user =  {

   name: "John",
   address: {
     city: "Jakarta",
     postalCode: "12345"
   }
 }
 console.log(user.address.city) 



/*
--------------------------------------------------------------------------------
 EXERCISE 7.5: Update Object Property
--------------------------------------------------------------------------------
 Buat object dengan nama: product
 Isi: { name: "Laptop", price: 5000000 }
 
 Lalu:
 1. Ubah harganya jadi 4500000
 2. Tambah property baru: stock: 10

 Expected Output:
 Before: { name: "Laptop", price: 5000000 }
 After: { name: "Laptop", price: 4500000, stock: 10 }
--------------------------------------------------------------------------------
*/

// Write your code here
let product = {
  name: "Laptop",
  price: "5000000",
}

product.price = 4500_000;
product.stock = 10;

console.log(product)



/*
================================================================================
 BONUS CHALLENGE 7: User Profile System
================================================================================
 Buat object dengan nama: profile
 
 Struktur:
 - Data diri (name, age, email)
 - Array hobbies (minimal 3 hobbies)
 - Nested object address (street, city, country)
 - Method getFullProfile() yang return string lengkap

 Expected Output:
 "Name: Alice, Age: 25, City: Jakarta, Hobbies: Reading, Gaming, Coding"
================================================================================
*/

// Write your code here
let profile = {
  name: "Alice",
  age: 25,
  email: "agung@gmail.com",
  hobbies: ["Reading", "Ngoding", "Gaming"],
  address: {
  street: "",
  city:"Jakarta",
  country:"Indonesia"
},
  getFullProfile: function () {
    return ` 
    nama    : ${this.name}
    age     : ${this.age}
    email   : ${this.email}
    hobbies : ${this.hobbies.join(",")}
    alamat  : ${this.address.street}, ${this.address.city}, ${this.address.country}`
    
  }
}

console.log(profile.getFullProfile())