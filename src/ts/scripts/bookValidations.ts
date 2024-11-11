const authorsValidate = (authors:string[]):string => {
    let authorsHTML = ''
    if(authors.length === 1) {
        authorsHTML = `${authors[0]}`
        return authorsHTML
    } else {
        for(let i:number = 0; i < authors.length; i++){
            authorsHTML += `${authors[i]}, `
        }
        return authorsHTML.trim().slice(0, -1)
    }
    
}

const imgValidate = (img:string | undefined):string => {
    let showImageHTML:string | undefined = img
    if(showImageHTML === undefined){
        return "./assets/img/jpg/placeholder.jpg";
    } else {
        return showImageHTML
    }
}

const priceValidate = (price: number | undefined, currencyCode: string | undefined):string => {
    if(price === undefined || currencyCode === undefined){
        return ''
    } else {
        if(currencyCode === "RUB"){
            return `₽${price}`
        } else {
            return ''
        }
    }
}

export {authorsValidate, imgValidate, priceValidate}