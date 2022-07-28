

import React, {useContext, useEffect,useReducer } from "react";

import  reducer  from "./reducer"; 
let API = "http://hn.algolia.com/api/v1/search?"
const initialArg = {
    isError : ({ show: "false", msg: "" }),
    isLoading : true,
     query:"HTML",
     nbPages:0,
     page :0,
     hits :[],
}

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
   
    const [state, dispatch] = useReducer(reducer, initialArg);
    
  

const fecthApiData = async (url) =>{

    dispatch({type:"SET_LOADING"})
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.Error);
            dispatch({
                type:"ADD_HITS",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages, 
                }
                  })

                  dispatch({

                  })


        } catch(error){
            console.log(error);
        }
}

//search
const Searchs = (i) =>{
    dispatch({
        type:"S",
        payload:i ,
    })
}

const getnext = () =>{
    dispatch({
        type:"NEXT",
    })
}

const getpre = () =>{
   
    dispatch({
        type:"PRE",
    })
}

useEffect(()=>{
    fecthApiData(`${API}query=${state.query}&page=${state.page}`);
}, [state.query,state.page]);

    return <AppContext.Provider value={{...state,Searchs,getpre,getnext}}>{children}</AppContext.Provider>
}

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext}