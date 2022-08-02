import { Component } from "react";

import"./card.styles.css"


const Card = ({ monster }) => {
    const {id, name, email} = monster;
    
    return (
            <div className="card-container" key={id} >
                <img 
                className="image" 
                alt={`monster ${name}`} 
                src={`https://robohash.org/${id}/?set=set2&size=180x180`} 
                />
                <h2 className="name" >{name}</h2>
                <p className="email" >{email}</p>
            </div>
            )
        }


/*
class Card extends Component {
    render() {
        const{id, name, email} = this.props.monster;
                return (
                <div className="card-container" key={id} >
                    <img className="image" alt={`monster ${name}`} src={`https://robohash.org/${id}/?set=set2&size=180x180`} />
                    <h2 className="name" >{name}</h2>
                    <p className="email" >{email}</p>
                </div>
            )
    }
}
*/

export default Card;