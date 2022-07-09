const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
  '21 savage': {
    'age': 28,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthPlace': 'London, England'
   },
  'chance the rapper': {
    'age': 27,
    'birthName': 'Chancelor Jonathan Benette',
    'birthPlace': 'Chicago, Illinois'
   },
   '2pac': {
    'age': 51,
    'birthName': 'Tupac Shakur aka Makiaveli',
    'birthPlace': 'New York City, New York'
   },
   'dylan': {
    'age': 28,
    'birthName': 'dylan',
    'birthPlace': 'dylan'
   }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]) {
      response.json(rappers[rapName])
    }else{
      response.json(rappers['dylan'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})