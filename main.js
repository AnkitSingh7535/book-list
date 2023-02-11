const form = document.querySelector("#book-form")
const tableList = document.querySelector("#book-list")

window.addEventListener("DOMContentLoaded",(e)=>{
    let books = JSON.parse(localStorage.getItem("books"))
    books.forEach(book => createRow(book.title,book.author,book.isbn))
        
    
})


tableList.addEventListener("click",(e) =>{
     removeRow(e)
     let books = JSON.parse(localStorage.getItem("books"))
     const isbn = (e.target.parentElement.previousElementSibling.textContent)
     const newbooks = books.filter(book => book.isbn!== isbn)
     console.log(newbooks)
     localStorage.setItem("books",JSON.stringify(newbooks))

})

form.addEventListener("submit",function(e){
    e.preventDefault()
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value
    if (title==='' || author==='' || isbn===''){
     
        
        alert("please Fill All the Fields")
        return

    }
    const book = {title,author,isbn}
    clearAllFields()
    createRow(title,author,isbn)
    addRow(book)
})

function clearAllFields(){
    
    document.querySelector("#title").value = ''
    document.querySelector("#isbn").value = ''
    document.querySelector("#author").value = ''
    
}
function createRow(title,author,isbn){
    

// tableList.innerHTML = `<tr>
// <td>${title}</td>
// <td>${author}</td>
// <td>${isbn}</td>
// <td><a href='#' class="btn btn-danger btn-danger float-right delete">X</a></td>
// </tr>`
const tr = document.createElement("tr")//<tr></tr>
tr.innerHTML = `    <td>${title}</td>
// <td>${author}</td>
// <td>${isbn}</td>
// <td><a href='#' class="btn btn-danger btn-danger float-right delete">X</a></td>
// </tr>`
tableList.appendChild(tr)
}
function addRow(book){
let newbook;
     if(localStorage.getItem("books") === null){
        newbook = []
     }else{
  newbook = JSON.parse(localStorage.getItem("books"))
     }
     newbook.push(book)
     
    localStorage.setItem("books",JSON.stringify(newbook))
    }

    function removeRow(e){

        if(e.target.classList.contains("delete")){
            tableList.removeChild(e.target.parentElement.parentElement)
            
        }
    }