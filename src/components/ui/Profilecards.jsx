
import React from 'react';
import { CardContent, Card, Typography, Button, CardMedia } from "@mui/material";
import { CardActions } from "@mui/material";
import classes from './Profilecards.module.css';

import { getskilldata } from '../uidata/skill';

const Profilecards = () => {

    const getsdata = getskilldata();
    console.log(getsdata);

    return (

        <div className={classes.div}>

            {

                getsdata.map(skill => {

                    return (


                        <Card sx={{ minWidth: 275, width: 300, margin: 22 }}>
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