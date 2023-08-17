import { Component } from "react";

import Card from "../card/card.component";
import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props
    return <Card monsters={monsters}/>
    // return (
    //   <div className='card-list'>
    //     {monsters.map((monster) => {
    //       const { name, email, id } = monster;
    //       return(
    //         <div className="card-container" key={id}>
    //           <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
    //           <h2>{name}</h2>
    //         <p>{email}</p>
    //       </div>
    //     )})}
    //   </div>
    // )
  }
}

export default CardList;