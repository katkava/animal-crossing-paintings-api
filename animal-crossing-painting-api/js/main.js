document.querySelector("button").addEventListener("click", getPaintingName)

async function getPaintingName() {
 const paintName = document.querySelector("input").value
 try { 
  const res = await fetch(`https://anima-crossing-api.herokuapp.com/api/paintings/${paintName}`)
  const data = await res.json()

  document.querySelector("h2").innerText = data.realName

 }catch(err){
  console.log(err)
 }

}