import React from 'react'

function BeerCard(props) {
    return (
        <li style={{ listStyle: "none"}}>
            {props.name}
            <img style={{ heigth: "200px" }} alt={"cans"} src={props.image_url}></img>
            
        </li>
    )
}

export default BeerCard;