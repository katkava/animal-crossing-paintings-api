const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

let paintings = {
 "academic": {
   "realName": "Vitruvian Man",
   "artist": "Leonardo Da Vinci",
   "year": 1490,
   "type": "Small",
   "fake": "The forged painting has a coffee stain on the top right whereas the genuine does not. The forgery also has a strange key taped to the back."
 },
 "amazing": {
   "realName": "The Night Watch, Militia Company of District II under the Command of Captain Frans Banninck Cocq",
   "artist": "Rembdrandt van Rijn",
   "year": 1642,
   "type": "Large Painting",
   "fake": "In the forged painting, the man with the red sash is not wearing a hat; whereas in the genuine painting, he is."
 },

 "basic": {
   "realName": "The Blue Boy",
   "artist": "Thomas Gainsborough",
   "year": 1770,
   "type": "Large Painting",
   "fake": "In the forged painting, the boy has bangs covering his entire forehead; whereas in the genuine one, there is less hair covering his forehead.he is."
 },
 "unknown": {
   "realName": "Unkown",
   "artist": "Unknown",
   "year": 0000,
   "type": "Unknown",
   "fake": "Unknown"
 }

} 
 


app.get("/", (request, response) => {
 response.sendFile(__dirname + '/index.html')
})

app.get("/api/paintings/:paintingName", (request, response)=> {
 const paintName = request.params.paintingName.toLowerCase()
 if(paintings[paintName]){
  response.json(paintings[paintName])
 }else{
 response.json(paintings["unknown"])
 } 
})

app.listen(process.env.PORT || PORT, ()=>{
 console.log(`server is running on port ${PORT}`)
}) 