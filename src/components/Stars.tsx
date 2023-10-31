import Star from "./Star";

export interface Props {
    count: number
  }

function Stars({count} : Props){

    return (
        <>
            <ul className="card-body-stars u-clearfix">
                <li>
                    <Star count={count}/>    
                </li>
            </ul>
        </>
    )
}

export default Stars