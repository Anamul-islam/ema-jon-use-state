  const reducer = (state,action) =>{
    switch (action.type) {
        case "SET_LOADING" :
            return{
                ...state,
                isLoading:true,
            }





        case "ADD_HITS":
            return{
                ...state,
                hits : action.payload.hits,
                nbPages:action.payload.nbPages,
                isLoading:false,
            };


            case "S" :
                return{
                    ...state,
                    query:action.payload,
                }

                case "NEXT" :
                    let pageInc = state.page+1;
                    if(pageInc >= state.nbPages){
                        pageInc = 0;
                    }
                    return{
                        ...state,
                        page:  pageInc,
                    }
                    case "PRE" :
                        let pagenum = state.page;
                        if(pagenum <= 0){
                            pagenum = 0;
                        }else{
                            pagenum = pagenum -1;
                        }
                        return{
                            ...state,
                            page: pagenum,
                        }
                
    
            default:
                break;
    }
       return state;
  };
    

   
 

export default  reducer;
 