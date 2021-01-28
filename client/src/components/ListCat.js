import React, {useState, useEffect} from 'react';
import CardCat from './Card';
import {useSelector, useDispatch} from 'react-redux'
import { readData, advancedPage } from '../store/actions/catAction';

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
    const {page,loading, noMore} = useSelector(state => state.catReducer)
    const dispatch = useDispatch()

    // window.onscroll = () => {
    //     if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
    //       if(!noMore) {
    //         dispatch(readData())
    //       }
    //     }
    // }
    useEffect(() =>{
        
        dispatch(readData())
    }, [dispatch, page])


    return(
           
        loading ? (<div className={classes.circular}>
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
                {noMore ? <div className="text-center">no data anymore ...</div> : "" }
            </div>
            
        )
    
    )

    
}

export default ListCat
