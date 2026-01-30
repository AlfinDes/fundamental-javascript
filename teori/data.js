function roadmapData() {
    return {
        categories: [
            {
                id: 'frontend',
                name: 'Frontend Development',
                icon: '🎨',
                description: 'User Interface & Client-Side',
                expanded: false,
                topics: [
                    {
                        id: 'html',
                        name: 'HTML',
                        level: 'beginner',
                        description: 'Struktur halaman web',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Semantic HTML', 
                                icon: 'devicon-html5-plain colored',
                                year: '1993',
                                desc: 'Tag HTML yang bermakna untuk SEO dan accessibility',
                                comparison: 'Lebih baik dari div soup - meningkatkan SEO dan screen reader support',
                                pros: ['SEO friendly', 'Accessibility', 'Maintainable', 'Self-documenting'],
                                cons: ['Learning curve', 'Browser compatibility'],
                                example: `<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>Judul</h1>
    <p>Konten...</p>
  </article>
</main>`
                            },
                            { 
                                name: 'Forms & Validation', 
                                icon: 'devicon-html5-plain colored',
                                year: '2014',
                                desc: 'Form input dan validasi built-in HTML5',
                                comparison: 'Native validation vs JavaScript validation - lebih cepat dan mudah',
                                pros: ['No JS needed', 'Fast', 'Native support', 'Mobile friendly'],
                                cons: ['Limited customization', 'Browser differences', 'Basic validation only'],
                                example: `<form action="/submit" method="POST">
  <input type="email" required 
    placeholder="Email">
  <input type="password" 
    minlength="8" required>
  <button type="submit">Login</button>
</form>`
                            }
                        ]
                    },
                    {
                        id: 'css',
                        name: 'CSS',
                        level: 'beginner',
                        description: 'Styling dan layout',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Flexbox & Grid', 
                                icon: 'devicon-css3-plain colored',
                                year: '2017',
                                desc: 'Layout modern CSS tanpa float',
                                comparison: 'Flexbox untuk 1D layout, Grid untuk 2D - lebih powerful dari float/position',
                                pros: ['Responsive', 'No framework needed', 'Powerful alignment', 'Less code'],
                                cons: ['IE11 issues', 'Learning curve', 'Fallback needed'],
                                example: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`
                            },
                            { 
                                name: 'Tailwind CSS', 
                                icon: 'devicon-tailwindcss-plain colored',
                                year: '2017',
                                desc: 'Utility-first CSS framework',
                                comparison: 'vs Bootstrap: lebih customizable, file size lebih kecil dengan purge',
                                pros: ['Fast development', 'Highly customizable', 'Small bundle size', 'No naming conflicts'],
                                cons: ['HTML looks messy', 'Learning curve', 'Need build step'],
                                example: `<div class="flex items-center justify-center 
  gap-4 p-6 bg-blue-500 rounded-lg">
  <h1 class="text-2xl font-bold text-white">
    Hello Tailwind!
  </h1>
</div>`
                            },
                            { 
                                name: 'Bootstrap', 
                                icon: 'devicon-bootstrap-plain colored',
                                year: '2011',
                                desc: 'Framework CSS populer dengan komponen siap pakai',
                                comparison: 'vs Tailwind: lebih cepat untuk prototype, tapi kurang flexible',
                                pros: ['Quick prototyping', 'Pre-built components', 'Large community', 'Good docs'],
                                cons: ['Generic look', 'Heavy bundle', 'Hard to customize', 'jQuery dependency (v4 removed)'],
                                example: `<div class="container">
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-primary">
        Click Me
      </button>
    </div>
  </div>
</div>`
                            }
                        ]
                    },
                    {
                        id: 'javascript',
                        name: 'JavaScript',
                        level: 'intermediate',
                        description: 'Interaktivitas web',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'ES6+ Features', 
                                icon: 'devicon-javascript-plain colored',
                                year: '2015',
                                desc: 'Fitur modern JavaScript (arrow functions, destructuring, etc)',
                                comparison: 'ES6+ vs ES5: lebih clean, readable, dan powerful',
                                pros: ['Cleaner syntax', 'Better scope', 'Native promises', 'Template literals'],
                                cons: ['Browser support', 'Need transpiler', 'Breaking changes'],
                                example: `// Arrow Function
const greet = (name) => \`Hello \${name}\`;

// Destructuring
const { id, name } = user;

// Spread Operator
const newArr = [...arr1, ...arr2];`
                            },
                            { 
                                name: 'DOM Manipulation', 
                                icon: 'devicon-javascript-plain colored',
                                year: '1995',
                                desc: 'Mengubah HTML dinamis dengan JavaScript',
                                comparison: 'Vanilla JS vs jQuery: lebih cepat, no dependency, modern API',
                                pros: ['No dependencies', 'Fast', 'Full control', 'Modern browsers'],
                                cons: ['Verbose', 'Browser differences', 'Manual optimization'],
                                example: `// Select element
const btn = document.querySelector(".btn");

// Change content
btn.textContent = "Click me!";

// Add class
btn.classList.add("active");`
                            },
                            { 
                                name: 'Fetch API', 
                                icon: 'devicon-javascript-plain colored',
                                year: '2015',
                                desc: 'HTTP request native JavaScript',
                                comparison: 'vs Axios: native, no dependency, tapi Axios lebih feature-rich',
                                pros: ['Native', 'Promise-based', 'Modern', 'No dependencies'],
                                cons: ['No timeout', 'No progress', 'Verbose error handling'],
                                example: `// GET Request
fetch("/api/users")
  .then(res => res.json())
  .then(data => console.log(data));

// POST Request
fetch("/api/users", {
  method: "POST",
  body: JSON.stringify({ name: "John" })
});`
                            }
                        ]
                    },
                    {
                        id: 'frameworks',
                        name: 'Frontend Frameworks',
                        level: 'intermediate',
                        description: 'Framework modern',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'React.js', 
                                icon: 'devicon-react-original colored',
                                year: '2013',
                                desc: 'Library UI paling populer dari Facebook',
                                comparison: 'vs Vue/Angular: lebih flexible, ecosystem terbesar, job market terbaik',
                                pros: ['Huge ecosystem', 'Virtual DOM', 'Component reusability', 'Strong community'],
                                cons: ['JSX learning curve', 'Fast-paced updates', 'Boilerplate code'],
                                example: `function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
                            },
                            { 
                                name: 'Vue.js', 
                                icon: 'devicon-vuejs-plain colored',
                                year: '2014',
                                desc: 'Progressive framework yang mudah dipelajari',
                                comparison: 'vs React: lebih mudah dipelajari, template-based, tapi ecosystem lebih kecil',
                                pros: ['Easy learning curve', 'Great docs', 'Two-way binding', 'Small size'],
                                cons: ['Smaller ecosystem', 'Less job opportunities', 'Language barrier (Chinese community)'],
                                example: `<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count++">
      Increment
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  }
}
</script>`
                            },
                            { 
                                name: 'Angular', 
                                icon: 'devicon-angular-plain colored',
                                year: '2016',
                                desc: 'Full-featured framework dari Google',
                                comparison: 'vs React/Vue: lebih opinionated, TypeScript first, cocok untuk enterprise',
                                pros: ['Complete solution', 'TypeScript', 'Dependency injection', 'Enterprise ready'],
                                cons: ['Steep learning curve', 'Heavy', 'Verbose', 'Breaking changes'],
                                example: `@Component({
  selector: 'app-counter',
  template: \`
    <h1>{{ count }}</h1>
    <button (click)="increment()">
      Increment
    </button>
  \`
})
export class CounterComponent {
  count = 0;
  increment() { this.count++; }
}`
                            },
                            { 
                                name: 'Next.js', 
                                icon: 'devicon-nextjs-plain',
                                year: '2016',
                                desc: 'React framework dengan SSR dan SSG',
                                comparison: 'vs Create React App: SSR, file-based routing, image optimization, API routes',
                                pros: ['SEO friendly', 'Fast performance', 'File-based routing', 'API routes'],
                                cons: ['Vendor lock-in', 'Complex deployment', 'Learning curve'],
                                example: `// pages/index.js
export default function Home({ data }) {
  return <h1>Hello {data.name}</h1>
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com')
  const data = await res.json()
  return { props: { data } }
}`
                            }
                        ]
                    }
                ]
            },
            {
                id: 'backend',
                name: 'Backend Development',
                icon: '⚙️',
                description: 'Server-Side Logic',
                expanded: false,
                topics: [
                    {
                        id: 'nodejs',
                        name: 'Node.js',
                        level: 'intermediate',
                        description: 'JavaScript runtime untuk backend',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Express.js', 
                                icon: 'devicon-express-original',
                                year: '2010',
                                desc: 'Framework minimalis dan flexible',
                                comparison: 'vs Nest.js: lebih simple, less opinionated, cocok untuk small-medium apps',
                                pros: ['Minimal', 'Flexible', 'Large ecosystem', 'Easy to learn'],
                                cons: ['No structure', 'Manual setup', 'Callback hell risk'],
                                example: `const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
                            },
                            { 
                                name: 'Nest.js', 
                                icon: 'devicon-nestjs-plain colored',
                                year: '2017',
                                desc: 'Framework TypeScript dengan Angular-like architecture',
                                comparison: 'vs Express: lebih structured, TypeScript first, cocok untuk large apps',
                                pros: ['TypeScript', 'Structured', 'Dependency injection', 'Scalable'],
                                cons: ['Steep learning curve', 'Verbose', 'Overkill for small apps'],
                                example: `@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This returns all users';
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'User created';
  }
}`
                            }
                        ]
                    },
                    {
                        id: 'python',
                        name: 'Python',
                        level: 'intermediate',
                        description: 'Versatile language untuk backend',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Django', 
                                icon: 'devicon-django-plain',
                                year: '2005',
                                desc: 'Full-featured framework "batteries included"',
                                comparison: 'vs Flask: lebih complete, ORM built-in, admin panel, tapi lebih heavy',
                                pros: ['Complete solution', 'Admin panel', 'ORM built-in', 'Security features'],
                                cons: ['Heavy', 'Opinionated', 'Steep learning curve'],
                                example: `from django.http import JsonResponse
from django.views import View

class UserView(View):
    def get(self, request):
        users = User.objects.all()
        return JsonResponse({
            'users': list(users.values())
        })`
                            },
                            { 
                                name: 'Flask', 
                                icon: 'devicon-flask-original',
                                year: '2010',
                                desc: 'Micro-framework yang lightweight',
                                comparison: 'vs Django: lebih simple, flexible, cocok untuk API dan small apps',
                                pros: ['Lightweight', 'Flexible', 'Easy to learn', 'Minimal'],
                                cons: ['Manual setup', 'No admin panel', 'Less features'],
                                example: `from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/users')
def get_users():
    return jsonify({'users': []})

if __name__ == '__main__':
    app.run(debug=True)`
                            },
                            { 
                                name: 'FastAPI', 
                                icon: 'devicon-fastapi-plain colored',
                                year: '2018',
                                desc: 'Modern, fast framework dengan auto docs',
                                comparison: 'vs Flask/Django: lebih cepat, async native, auto OpenAPI docs',
                                pros: ['Very fast', 'Async support', 'Auto docs', 'Type hints'],
                                cons: ['Young ecosystem', 'Less resources', 'Breaking changes'],
                                example: `from fastapi import FastAPI

app = FastAPI()

@app.get("/users")
async def get_users():
    return {"users": []}

@app.post("/users")
async def create_user(user: User):
    return {"message": "User created"}`
                            }
                        ]
                    },
                    {
                        id: 'other-langs',
                        name: 'Other Languages',
                        level: 'intermediate',
                        description: 'Alternative backend languages',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'PHP Laravel', 
                                icon: 'devicon-laravel-plain colored',
                                year: '2011',
                                desc: 'Elegant PHP framework dengan Eloquent ORM',
                                comparison: 'vs Node.js: mature ecosystem, shared hosting friendly, tapi slower',
                                pros: ['Mature', 'Eloquent ORM', 'Blade templates', 'Large community'],
                                cons: ['PHP stigma', 'Slower than Node', 'Monolithic'],
                                example: `Route::get('/users', function () {
    return User::all();
});

Route::post('/users', function (Request $request) {
    $user = User::create($request->all());
    return response()->json($user, 201);
});`
                            },
                            { 
                                name: 'Go', 
                                icon: 'devicon-go-original-wordmark colored',
                                year: '2009',
                                desc: 'Fast, compiled language dari Google',
                                comparison: 'vs Node.js: lebih cepat, compiled, concurrent, tapi verbose',
                                pros: ['Very fast', 'Concurrent', 'Compiled', 'Low memory'],
                                cons: ['Verbose', 'No generics (until 1.18)', 'Steep learning'],
                                example: `package main

import (
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
    r.GET("/users", getUsers)
    r.POST("/users", createUser)
    r.Run(":8080")
}`
                            },
                            { 
                                name: 'Java Spring Boot', 
                                icon: 'devicon-spring-plain colored',
                                year: '2014',
                                desc: 'Enterprise-grade framework',
                                comparison: 'vs Node.js: lebih mature, type-safe, enterprise ready, tapi verbose',
                                pros: ['Enterprise ready', 'Type safe', 'Mature', 'Great tooling'],
                                cons: ['Verbose', 'Heavy', 'Slow startup', 'Complex'],
                                example: `@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public List<User> getUsers() {
        return userService.findAll();
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
}`
                            }
                        ]
                    },
                    {
                        id: 'api',
                        name: 'API Development',
                        level: 'intermediate',
                        description: 'Building APIs',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'REST API', 
                                icon: 'devicon-nodejs-plain colored',
                                year: '2000',
                                desc: 'RESTful architecture standard',
                                comparison: 'vs GraphQL: simpler, cacheable, tapi over/under-fetching issues',
                                pros: ['Simple', 'Cacheable', 'Stateless', 'Wide support'],
                                cons: ['Over-fetching', 'Multiple requests', 'Versioning issues'],
                                example: `// GET - Read
app.get('/api/users/:id', getUser);

// POST - Create
app.post('/api/users', createUser);

// PUT - Update
app.put('/api/users/:id', updateUser);

// DELETE - Remove
app.delete('/api/users/:id', deleteUser);`
                            },
                            { 
                                name: 'GraphQL', 
                                icon: 'devicon-graphql-plain colored',
                                year: '2015',
                                desc: 'Query language untuk APIs dari Facebook',
                                comparison: 'vs REST: flexible queries, single endpoint, tapi complex caching',
                                pros: ['Flexible queries', 'Single endpoint', 'Type system', 'No over-fetching'],
                                cons: ['Complex caching', 'Learning curve', 'Query complexity'],
                                example: `type Query {
  users: [User!]!
  user(id: ID!): User
}

type Mutation {
  createUser(name: String!, email: String!): User!
  updateUser(id: ID!, name: String): User!
  deleteUser(id: ID!): Boolean!
}`
                            }
                        ]
                    }
                ]
            },
            {
                id: 'database',
                name: 'Database',
                icon: '🗄️',
                description: 'Data Storage',
                expanded: false,
                topics: [
                    {
                        id: 'sql',
                        name: 'SQL Databases',
                        level: 'intermediate',
                        description: 'Relational databases',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'PostgreSQL', 
                                icon: 'devicon-postgresql-plain colored',
                                year: '1996',
                                desc: 'Powerful open-source relational database',
                                comparison: 'vs MySQL: lebih advanced features, ACID compliant, tapi slightly slower',
                                pros: ['ACID compliant', 'Advanced features', 'JSON support', 'Extensible'],
                                cons: ['Complex setup', 'Slower than MySQL', 'Memory intensive'],
                                example: `-- Create table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert data
INSERT INTO users (name, email) 
VALUES ('John Doe', 'john@example.com');

-- Query with JOIN
SELECT u.name, o.total 
FROM users u
JOIN orders o ON u.id = o.user_id;`
                            },
                            { 
                                name: 'MySQL', 
                                icon: 'devicon-mysql-plain colored',
                                year: '1995',
                                desc: 'Popular open-source database',
                                comparison: 'vs PostgreSQL: lebih cepat untuk read-heavy, easier setup, tapi less features',
                                pros: ['Fast reads', 'Easy setup', 'Wide adoption', 'Good docs'],
                                cons: ['Less features', 'Weaker ACID', 'Limited JSON'],
                                example: `-- SELECT
SELECT * FROM users WHERE age > 18;

-- INSERT
INSERT INTO users (name, email) 
VALUES ('John', 'john@email.com');

-- UPDATE
UPDATE users SET name = 'Jane' 
WHERE id = 1;

-- DELETE
DELETE FROM users WHERE id = 1;`
                            },
                            { 
                                name: 'SQLite', 
                                icon: 'devicon-sqlite-plain colored',
                                year: '2000',
                                desc: 'Lightweight embedded database',
                                comparison: 'vs PostgreSQL/MySQL: file-based, no server, cocok untuk mobile/desktop apps',
                                pros: ['No server needed', 'Lightweight', 'Fast', 'Zero config'],
                                cons: ['No concurrent writes', 'Limited scalability', 'No user management'],
                                example: `-- Create and use
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL
);

INSERT INTO products VALUES 
  (1, 'Laptop', 999.99),
  (2, 'Mouse', 29.99);`
                            }
                        ]
                    },
                    {
                        id: 'nosql',
                        name: 'NoSQL Databases',
                        level: 'intermediate',
                        description: 'Non-relational databases',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'MongoDB', 
                                icon: 'devicon-mongodb-plain colored',
                                year: '2009',
                                desc: 'Document-based NoSQL database',
                                comparison: 'vs SQL: flexible schema, horizontal scaling, tapi no ACID guarantees',
                                pros: ['Flexible schema', 'Horizontal scaling', 'JSON-like', 'Fast development'],
                                cons: ['No ACID (default)', 'Memory intensive', 'Data duplication'],
                                example: `// Insert document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  tags: ["developer", "nodejs"]
});

// Find documents
db.users.find({ age: { $gt: 25 } });

// Update
db.users.updateOne(
  { email: "john@example.com" },
  { $set: { age: 31 } }
);`
                            },
                            { 
                                name: 'Redis', 
                                icon: 'devicon-redis-plain colored',
                                year: '2009',
                                desc: 'In-memory data store untuk caching',
                                comparison: 'vs Memcached: lebih feature-rich, data structures, persistence',
                                pros: ['Very fast', 'Data structures', 'Pub/Sub', 'Persistence'],
                                cons: ['Memory limited', 'Single threaded', 'Data loss risk'],
                                example: `// Set key-value
SET user:1000 "John Doe"
EXPIRE user:1000 3600

// Get value
GET user:1000

// Hash
HSET user:1001 name "Jane" email "jane@example.com"
HGETALL user:1001

// List
LPUSH tasks "task1" "task2"
LRANGE tasks 0 -1`
                            },
                            { 
                                name: 'Firebase', 
                                icon: 'devicon-firebase-plain colored',
                                year: '2011',
                                desc: 'Real-time database dari Google',
                                comparison: 'vs MongoDB: real-time sync, managed service, tapi vendor lock-in',
                                pros: ['Real-time sync', 'Managed service', 'Easy setup', 'Mobile SDKs'],
                                cons: ['Vendor lock-in', 'Expensive at scale', 'Limited queries'],
                                example: `// Write data
const db = firebase.database();
db.ref('users/' + userId).set({
  username: name,
  email: email
});

// Read data
db.ref('users/' + userId).on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});`
                            }
                        ]
                    },
                    {
                        id: 'orm',
                        name: 'ORM/ODM',
                        level: 'intermediate',
                        description: 'Database abstraction layer',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Prisma', 
                                icon: 'devicon-prisma-original',
                                year: '2019',
                                desc: 'Next-generation ORM dengan type safety',
                                comparison: 'vs Sequelize: type-safe, better DX, auto-completion, tapi younger',
                                pros: ['Type safe', 'Auto-completion', 'Migrations', 'Great DX'],
                                cons: ['Young', 'Breaking changes', 'Limited databases'],
                                example: `// Define schema
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

// Query
const user = await prisma.user.create({
  data: {
    name: 'John',
    email: 'john@example.com'
  }
});`
                            },
                            { 
                                name: 'Sequelize', 
                                icon: 'devicon-sequelize-plain colored',
                                year: '2011',
                                desc: 'Mature Node.js ORM',
                                comparison: 'vs Prisma: lebih mature, support lebih banyak DB, tapi no type safety',
                                pros: ['Mature', 'Many databases', 'Migrations', 'Associations'],
                                cons: ['No type safety', 'Verbose', 'Complex queries'],
                                example: `const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});

// Create
const user = await User.create({
  name: 'John',
  email: 'john@example.com'
});

// Find
const users = await User.findAll({
  where: { name: 'John' }
});`
                            },
                            { 
                                name: 'Mongoose', 
                                icon: 'devicon-mongoose-original colored',
                                year: '2010',
                                desc: 'MongoDB ODM untuk Node.js',
                                comparison: 'vs native MongoDB driver: schema validation, middleware, tapi overhead',
                                pros: ['Schema validation', 'Middleware', 'Population', 'Type casting'],
                                cons: ['Performance overhead', 'Learning curve', 'Opinionated'],
                                example: `const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number
});

const User = mongoose.model('User', userSchema);

const user = new User({
  name: 'John',
  email: 'john@example.com'
});
await user.save();`
                            }
                        ]
                    }
                ]
            },
            {
                id: 'devops',
                name: 'DevOps & Deployment',
                icon: '🚀',
                description: 'Infrastructure & Automation',
                expanded: false,
                topics: [
                    {
                        id: 'git',
                        name: 'Version Control',
                        level: 'beginner',
                        description: 'Git & GitHub',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Git Basics', 
                                icon: 'devicon-git-plain colored',
                                year: '2005',
                                desc: 'Distributed version control system',
                                comparison: 'vs SVN: distributed, faster, branching lebih mudah',
                                pros: ['Distributed', 'Fast', 'Branching', 'Open source'],
                                cons: ['Learning curve', 'Complex commands', 'Large repos'],
                                example: `# Initialize repo
git init

# Add files
git add .

# Commit changes
git commit -m "Initial commit"

# Push to remote
git push origin main

# Pull updates
git pull origin main

# Create branch
git checkout -b feature/new-feature`
                            },
                            { 
                                name: 'GitHub', 
                                icon: 'devicon-github-original',
                                year: '2008',
                                desc: 'Platform kolaborasi dengan Git',
                                comparison: 'vs GitLab/Bitbucket: lebih populer, largest community, tapi less features',
                                pros: ['Largest community', 'Free private repos', 'Actions CI/CD', 'Copilot'],
                                cons: ['Microsoft owned', 'Less features than GitLab', 'Downtime issues'],
                                example: `# Clone repository
git clone https://github.com/user/repo.git

# Add remote
git remote add origin https://github.com/user/repo.git

# Create pull request (via GitHub UI)
# 1. Push your branch
# 2. Go to GitHub
# 3. Click "New Pull Request"`
                            }
                        ]
                    },
                    {
                        id: 'docker',
                        name: 'Containerization',
                        level: 'advanced',
                        description: 'Docker & Kubernetes',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Docker', 
                                icon: 'devicon-docker-plain colored',
                                year: '2013',
                                desc: 'Container platform untuk isolasi aplikasi',
                                comparison: 'vs VM: lebih lightweight, faster startup, share OS kernel',
                                pros: ['Lightweight', 'Fast startup', 'Portable', 'Consistent environment'],
                                cons: ['Security concerns', 'Learning curve', 'Networking complexity'],
                                example: `# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Build image
docker build -t myapp .

# Run container
docker run -p 3000:3000 myapp`
                            },
                            { 
                                name: 'Docker Compose', 
                                icon: 'devicon-docker-plain colored',
                                year: '2014',
                                desc: 'Multi-container orchestration tool',
                                comparison: 'vs Kubernetes: simpler, local development, tapi not for production scale',
                                pros: ['Simple', 'Good for dev', 'YAML config', 'Easy networking'],
                                cons: ['Not for production', 'Limited scaling', 'Single host'],
                                example: `version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: secret

# Run: docker-compose up`
                            },
                            { 
                                name: 'Kubernetes', 
                                icon: 'devicon-kubernetes-plain colored',
                                year: '2014',
                                desc: 'Container orchestration untuk production',
                                comparison: 'vs Docker Swarm: lebih complex, tapi lebih powerful dan widely adopted',
                                pros: ['Auto-scaling', 'Self-healing', 'Load balancing', 'Industry standard'],
                                cons: ['Very complex', 'Steep learning curve', 'Overkill for small apps'],
                                example: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000`
                            }
                        ]
                    },
                    {
                        id: 'cicd',
                        name: 'CI/CD',
                        level: 'advanced',
                        description: 'Continuous Integration/Deployment',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'GitHub Actions', 
                                icon: 'devicon-github-original',
                                year: '2019',
                                desc: 'CI/CD automation terintegrasi dengan GitHub',
                                comparison: 'vs Jenkins: easier setup, cloud-based, tapi less flexible',
                                pros: ['Easy setup', 'GitHub integration', 'Free for public', 'Marketplace'],
                                cons: ['GitHub only', 'Limited free minutes', 'YAML complexity'],
                                example: `name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
      - run: npm run build`
                            },
                            { 
                                name: 'GitLab CI', 
                                icon: 'devicon-gitlab-plain colored',
                                year: '2012',
                                desc: 'Built-in CI/CD di GitLab',
                                comparison: 'vs GitHub Actions: lebih mature, self-hosted option, tapi smaller community',
                                pros: ['Self-hosted option', 'Mature', 'Integrated', 'Free runners'],
                                cons: ['GitLab only', 'Complex setup', 'Resource intensive'],
                                example: `stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - npm install
    - npm run build

test:
  stage: test
  script:
    - npm test

deploy:
  stage: deploy
  script:
    - npm run deploy`
                            }
                        ]
                    },
                    {
                        id: 'cloud',
                        name: 'Cloud Platforms',
                        level: 'intermediate',
                        description: 'Hosting & deployment',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'AWS', 
                                icon: 'devicon-amazonwebservices-plain-wordmark colored',
                                year: '2006',
                                desc: 'Amazon cloud platform - market leader',
                                comparison: 'vs Azure/GCP: largest market share, most services, tapi complex pricing',
                                pros: ['Most services', 'Mature', 'Global reach', 'Large community'],
                                cons: ['Complex pricing', 'Steep learning', 'Overwhelming options'],
                                example: `// AWS Lambda Function
exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!')
  };
  return response;
};

// Deploy: aws lambda create-function`
                            },
                            { 
                                name: 'Vercel', 
                                icon: 'devicon-vercel-original',
                                year: '2015',
                                desc: 'Platform untuk frontend deployment',
                                comparison: 'vs Netlify: better Next.js support, edge functions, tapi more expensive',
                                pros: ['Easy deployment', 'Edge network', 'Next.js optimized', 'Free tier'],
                                cons: ['Expensive at scale', 'Vendor lock-in', 'Limited backend'],
                                example: `// vercel.json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}

// Deploy: vercel --prod`
                            },
                            { 
                                name: 'Netlify', 
                                icon: 'devicon-netlify-plain colored',
                                year: '2014',
                                desc: 'JAMstack hosting platform',
                                comparison: 'vs Vercel: better pricing, forms/identity built-in, tapi slower builds',
                                pros: ['Great pricing', 'Forms built-in', 'Split testing', 'Easy setup'],
                                cons: ['Slower builds', 'Less features', 'Limited backend'],
                                example: `# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Deploy: netlify deploy --prod`
                            }
                        ]
                    }
                ]
            },
            {
                id: 'testing',
                name: 'Testing',
                icon: '🧪',
                description: 'Quality Assurance',
                expanded: false,
                topics: [
                    {
                        id: 'unit',
                        name: 'Unit Testing',
                        level: 'intermediate',
                        description: 'Test individual functions',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Jest', 
                                icon: 'devicon-jest-plain colored',
                                year: '2014',
                                desc: 'JavaScript testing framework dari Facebook',
                                comparison: 'vs Mocha: zero config, snapshot testing, tapi slower',
                                pros: ['Zero config', 'Snapshot testing', 'Mocking built-in', 'Great DX'],
                                cons: ['Slower', 'Heavy', 'ESM issues'],
                                example: `// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});`
                            },
                            { 
                                name: 'Vitest', 
                                icon: 'devicon-vitest-plain colored',
                                year: '2021',
                                desc: 'Vite-native testing framework',
                                comparison: 'vs Jest: faster, ESM native, Vite integration, tapi younger',
                                pros: ['Very fast', 'ESM native', 'Vite integration', 'Jest compatible'],
                                cons: ['Young', 'Smaller community', 'Less plugins'],
                                example: `import { describe, it, expect } from 'vitest'

describe('Math operations', () => {
  it('should add numbers', () => {
    expect(1 + 1).toBe(2)
  })

  it('should multiply', () => {
    expect(2 * 3).toBe(6)
  })
})`
                            }
                        ]
                    },
                    {
                        id: 'e2e',
                        name: 'E2E Testing',
                        level: 'advanced',
                        description: 'End-to-end testing',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Cypress', 
                                icon: 'devicon-cypressio-plain colored',
                                year: '2017',
                                desc: 'Modern E2E testing framework',
                                comparison: 'vs Selenium: easier, faster, better DX, tapi browser limited',
                                pros: ['Great DX', 'Time travel', 'Auto-wait', 'Screenshots'],
                                cons: ['Chromium only', 'No multi-tab', 'Flaky tests'],
                                example: `describe('Login Flow', () => {
  it('should login successfully', () => {
    cy.visit('/login')
    cy.get('input[name="email"]')
      .type('user@example.com')
    cy.get('input[name="password"]')
      .type('password123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })
})`
                            },
                            { 
                                name: 'Playwright', 
                                icon: 'devicon-playwright-plain',
                                year: '2020',
                                desc: 'Cross-browser testing dari Microsoft',
                                comparison: 'vs Cypress: multi-browser, parallel testing, tapi steeper learning',
                                pros: ['Multi-browser', 'Parallel testing', 'Auto-wait', 'Fast'],
                                cons: ['Young', 'Complex setup', 'Less resources'],
                                example: `import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('text=Get Started');
  await expect(page).toHaveURL(/.*intro/);
});`
                            }
                        ]
                    }
                ]
            },
            {
                id: 'security',
                name: 'Security',
                icon: '🔒',
                description: 'Application Security',
                expanded: false,
                topics: [
                    {
                        id: 'auth',
                        name: 'Authentication',
                        level: 'advanced',
                        description: 'User authentication',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'JWT', 
                                icon: 'devicon-nodejs-plain colored',
                                year: '2010',
                                desc: 'JSON Web Tokens untuk stateless auth',
                                comparison: 'vs Session: stateless, scalable, tapi can\'t revoke easily',
                                pros: ['Stateless', 'Scalable', 'Cross-domain', 'Mobile friendly'],
                                cons: ['Can\'t revoke', 'Token size', 'XSS vulnerable'],
                                example: `const jwt = require('jsonwebtoken');

// Generate token
const token = jwt.sign(
  { userId: user.id }, 
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
);

// Verify token
const decoded = jwt.verify(
  token, 
  process.env.JWT_SECRET
);`
                            },
                            { 
                                name: 'OAuth 2.0', 
                                icon: 'devicon-oauth-plain',
                                year: '2012',
                                desc: 'Third-party authentication protocol',
                                comparison: 'vs JWT: delegated auth, refresh tokens, tapi more complex',
                                pros: ['Third-party login', 'Refresh tokens', 'Granular permissions', 'Industry standard'],
                                cons: ['Complex', 'Multiple flows', 'Setup overhead'],
                                example: `// Using Passport.js
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, cb);
  }
));`
                            }
                        ]
                    },
                    {
                        id: 'security-best',
                        name: 'Security Best Practices',
                        level: 'advanced',
                        description: 'Secure coding practices',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'Password Hashing', 
                                year: '1976',
                                desc: 'Secure password storage dengan bcrypt',
                                comparison: 'bcrypt vs MD5/SHA1: salt built-in, slow by design, secure',
                                pros: ['Secure', 'Salt built-in', 'Adaptive', 'Industry standard'],
                                cons: ['Slow (by design)', 'CPU intensive'],
                                example: `const bcrypt = require('bcrypt');

// Hash password
const saltRounds = 10;
const hash = await bcrypt.hash(password, saltRounds);

// Verify password
const match = await bcrypt.compare(
  password, 
  hashedPassword
);`
                            },
                            { 
                                name: 'Environment Variables', 
                                year: '1979',
                                desc: 'Secure configuration management',
                                comparison: 'vs hardcoded: secure, flexible, different per environment',
                                pros: ['Secure', 'Flexible', 'Environment-specific', 'No commits'],
                                cons: ['Can be exposed', 'Management overhead', 'Deployment complexity'],
                                example: `// .env file
DATABASE_URL=postgresql://user:pass@localhost/db
JWT_SECRET=your-secret-key-here
API_KEY=your-api-key

// Usage
require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;`
                            }
                        ]
                    }
                ]
            },
            {
                id: 'tools',
                name: 'Developer Tools',
                icon: '🛠️',
                description: 'Essential development tools',
                expanded: false,
                topics: [
                    {
                        id: 'editors',
                        name: 'Code Editors',
                        level: 'beginner',
                        description: 'Development environment',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'VS Code', 
                                icon: 'devicon-vscode-plain colored',
                                year: '2015',
                                desc: 'Popular code editor dari Microsoft',
                                comparison: 'vs Sublime/Atom: free, extensions, IntelliSense, tapi memory heavy',
                                pros: ['Free', 'Extensions', 'IntelliSense', 'Git integration'],
                                cons: ['Memory heavy', 'Slow startup', 'Microsoft telemetry'],
                                example: `// settings.json
{
  "editor.fontSize": 14,
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "files.autoSave": "afterDelay",
  "workbench.colorTheme": "One Dark Pro"
}`
                            }
                        ]
                    },
                    {
                        id: 'package-managers',
                        name: 'Package Managers',
                        level: 'beginner',
                        description: 'Dependency management',
                        expanded: false,
                        subtopics: [
                            { 
                                name: 'npm', 
                                icon: 'devicon-npm-original-wordmark colored',
                                year: '2010',
                                desc: 'Node package manager - default',
                                comparison: 'vs Yarn: slower, tapi default dengan Node.js',
                                pros: ['Default with Node', 'Largest registry', 'Mature', 'Workspaces'],
                                cons: ['Slower', 'Disk space', 'Security issues'],
                                example: `# Install package
npm install express

# Install dev dependency
npm install --save-dev jest

# Install globally
npm install -g nodemon

# Run script
npm run dev`
                            },
                            { 
                                name: 'Yarn', 
                                icon: 'devicon-yarn-plain colored',
                                year: '2016',
                                desc: 'Fast, reliable package manager',
                                comparison: 'vs npm: faster, deterministic, tapi extra tool to install',
                                pros: ['Faster', 'Deterministic', 'Workspaces', 'Offline mode'],
                                cons: ['Extra install', 'Two lock files', 'Compatibility issues'],
                                example: `# Install dependencies
yarn install

# Add package
yarn add express

# Add dev dependency
yarn add --dev jest

# Run script
yarn dev`
                            }
                        ]
                    }
                ]
            }
        ],

        toggleCategory(categoryId) {
            const category = this.categories.find(c => c.id === categoryId);
            if (category) category.expanded = !category.expanded;
        },

        toggleTopic(categoryId, topicId) {
            const category = this.categories.find(c => c.id === categoryId);
            if (category) {
                const topic = category.topics.find(t => t.id === topicId);
                if (topic && topic.subtopics) topic.expanded = !topic.expanded;
            }
        }
    }
}
