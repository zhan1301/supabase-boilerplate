import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.21.0"

const supabaseUrl = 'https://ipyrmwnqbigslfeaykyi.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlweXJtd25xYmlnc2xmZWF5a3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5MjU3NjcsImV4cCI6MTk5ODUwMTc2N30.26xHEad3ZV7UdUcwwNWEXD5m7cAN6AxWEnKVL_ftcg8"
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  
  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><td>${book.title} - ${book.Author} - ${book.isbn} - ${book.description}</tr></td>`;
  } 
}

getBooks();