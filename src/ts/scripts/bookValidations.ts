import { BookImage, RetailPriceObj } from "./interfaces";

const authorsValidate = (authors: string[]): string => {
  let authorsHTML = "";
  if (authors.length === 1) {
    authorsHTML = `${authors[0]}`;
    return authorsHTML;
  } else {
    for (let i: number = 0; i < authors.length; i++) {
      authorsHTML += `${authors[i]}, `;
    }
    return authorsHTML.trim().slice(0, -1);
  }
};

const imgValidate = (img: BookImage | undefined): string => {
  if (img && img.thumbnail) {
    return img.thumbnail;
  } else {
    return "./assets/img/jpg/placeholder.jpg";
  }
};

const priceValidate = (
  price: RetailPriceObj 
): string => {
  if (price === undefined || price.amount === undefined) {
    return "FREE";
  } else {
      return `₽${price.amount}`;
  }
};

const ratingValidate = (averageRating: number | undefined, ratingsCount:number | undefined):string => {
  const imgItem:string = `<img src="" alt="" class="book-rating-stars_star">`
  
  if(ratingsCount === undefined || averageRating === undefined){
    return '<p class="book-rating-counting_count">No reviews</p>'
  } else {
    let throwHTML:string = '';

    for(let i:number = 0; i <= averageRating; i++){
      throwHTML += imgItem;
    }

    return `<div class="book-rating-stars">${throwHTML}</div> 
    <p class="book-rating-counting_count">${ratingsCount} review</p>`
  }
}

const descriptionValidate = (description: string | undefined):string => {
  if(description === undefined){
    return 'Book without description'
  } else {
    return `${description}`
  }
} 

export { authorsValidate, imgValidate, priceValidate, ratingValidate, descriptionValidate };
