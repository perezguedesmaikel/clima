import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                className='text-primary'
                title={props.weather?.location.name}
                subheader={props.weather?.location.country}
            />
            <img  src={`http:${props.weather?.current.condition.icon}`} width='auto' alt={'clima'}/>
            <h2>Clima: {props.weather?.current.condition.text}</h2>
            Temperatura: {props.weather?.current.temp_c}°
            <iframe className='h-auto w-auto'
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117475.48274784748!2d${props.weather?.location.lon}7!3d${props.weather?.location.lat}7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scu!4v1658272773210!5m2!1ses!2scu`}
                    style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"> </iframe>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    En esta targeta se muestra el clima de {props.weather?.location.name} pero puede agregar cualquier ciudad del mundo en la barra de navegación.
                </Typography>
            </CardContent>


        </Card>
    );
}
