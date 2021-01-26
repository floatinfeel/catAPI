import React, {useEffect, useState} from 'react';

import axios from 'axios';
import useInfiniteScroll from '../hooks/useInfinite.js'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 360,
        marginBottom: '35px',
      },
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


const ListCat = ({catList, setCatList, loading, setLoading, 
    page, setPage}) => {

    const classes = useStyles();
    let url = `https://api.thecatapi.com/v1/breeds`
    const apiKey = 'ae5dc580-b37a-4247-aeb0-77410ef2d4f0'
    const [isFetching, setIsFetching] = useInfiniteScroll(moreData);

    const loadData = () =>{
        
        setLoading(true)
        axios
            .get(`${url}?limit=10`, { headers: {'x-api-key': apiKey} })
            .then((res) =>{
                setLoading(false)
                setCatList(res.data)
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    function moreData(){
        const realPage = page+1
        axios
            .get(`${url}?limit=10&page=${realPage}`, { headers: {'x-api-key': apiKey} })
            .then((res) =>{
                setCatList([...catList, ...res.data]);
                setPage(page+1)
                setIsFetching(false)
            })
            .catch((error) =>{
                console.log(error);
            })
    }
    
    useEffect(()=>{
        loadData()
    }, [])

    return(
        loading ? (
            <div className={classes.circular}>
                <CircularProgress/>
            </div>
        ) :  (
            <div className="list-cat">
                {
                    catList.map((cat, id) =>(
                        <Card className={classes.root} key={id}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="240"
                                image={cat.image.url}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {cat.name}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Detail
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                    
                }
            </div>
        ) 
    )
}

export default ListCat
