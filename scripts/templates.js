function getBookTemplate(TITLE, PRICE, LIKES, AUTHOR, YEAR, GENRE, index) {
  return `
  <div class="contant-card">
    <div class="top-box">
        <h1>${TITLE}</h1>
        <img class="card-img" src="./assets/img/book_card.png" alt="">
    </div>

    <div class="price-box">
        <span class="price-tag">${PRICE.toString().replace(".", ",")} EUR</span>
        <div class="like-box">
            <b>${LIKES}</b>
            <img class="heart" id="like_status${index}" src="" alt="" onclick="chageLikeStatus(${index})">
        </div>
    </div>
    <div class="information-box">
        <span>
            <h3>Author:</h3> ${AUTHOR}
        </span>
        <span>
            <h3>Erscheinungsjahr:</h3> ${YEAR}
        </span>
        <span>
            <h3>Genre:</h3>${GENRE}
        </span>
    </div>
    <h2>Kommentare</h2>
    <div class="comment-container">
        <div id="comment_container${index}"></div>
    </div>
    <div class="comment-box">
        <input id="input_message${index}" class="message-box" type="text" placeholder="Kommentar eingeben..." required>
        <img class="send-img" src="./assets/img/send.png" onclick="addComment(${index})" alt="">
    </div>
  </div>`;
}

function getCommentsTemplate(commentName, comment) {
  return `
  <div>
    <p><b>[${commentName}]:</b></p>
    <p>${comment}</p><br>
  </div>`;
}