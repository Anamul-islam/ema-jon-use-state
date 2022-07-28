 
 import {useGlobalContext} from './Conntext.js'
 const Pageination = () => {
 const {page,nbPages,getnext,getpre} = useGlobalContext();
    return (
        <div>
                <button onClick={()=>getnext()}>next</button>
                    <span>{page+1}of{nbPages}</span>
                <button onClick={()=>getpre()}>pre</button>
        </div>
    );
 };
 
 export default Pageination;