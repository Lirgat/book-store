import { authorsValidate, imgValidate } from "./bookValidations";

interface BookVolume {
    volumeInfo: {
        title: string;
        imageLinks: {
            thumbnails: string | undefined;
        };
        authors: string[];
        averageRating: number | undefined;
        ratingsCount: number | undefined;
        description: string;
        saleInfo: {
            retailPrice: number | undefined;
        };
    };
}

interface BookResponse {
    items: BookVolume[];
}

const loadMoreBtn = document.querySelector(".book-catalog_loadMore") as HTMLElement;
const booksSection = document.querySelector(".book-catalog-list") as HTMLElement;
const categories = document.querySelectorAll(".category-list_li") as NodeListOf<HTMLElement>

let currentCategory:string = "Architecture"

const createHtmlBook = (authors:string[], title: string, description:string, img:string | undefined, price:number | undefined, ratingsCount:number | undefined, averageRating:number | undefined):string => {
        return `<div class="book">
        <img src="${imgValidate(img)}" alt="" class="book-img">
    <div class="book-info">
        <p class="book-info_author">${authorsValidate(authors)}</p>
        <h1 class="book-info_h1">${title}</h1>
        <div class="book-rating">
            <div class="book-rating-stars"><img src="" alt="" class="book-rating-stars_star"></div>
            <div class="book-rating-counting"><p class="book-rating-counting_count">${ratingsCount} review</p></div>
        </div>
        <p class="book-info_description">${description}</p>
        <div class="book-info_price"></div>
        <button class="book-info_button">IN THE CART</button>
    </div>
</div>`
}

const getBookList = (token:string):void => {
    categories.forEach((category:HTMLElement):void => {
        category.addEventListener("click", async ():Promise<void> => {
            
            currentCategory = category.textContent || currentCategory
            
            try {
                let response:Response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${currentCategory}"&key= ${token} &printType=books&startIndex=0&maxResults=6&langRestrict=en`)
                
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                let data:BookResponse = await response.json();

                data.items.forEach((book: BookVolume) => {})
            } catch {

            } 
        })
    })
}

export default getBookList