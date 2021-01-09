import { Link } from 'react-router-dom';


export default function FooterLink({
    children,
    url
}){

    return(
        <Link to={{ pathname:url }} >
            {children}
        </Link>
    )
}