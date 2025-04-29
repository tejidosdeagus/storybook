import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import { Button } from '../Button';


export type BlogCardProps = {
  image: string;
  date: string;
  title: string;
  summary: string;
  linkTo?: string;
  onReadMore: () => void;
};

export const BlogCard = ({ image, date, title, summary, linkTo, onReadMore }: BlogCardProps) => {
  return (
    <Card
    sx={{
      width: 600,
      height: 750,
      backgroundColor: '#D4AF80',
      borderRadius: 2,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '50px',
    }}
  >
    <CardMedia
      component="img"
      image={image}
      alt={title}
      sx={{
        width: 490,
        height: 325,
        objectFit: 'cover',
        alignSelf: 'center',
      }}
    />
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
        px: 2,
        py: 2,
      }}
    >
      <div>
        <Typography
          sx={{
            fontFamily: 'Italiana',
            fontStyle: 'italic',
            fontSize: 32,
            color: '#4A4A4A',
          }}
        >
          {date}
        </Typography>
  
        <Typography
          sx={{
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            fontSize: 32,
            color: '#4A4A4A',
          }}
        >
          {title}
        </Typography>
  
        <Typography
          sx={{
            fontFamily: 'Playfair Display',
            fontSize: 32,
            color: '#D54848',
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {summary}
        </Typography>
      </div>
  
      <Button
        onClick={onReadMore}
        variant="secondary"
        sx={{ alignSelf: 'flex-start'}}
      >
        Seguir leyendo
      </Button>
    </CardContent>
  </Card>
  
  );
};
