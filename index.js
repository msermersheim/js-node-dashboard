const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.sendFile(__dirname + '/pages/index.html'))
app.use(express.static(__dirname + '/pages'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
From the hrsf75 starter app:
  // Uncomment for react:
app.use(express.static(__dirname + '/../react-client/dist'));  
  
*/
