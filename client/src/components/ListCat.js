import React, {useEffect} from 'react';
import CardCat from './Card';
import {useDispatch} from 'react-redux'
import { readData } from '../store/actions/catAction';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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


function ListCat({page, setPage, filteredData, loading, setLoading}){
    const classes = useStyles()
    
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(readData(page))
        setLoading(false)
    }, [dispatch])
    return(
       loading ? (
            <div className={classes.root}>
                <CircularProgress />
            </div>
       ) : (
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
       
    )

    
}

export default ListCat
