import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import axios from "axios"

const Main = () => {
    const [Pokedata,SetPokedata]=useState([])
    const [loading,setloading]=useState(true)
    const [url,seturl]=useState("https://pokeapi.co/api/v2/pokemon")
    const [nexturl,setnexturl]=useState()
    const [prevurl,setprevurl]=useState()

    const PokeFun=async()=>{
        setloading(true)
        const res=await axios.get(url)
        // console.log(res.data.results)
        setnexturl(res.data.next)
        setprevurl(res.data.previous)
        getpokemon(res.data.results)
        setloading(false)
       
    }
    const getpokemon=async(res)=>{
        res.map(async(item)=>{
            const result=await axios.get(item.url)
            SetPokedata(state=>{
                state=[...state,result.data]
                state.sort((a,b)=>a.id > b.id ?1:-1)
                return state;
            })
        })


    }

    useEffect(()=>{
        PokeFun()

    },url)
    return (
        <div><div className="container">
            <div className="left-container">
                <Card pokedata={Pokedata} loading={loading}/>
               
                <div className="btn-grp">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
            <div className="right-container">
                <Pokeinfo/>
            </div>
        </div></div>
    )
}

export default Main