import { authorsValidate, imgValidate, priceValidate, ratingValidate, descriptionValidate } from "./bookValidations";
import { BookResponse, BookVolume} from "./interfaces";

const loadMoreBtn = document.querySelector(".book-catalog_loadMore") as HTMLElement;
const booksSection = document.querySelector(".book-catalog-list") as HTMLElement;
const categories = document.querySelectorAll(".category-list_li") as NodeListOf<HTMLElement>

let currentCategory:string = "Architecture"

const fetchBooks = async (currentCategory:string, token:string):Promise<void> => {
    try {
        let response:Response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${currentCategory}"&key= ${token} &printType=books&startIndex=0&maxResults=6&langRestrict=en`)
        
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        let data:BookResponse = await response.json();
        if(data){data.items.forEach((book: BookVolume) => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book';

            bookElement.innerHTML = `
       <img src="${imgValidate(book.volumeInfo.imageLinks)}" alt="" class="book-img">
       <div class="book-info">
           <p class="book-info_author">${authorsValidate(book.volumeInfo.authors)}</p>
           <h1 class="book-info_h1">${book.volumeInfo.title}</h1>
           <div class="book-rating">
               ${ratingValidate(book.volumeInfo.averageRating, book.volumeInfo.ratingsCount)}
           </div>
           <p class="book-info_description">${descriptionValidate(book.volumeInfo.description)}</p>
           <div class="book-info_price">${priceValidate(book.saleInfo.retailPrice)}</div>
           <button class="book-info_button">IN THE CART</button>
       </div>
   `;
           booksSection.appendChild(bookElement)
           
       }) }
         
    } catch(error) {
        console.error("Error fetching books:", error);
    } 
}

fetchBooks(currentCategory, "AIzaSyBbTAT12E1n5MMyhWBAQMZNl1EZFgkcKWI")

const getBookList = (token:string):void => {
    categories.forEach((category:HTMLElement):void => {
        category.addEventListener("click", async ():Promise<void> => {
            categories.forEach((el) => {el.classList.remove("active-category")})  
            currentCategory = category.textContent || currentCategory
            category.classList.add("active-category")
            booksSection.innerHTML = ''
            fetchBooks(currentCategory, token)
        })
    })
}

export default getBookList