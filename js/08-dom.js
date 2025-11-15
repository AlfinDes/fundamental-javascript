/* 
================================================================================
 TOPIC 8 — DOM MANIPULATION
 Learn: querySelector, innerHTML, textContent, style, classList
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning DOM manipulation in JavaScript. Before I start coding, help me understand:

1. What is the DOM (Document Object Model)?
2. How do I select HTML elements using querySelector?
3. What's the difference between innerHTML and textContent?
4. How do I change CSS styles with JavaScript?
5. How do addEventListener and events work?

Please use simple examples like CHANGING TEXT or BUTTON CLICKS.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
CONTOH HTML:
Buat file 08-dom.html dengan struktur ini, lalu link file ini di <script>

<!DOCTYPE html>
<html>
<head>
  <title>DOM Exercises</title>
  <style>
    .highlight { background: yellow; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <h1 id="title">Hello</h1>
  <p id="text">This is a paragraph</p>
  <div id="box">Box</div>
  <button id="btn">Click Me</button>
  <p id="message"></p>
  <button id="toggleBtn">Toggle</button>
  <div id="content">This content can be hidden</div>
  
  <div id="counter">0</div>
  <button id="increase">+</button>
  <button id="decrease">-</button>
  <button id="reset">Reset</button>
  
  <script src="08-dom.js"></script>
</body>
</html>
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 8.1: Select and Change Text
--------------------------------------------------------------------------------
 Gunakan querySelector untuk select element dengan id "title"
 Ubah textContent-nya jadi "Welcome!"

 Expected Result:
 <h1> berubah dari "Hello" ke "Welcome!"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 8.2: Change Style
--------------------------------------------------------------------------------
 Select element dengan id "text"
 
 Ubah style-nya:
 - color: red
 - fontSize: 20px
 - fontWeight: bold

 Hint: gunakan .style property

 Expected Result:
 Paragraph berubah jadi merah, besar, dan bold
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 8.3: Add and Remove Class
--------------------------------------------------------------------------------
 Select element dengan id "box"
 
 1. Tambah class "highlight" (background kuning)
 2. Setelah 2 detik, hapus class "highlight"

 Hint: classList.add() dan classList.remove()
       gunakan setTimeout untuk delay

 Expected Result:
 Box background kuning 2 detik, lalu kembali normal
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 8.4: Button Click Event
--------------------------------------------------------------------------------
 Select button dengan id "btn"
 Select paragraph dengan id "message"
 
 Ketika button diklik, tampilkan "Button clicked!" di paragraph

 Hint: addEventListener('click', ...)

 Expected Result:
 Klik button → muncul text "Button clicked!"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 8.5: Toggle Visibility
--------------------------------------------------------------------------------
 Select button dengan id "toggleBtn"
 Select div dengan id "content"
 
 Buat button yang bisa hide/show content

 Hint: style.display = 'none' atau 'block'

 Expected Result:
 Klik toggle → content hilang/muncul bergantian
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 8: Simple Counter
================================================================================
 Buat counter dengan:
 - Display angka (id: "counter", mulai dari 0)
 - Button "+" (id: "increase") untuk tambah
 - Button "-" (id: "decrease") untuk kurang
 - Button "Reset" (id: "reset") untuk kembali ke 0
 
 Logic:
 - Increase: angka + 1
 - Decrease: angka - 1 (tapi tidak boleh < 0)
 - Reset: kembali ke 0

 Expected Result:
 Counter yang bisa +1, -1, dan reset
================================================================================
*/

// Write your code here
