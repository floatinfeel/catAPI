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


function ListCat({filteredData}){
    const cats = useSelector((state) => state.catReducer)
    console.log(cats);
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(readData())
    }, [dispatch])
    return(
       <div className="list-cat">
           {
            filteredData.map((cat, idx) =>(
                <CardCat 
                    cat={cat}
                    key={idx}
                />
            ))   
           }
       </div>
    )

    
}

export default ListCat
