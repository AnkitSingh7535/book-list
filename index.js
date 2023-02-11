class Book{

    constructor(title,author,isbn){
        this.title = title
        this.author = author
        this.isbn = isbn

    }
}
const tableList = document.querySelector("#book-list")

class UI{

static addBook(book){
    const tr = document.createElement("tr")//<tr></tr>
tr.innerHTML = `    <td>${book.title}</td>
// <td>${book.author}</td>
// <td>${book.isbn}</td>
// <td><a href='#' class="btn btn-danger btn-danger float-right delete">X</a></td>
// </tr>`
tableList.appendChild(tr)

}
static clearAllFields(){
    document.querySelector("#title").value = ''
    document.querySelector("#isbn").value = ''
    document.querySelector("#author").value = ''
}

static showMsg(msg,className){

    const div = document.createElement("div")//<div></div>
    div.className = `alert alert-${className}`
    div.appendChild(document.createTextNode(msg))
    console.log(div)
    const container = document.querySelector(".container")
    const form = document.querySelector("#book-form")
    container.insertBefore(div,form)
    setTimeout(()=>{
document.querySelector(".alert").remove()
    },3000)
}


}


class Store{
static storeBook(book){

    let newbook;
     if(localStorage.getItem("books") === null){
        newbook = []
     }else{
  newbook = JSON.parse(localStorage.getItem("books"))
     }
     newbook.push(book)
     
    localStorage.setItem("books",JSON.stringify(newbook))
}


}
//Event
let form = document.querySelector("#book-form")
form.addEventListener("submit",(e)=>{
e.preventDefault()
const title = document.querySelector("#title").value
const author = document.querySelector("#author").value
const isbn = document.querySelector("#isbn").value
if(title === '' || author === '' || isbn===''){
UI.showMsg("please fill All the Fields","danger")
}else{

    const book = new Book(title,author,isbn)
    UI.showMsg("Book Added Successfuly","success")
    UI.addBook(book)
    UI.clearAllFields()
    Store.storeBook(book)
}

})