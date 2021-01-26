import React, {useEffect, useState} from 'react';
import useInfiniteScroll from '@closeio/use-infinite-scroll';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 360,
    marginBottom: '35px',
  },
});

const url = `https://api.thecatapi.com/v1/breeds`
const apiKey = 'ae5dc580-b37a-4247-aeb0-77410ef2d4f0'

const ListCat = ({catList, setCatList}) => {
    const classes = useStyles();
    const [hasMore, setHasMore] = useState(false);
    const [page, loaderRef, scrollerRef] = useInfiniteScroll({ hasMore });


    useEffect(() =>{
        const realPage = page + 1;
        axios.get(`${url}?limit=10&page=${realPage}`, { headers: {'x-api-key': apiKey} })
            .then((res) =>{
                const data = res.data
                setHasMore(realPage * 10 <= data.length-1);
                setCatList(prev => [...prev, ...data]);
            })
            .catch(() =>{
                console.log('there is an error');
            })
    }, [page])

    return(
        <div className="list-cat" ref={scrollerRef}>
            {
                catList.map((cat, id) =>(
                    <Card className={classes.root} key={cat.id}>
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
}

export default ListCat
