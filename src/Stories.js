import React from 'react';
import { useGlobalContext } from './Conntext';
const Stories = () => {
    const {hits,nbPages,isLoading } = useGlobalContext();

    if(isLoading ){
        return(
            <>
                <h1>LOading....</h1>
            </>
        )
           
        
    }




    return (
        <div>
             {
                hits.map((item) =>{

                    const {title,url} = item;
                    return <>

                    <p>{title}</p>
                    <a href={url}>Read more</a>


                    </>

                    
                    
                })
             }
 
        </div>
    );
};

export default Stories;