
// Your Code Here
async function main(){
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    
    books.forEach(renderBook)
}
document.body.style.backgroundColor = 'lightblue'
function renderBook(book){
    let root = document.querySelector('#root')
    let li = document.createElement('li')
        li.textContent= book.title
        li.style.color = 'darkblue'
        li.style.backgroundColor = 'lightyellow' 
    let quantityInput = document.createElement('input')
        quantityInput.value = book.quantity    
    let saveButton = document.createElement('button')
        saveButton.textContent = 'Save'

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: book.id,
            quantity: quantityInput.value
        })
      })
      document.body.style.backgroundColor = 'palegreen'
    })
    li.append(quantityInput, saveButton)
    root.append(li)
}

main()