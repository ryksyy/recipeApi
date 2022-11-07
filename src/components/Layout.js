import React from "react";

export default function Layout(props){
    console.log(props.ingredients)
    console.log(props.steps)
    let stepDsc = "";
    let ingredients = "";
    for(let i = 0; i < props.steps.length; i++){
        stepDsc = stepDsc.concat("<li>", props.steps[i].step,"</li>")
    }

    for(let i = 0; i < props.ingredients.length; i++){
        ingredients = ingredients.concat("<li>",props.ingredients[i].measures.us.amount, " ", 
        props.ingredients[i].measures.us.unitLong," of ", props.ingredients[i].nameClean,"</li>")
    }

    return (
        <div className="recipe">
            <h3 id="source">{props.source}</h3>
            <h1 id="title">{props.title}</h1>
            <div id="summary" dangerouslySetInnerHTML={{__html: props.summary}}/>
            <ul id="ingredientsList">
                <div id="ingredient" dangerouslySetInnerHTML={{__html: ingredients}}/>
            </ul>
            <ol id="stepsList">
                <div id="step" dangerouslySetInnerHTML={{__html: stepDsc}}/>
            </ol>
        </div>
    )
}