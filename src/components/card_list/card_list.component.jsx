// import { Component } from "react";

import Card from "../card/card.component";
import "./card_list.styles.css"


const CardList = ({ monsters }) => (
            <div className="card-list">
                {monsters.map(monster => {
                    return (
                    <Card monster={monster}/>
                )})}
            </div>
        )


/*
class CardList extends Component {
    
    render() {
        console.log('render')
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map(monster => {

                    return (
                    <Card monster={monster} />
                )})}
            </div>
        )
    }
}
*/

export default CardList;