import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./SearchResults.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        width: 151,
    },
}));

function MediaControlCard(props) {
    const classes = useStyles();
    const theme = useTheme();

    const album = [];

    console.log(props.results)

    props.results.forEach(element => {

        const newAlbum = {
            artist: "",
            album: "",
            album_image: "",
            release_date: "",
            uri: ""
        }

        newAlbum.artist = element.artists.map(item => (item.name)).join(", ");
        newAlbum.album = element.name;
        newAlbum.album_image = (element.images.length ? element.images[1].url : "");
        newAlbum.release_date = element.release_date.split("-")[0];
        newAlbum.uri = element.uri;

        album.push(newAlbum)
    })

    return (
        <div>
            {album.map(item => (
                <Card key={item.uri} className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {item.album}
                    </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {item.artist}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                                {item.release_date}
                    </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={item.album_image}
                        title={item.album}
                    />
                </Card>
            ))}
        </div>
    );
}


export default MediaControlCard;