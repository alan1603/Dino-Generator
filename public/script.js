
async function getDinoName(){
    const res = await fetch('/dinoname')
    const data = await res.json()
    let dinoName = data[0].join(' ')
    console.log(dinoName)

   

    let dinoNameDiv = document.createElement('div')
    dinoNameDiv.id = 'dinoName'
    dinoNameDiv.textContent = dinoName
    document.querySelector('#dinoWrapper').appendChild(dinoNameDiv)
}

async function getDinoImage(){
    const res = await fetch('/dinoimage')
    const data = await res.json()
    let dinoImage = data.value[Math.floor(Math.random() * data.value.length)]
    let dinoImageUrl = dinoImage.thumbnailUrl
    let dinoAlt = dinoImage.name
    console.log(dinoImage)

    

    let img = document.createElement('img')
    img.id = 'dinoImage'
    img.src = dinoImageUrl
    img.alt = dinoAlt
    document.querySelector('#dinoWrapper').appendChild(img)
}

document.querySelector('#btnLoad').addEventListener('click',()=>{
    if(document.querySelector('#dinoName') !== null){
        document.querySelector('#dinoName').remove()
    }
    if(document.querySelector('#dinoImage') !== null){
        document.querySelector('#dinoImage').remove()
    }
    getDinoName()
    getDinoImage()
})
