import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: 360,
        marginBottom: '35px',
      },
      paper: {
        position: 'absolute',
        width: 550,
        height: 450,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
}));

const CardCat = ({cat}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [modalStyle] = useState(getModalStyle)

    const handleOpen = () =>{
        console.log("Handle Clicked....")
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <img alt="catImage" src={cat.image.url} width="240" height="160"/>
          <br></br>
          <Typography variant="subtitle2">
              Name:
          </Typography>
          <Typography variant="h5">
              {cat.name}
          </Typography>
          <br></br>
          <Typography variant="subtitle2">
              Origin:
          </Typography>
          <Typography variant="h6">
              {cat.origin}
          </Typography>
          <br></br>
          <Typography variant="subtitle2">
              Description:
          </Typography>
          <Typography variant="p" align="justify">
              {cat.description}
          </Typography>
          <br></br>
          <Button size="small" color="primary" onFocus={handleClose}>Close</Button>
          {/* <SimpleModal /> */}
        </div>
    )

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
                    <Button size="small" color="primary" onClick={handleOpen}>
                        Detail
                        {
                            open ? <Collapse
                            key={cat.id}
                            in={open}
                            timeout='auto'
                            unmountOnExit
                        >
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                        </Collapse> : null
                        }
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CardCat
