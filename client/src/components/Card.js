import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 360,
        marginBottom: '35px',
      },
}));

const CardCat = ({cat}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Cat Breeds"
                        height="240"
                        image={cat.image.url}
                        title="Cat Breeds"
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
        </div>
    )
}

export default CardCat
