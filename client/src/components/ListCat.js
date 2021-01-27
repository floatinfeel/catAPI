import React, {useEffect} from 'react';
import CardCat from './Card';
import {useSelector, useDispatch} from 'react-redux'
import { readData } from '../store/actions/catAction';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//       circular: {
//         display: 'flex',
//         '& > * + *': {
//           marginLeft: theme.spacing(2),
//         },
//         justifyContent: 'center',
//         justifyItems: 'center',
//         marginTop: '300px',
//       },
// }));


function ListCat({loading, setLoading, page, setPage}){
    const cats = useSelector((state) => state.catReducer)
    console.log(cats);
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(readData())
    }, [])
    return(
       <div className="list-cat">
           {
            cats.map((cat, key) =>(
                <CardCat 
                    cat={cat}
                    key={key}
                />
            ))   
           }
       </div>
    )

    
}

export default ListCat
