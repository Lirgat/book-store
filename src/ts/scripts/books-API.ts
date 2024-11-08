interface BookVolume {
    volumeInfo: {
        title: string;
        imageLinks: {
            thumbnails?: string;
        };
        authors: string[];
        averageRating?: number;
        ratingsCount?: number;
        description: string;
        saleInfo?: {
            retailPrice: number;
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

const createHtmlBook = (obj: BookVolume):string => {
    return ``
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