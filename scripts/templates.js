function getBookTemplate(TITLE, PRICE, LIKES, AUTHOR, YEAR, GENRE, i) {
    return `
    <div id="content" class="content">
        <div class="contant-card">
          <div class="top-box">
            <h1>${TITLE}</h1>
            <img class="card-img" src="./assets/img/book_card.png" alt="">
          </div>  
            
            <div class="price-box">
            <span class="price-tag">${PRICE.toString().replace(".", ",")} EUR</span>
              <div class="like-box">
                <b>${LIKES}</b>
                HERZ
            </div>
            </div>
            <div class="information-box">
                <span><h3>Author:</h3> ${AUTHOR}</span>
                <span><h3>Erscheinungsjahr:</h3> ${YEAR}</span>
                <span><h3>Genre:</h3>${GENRE}</span>
            </div>
            <div>
            <h2>Kommentare</h2>
            <div id="comment_content${i}}">
            
            </div>
            </div>
        </div>
    </div>`;
}