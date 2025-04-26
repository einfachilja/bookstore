// bücher anzeigen
function render(){
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const TITLE = books[i].name;
    const PRICE = books[i].price.toFixed(2);
    const LIKES = books[i].likes;
    const AUTHOR = books[i].author;
    const YEAR = books[i].publishedYear;
    const GENRE = books[i].genre;

    contentRef.innerHTML += getBookTemplate(TITLE, PRICE, LIKES, AUTHOR, YEAR, GENRE, i);
    renderComments(i);
    }
  }


function renderComments(i) {
  let myCommentsArr = books[i].comments;
  let commentContentRef = document.getElementById('comment_content' + i);
  commentContentRef = '';

  for (let c = 0; c < myCommentsArr.length; c++) {
    let name = books[i].comments[c].name;
    let comment = books[i].comments[c].comment;
      
    console.log(name);
    


    }
  }




// like function
// kommentar funktion
// extra challenge local storage
// schicken code mit Ordnern, template funkctions usw
