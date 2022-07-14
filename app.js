const h1 = document.querySelectorAll('.h1')
const Ul = document.querySelectorAll('.ul')
h1.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.nextSibling.nextSibling.style.display==='block' ? e.nextSibling.nextSibling.style.display='none' : e.nextSibling.nextSibling.style.display='block'
    })
})
const date = new Date()
const dzisiaj = document.querySelector('.dzisiaj')
const fullMonth = ()=>{
    if (date.getMonth() + 1 < 10){
        return `0${date.getMonth() + 1}`
    } else {
        return date.getMonth() + 1
    }
}
dzisiaj.innerHTML = `${date.getDate()}.${fullMonth()}.${date.getFullYear()}`

const addCol = document.querySelector('.add-col')
const addRow = document.querySelector('.add-row')
const tbody = document.querySelector('tbody') 
const trHtml = document.querySelector('tr')
const trChildren = trHtml.children.length
addRow.addEventListener('click',()=>{
    let row = document.createElement("tr")
    tbody.appendChild(row)
    for(let i = 0; i< trChildren; i++){
        let td = document.createElement('td')
        td.innerText = 'td'
        row.appendChild(td)
    }
})
let rows = document.querySelectorAll('tr')
addCol.addEventListener('click',()=>{
    rows.forEach((e)=>{
        let td = document.createElement('td')
        td.innerText = 'td'
        e.appendChild(td)
    })
    
})