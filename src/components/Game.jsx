import React, { Component } from 'react';
import Prompt from './Prompt';


const imgs = ["https://media.giphy.com/media/FT6DYlscgddh8cTR6d/giphy.gif", "https://media.giphy.com/media/nC30bN4yizgek/giphy.gif", "https://media.giphy.com/media/R8bcfuGTZONyw/giphy.gif",
 "https://media.giphy.com/media/TcKmUDTdICRwY/giphy.gif", "https://media.giphy.com/media/i8nNwZo3Ew31m/giphy.gif", "https://media.giphy.com/media/GFLIjIaiAL0kw/giphy.gif",
 "https://media.giphy.com/media/pt0EKLDJmVvlS/giphy.gif", "https://media.giphy.com/media/xW2Ii8pyLiYZKN2LRH/giphy.gif"];

const items = [];

for (let i = 0; i < imgs.length; i++){
    items.push({
        id: i,
        content: `${imgs[i]}`,
        displayed: false
    })
}



export default class Game extends Component {

    constructor(props){
        super(props)
        this.state = {
            items,
        };
        this.handleAnswer = this.handleAnswer.bind(this);
    }
       randomItemIndex() {
            let rand = Math.floor(Math.random() * items.length);
            return rand;
       }
       handleAnswer(event, item, index, answer){
            // Compare item.displayed with answer
            // Either increment or reset current score
            this.props.handleScore(item.displayed === answer);

            // Change the item that is displayed

             // If the shown item hasn't been displayed, changed displayed property, change displayed property to true
             if(!item.displayed){
               const items = this.state.items.map( i => {
                if(i === item){
                i.displayed = true;
                return i;   
                } else {
                    return i;
                }
               });
               this.setState({ items });
             }
             if(this.props.currentScore === 0){
                const items = this.state.items.map(i => {
                    i.displayed = false;
                    return i;
                });
                this.setState ({ items });
             }
       }

    
    render() {
        const { items } = this.state;
        const index = this.randomItemIndex();
        const item = items[this.randomItemIndex()];
        return(
            <main className="d-flex justify-content-around align-items-center">
                <p id={index}><img alt="Current guess" src={`${item.content}`} /></p>
                <Prompt 
                item={item} 
                handleAnswer={this.handleAnswer} 
                index={index} 
                />
            </main>
        )
    }
}