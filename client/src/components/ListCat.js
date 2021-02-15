import React, {useEffect} from 'react';
import CardCat from './Card';
import {useSelector, useDispatch} from 'react-redux'
import { readData} from '../store/actions/catAction';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'


const useStyles = makeStyles((theme) => ({
      circular: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
        justifyContent: 'center',
        justifyItems: 'center',
        marginTop: '300px',
      },
}));


function ListCat({filteredData}){
    const classes = useStyles()
    const {loading, cats} = useSelector(state => state.catReducer)
    const dispatch = useDispatch()

    useEffect(() =>{
        // dispatch(moreData())
        dispatch(readData())
    }, [dispatch])



    return(
        
        loading ? (
        <div className={classes.circular}>
            <CircularProgress />
        </div> ) : (
            
            <div className="list-cat" style={{overflowY: 'auto'}} onScroll={(event) => console.log(event)}>
                {
                    filteredData && filteredData.map((cat, idx) =>(
                        <CardCat
                            cat={cat}
                            key={idx}
                        />
                    ))
                }
            </div>
            
        )
    
    )

    
}

export default ListCat
