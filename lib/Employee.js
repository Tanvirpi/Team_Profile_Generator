class Employee {
    constructor(name, employeeId, email) {
      this.name = name;
      this.employeeId = employeeId;
      this.email = email;
    }
    getbeginninghtml() {
        const html = `<!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Bootstrap demo</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
          </head>
          <body>
          <header class="bg-primary text-center text-white">
          <h1>Team Profile Generator</h1>
          </header>
          <main class="container d-flex flex-wrap justify-content-evenly">
          `
            
        return html;
    }
 
      
    getendHTML(){
        return `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </main>
        </body>
    </html>`
    }

    getRole(){
        return "Employee"
    }
  }
  
  module.exports = Employee;