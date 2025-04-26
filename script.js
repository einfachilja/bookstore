// bücher anzeigen
function render() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let index = 0; index < books.length; index++) {
    const TITLE = books[index].name;
    const PRICE = books[index].price.toFixed(2);
    const LIKES = books[index].likes;
    const AUTHOR = books[index].author;
    const YEAR = books[index].publishedYear;
    const GENRE = books[index].genre;

    contentRef.innerHTML += getBookTemplate(TITLE, PRICE, LIKES, AUTHOR, YEAR, GENRE, index);
    loadComments(index);
    loadLikeStatus(index);
  }
}

// kommentare anzeigen
function loadComments(index) {
  let commentsArr = books[index].comments;
  let commentsContainerRef = document.getElementById('comment_container' + index);
  commentsContainerRef.innerHTML = '';

  for (let i = 0; i < commentsArr.length; i++) {
    let commentName = books[index].comments[i].name;
    let comment = books[index].comments[i].comment;


    if (commentsContainerRef != null) {
      commentsContainerRef.innerHTML += getCommentsTemplate(commentName, comment);
    }
  }
}

// like status laden
function loadLikeStatus(index) {
  let likeStatusRef = document.getElementById('like_status' + index)

  if (books[index].liked == true) {
    likeStatusRef.src = './assets/img/heart_liked.png';
  } else likeStatusRef.src = './assets/img/heart_not_liked.png';

}

// // like function
function chageLikeStatus(index) {
  if (books[index].liked == true) {
    books[index].liked = false;
    books[index].likes--;
  } else {
    books[index].liked = true;
    books[index].likes++;
  }
  render();
}

// kommentar funktion
function addComment(index) {
  let inputMessageValue = document.getElementById('input_message' + index).value;

  if (inputMessageValue.length != 0) {
    books[index].comments.push({'name': "Ilja",'comment':inputMessageValue});
    render();
  } 
}




// extra challenge local storage
// schicken code mit Ordnern, template funkctions usw