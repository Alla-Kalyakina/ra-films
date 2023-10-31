import { Props } from "./Stars";

function Star({count} : Props){
    
    if(count >=1 && count <= 5) {
        const arrSrars = [];
        for(let i = 0; i < count; i++) {
            arrSrars.push(i);
        }
        const stars = arrSrars.map(index =>
            <svg key = {index} fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                <path d="M0 0h18v18H0z" fill="none"/>
            </svg>
        )
        return stars
    }
}

export default Star
