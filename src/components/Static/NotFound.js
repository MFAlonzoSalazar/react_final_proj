import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion} from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
    return(
        <div style={{paddingTop:"8%"}} >
            <FontAwesomeIcon icon={faQuestion} size="10x" />

            <h1 style={{paddingTop: "20px"}}>
                The page you are looking for does not exist, try again
            </h1> 
        </div>
    )
}