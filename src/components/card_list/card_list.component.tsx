import { Monster } from "../../App";

import Card from "../card/card.component";
import "./card_list.styles.css"

type CardListProps = {
    monsters: Monster[],
}

const CardList = ({ monsters }: CardListProps) => (
            <div className="card-list">
                {monsters.map(monster => {
                    return (
                    <Card monster={monster}/>
                )})}
            </div>
        )

export default CardList;