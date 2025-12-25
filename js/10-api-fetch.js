/* 
================================================================================
 TOPIC 10 — API FETCH (REAL PUBLIC API)
 Learn: fetch(), working with real APIs, JSON data
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
c
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
 
NOTE: Semua API di bawah adalah GRATIS dan TIDAK PERLU API KEY
Jalankan file ini di browser console atau buat HTML file
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 10.1: Fetch Random User
--------------------------------------------------------------------------------
 API: https://randomuser.me/api/
 
 Fetch 1 random user dan tampilkan:
 - Nama lengkap (first + last)
 - Email
 - Negara (country)

 Hint:
 - Gunakan fetch()
 - Gunakan .then() atau async/await
 - Data ada di response.results[0]

 Expected Output:
 "Name: John Doe"
 "Email: john.doe@example.com"
 "Country: United States"
--------------------------------------------------------------------------------
*/

// Write your code here
fetch("https://randomuser.me/api/")
 .then(response => response.json())
 .then(data => {
  console.log(data)
  
  const user = data.results[0]
  console.log("Nama:" , user.name.first, user.name.last)
  console.log("Email:" , user.email)
  console.log("Country:" , user.location.country)
})
 .catch(error => 
  console.log("Error:", error))

  
/*
--------------------------------------------------------------------------------
 EXERCISE 10.2: Fetch Random Dog Image
--------------------------------------------------------------------------------
 API: https://dog.ceo/api/breeds/image/random
 
 Fetch 1 random dog image dan tampilkan URL-nya.
 
 BONUS: Jika pakai HTML, tampilkan gambarnya dengan <img>

 Hint: Image URL ada di response.message

 Expected Output:
 "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
--------------------------------------------------------------------------------
*/

// Write your code here
fetch('https://dog.ceo/api/breeds/image/random')
 .then(response => response.json())
 .then(data => {
  console.log(data.message)
})
 .catch(error => 
  console.error("Error:", error))

/*
--------------------------------------------------------------------------------
 EXERCISE 10.3: Fetch Country Info
--------------------------------------------------------------------------------
 API: https://restcountries.com/v3.1/name/{country}
 
 Fetch data negara "Indonesia" dan tampilkan:
 - Nama resmi (official name)
 - Ibukota (capital)
 - Populasi (population)
 - Mata uang (currencies)

 Hint: Data ada di response[0]

 Expected Output:
 "Official Name: Republic of Indonesia"
 "Capital: Jakarta"
 "Population: 273523 Expected Output:
 "Official Name: Republic of Indonesia"
 "Capital: Jakarta"
 "Population: 273523615"
 "Currency: Indonesian rupiah"615"
 "Currency: Indonesian rupiah"
--------------------------------------------------------------------------------
*/

// Write your code here
async function fetchCountry() {
 try {
    const response = await fetch("https://restcountries.com/v3.1/name/indonesia")
  
 const data = await response.json()
 const country = data[0]
 
 console.log("Official Name:", country.name.official)
 console.log("Capital:", country.capital[0])
 console.log("Population:", country.population)
   
 const currency = Object.values(country.currencies)[0]
 console.log("currency:", currency.name)
  
} catch (error) {
  console.log("Error:", error.message)
}
}
fetchCountry()

/*
--------------------------------------------------------------------------------
 EXERCISE 10.4: Fetch Programming Jokes
--------------------------------------------------------------------------------
 API: https://official-joke-api.appspot.com/jokes/programming/ten
 
 Fetch 10 programming jokes dan tampilkan:
 - Setup (pertanyaan)
 - Punchline (jawaban)

 Hint: Response adalah array of jokes

 Expected Output:
 "1. Why do programmers prefer dark mode?"
 "   Because light attracts bugs!"
 "2. How many programmers does it take to change a light bulb?"
 "   None. It's a hardware problem."
 ...
--------------------------------------------------------------------------------
*/

// Write your code here
async function getJoke() {
  try {
    const response = await fetch (
    "https://official-joke-api.appspot.com/jokes/programming/ten")
    
    const data = await response.json()
    
    data.forEach((joke, index) => {
    console.log(`${index + 1}:`)
    console.log(joke.setup)
    console.log(joke.punchline)
    })
 
  } catch (error) {
    console.log("error:", error)
  }
}
getJoke()

/*
--------------------------------------------------------------------------------
 EXERCISE 10.5: Fetch GitHub User
--------------------------------------------------------------------------------
 API: https://api.github.com/users/{username}
 
 Fetch data GitHub user "octocat" dan tampilkan:
 - Username (login)
 - Bio
 - Public repos count
 - Followers

 Expected Output:
 "Username: octocat"
 "Bio: ..."
 "Public Repos: 8"
 "Followers: 9000+"
--------------------------------------------------------------------------------
*/

// Write your code here
async function getGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    
    const data = await response.json()
    console.log("Username:", data.login)
    console.log("Bio:", data.bio)
    console.log("Public Repos:", data.public_repos)
    console.log("Followers:", data.followers)
  } catch (error) {
    console.log("Error:", error.message)
  }
}
 getGitHubUser("octocat")



/*
================================================================================
 BONUS CHALLENGE 10: Mini Weather App
================================================================================
 API: https://wttr.in/{city}?format=j1
 
 Buat mini weather app yang fetch cuaca untuk kota "Jakarta"
 
 Tampilkan:
 - Nama kota
 - Suhu saat ini (Celsius)
 - Deskripsi cuaca (weatherDesc)
 - Humidity

 Gunakan async/await dan error handling (try-catch)

 NOTE: API ini gratis tanpa API key!

 Expected Output:
 "City: Jakarta"
 "Temperature: 28°C"
 "Condition: Partly cloudy"
 "Humidity: 75%"
================================================================================
*/

// Write your code here
async function getWeather(city) {
  
  if (!city) {
    console.log ("Masukan nama kota")
    return
  }
  
  try {
    const response = await fetch(`https://wttr.in/${city}?format=j1`)
    
    if (!response.ok) {
      throw new Error("Error mengambil data cuaca")
    }
    
    const data = await response.json()
    const weather = data.current_condition[0]

    console.log(`Kota: ${city}`)
    console.log(`Temperature: ${weather.temp_C} °C`)
    console.log(`Condition: ${weather.weatherDesc[0].value}`)
    console.log(`Humidity: ${weather.humidity} %`)
  } catch (error) {
    console.log("Error:",error.message)
  }
}
getWeather("Jakarta")