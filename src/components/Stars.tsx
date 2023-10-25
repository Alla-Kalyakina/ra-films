import Star from "./Star";

export interface Props {
    count: number
  }

//Stars.defaultProps = {count:0};

function Stars({count} : Props){

    if(count >=1 && count <= 5)
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