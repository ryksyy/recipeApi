import axios from "axios";
import React, {useEffect, useState} from "react";
import env from "react-dotenv";
import Layout from "./Layout";

const addr = "https://api.spoonacular.com/recipes/random?number=1&apiKey=" + env.API;

export default function GetRandom(){
    const [steps, setInstructions] = useState(0);
    const [source, setSource] = useState('');
    const [summary, setSummary] = useState('');
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    
    useEffect(() => {
        axios.get(addr)
            .then((res) => {
                setInstructions(res.data.recipes[0].analyzedInstructions[0].steps);
                setSource(res.data.recipes[0].creditsText);
                setSummary(res.data.recipes[0].summary);
                setTitle(res.data.recipes[0].title)
                setIngredients(res.data.recipes[0].extendedIngredients)
            }).catch(err => {
                alert(err)
            })
    }, [])

    return (
        <>
            <Layout steps={steps} source={source} summary={summary} title={title} ingredients={ingredients}/>
        </>
    )
}