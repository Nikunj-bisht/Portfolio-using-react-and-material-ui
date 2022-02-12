
import React, { useContext } from 'react';
import { CardContent, Typography, Button, CardMedia } from "@mui/material";
import { CardActions } from "@mui/material";
import classes from './Profilecards.module.css';
import { App_context } from '../context/Appcontext';
import Card from 'react-animated-3d-card'

import { getskilldata } from '../uidata/skill';

const Profilecards = (props) => {

    const getsdata = getskilldata();
    console.log(getsdata);
    const app_context = useContext(App_context);
    return (

        <div className={classes.div} style={{backgroundColor: props.data}} >

            {

                getsdata.map(skill => {

                    return (


                        <Card       
      style={{
        width: '450px',
        height: '300px',
        cursor: 'pointer',
        margin: 44,
        height:'auto'
      }}
      onClick={() => console.log('Card clicked')}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={skill.img_link}
                                alt="green iguana"
                            />

                            <CardContent>
                                <Typography gutterBottom variant='h5'>{skill.name}</Typography>
                                <Typography variant='body2' color='text.secondary'>{skill.des}</Typography>
                            </CardContent>

                            <CardActions>
                                <Button size='small' href={'https://play.google.com/console/developers/8720329379212071254/app-list'}>Link</Button>
                            </CardActions>

                        </Card>


                    )


                })

            }



        </div>

    )

}

export default Profilecards;