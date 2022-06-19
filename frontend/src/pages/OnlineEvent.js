import EventCard from "../component/Event/EventCard"
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useEffect ,useState} from "react";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const OnlineEvent = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
          const response = await fetch(
            `http://localhost:5000/api/filtermode?mode=Online`
          );
          const resJson = await response.json();
            setEvents(resJson);
        };
        fetchApi();
      }, []);
   return(
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {events.map((event, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <EventCard title={event.title} description={event.description} attendees={event.totalAttendees}/>
        </Grid>
      ))}
    </Grid>
     
    
   )
}


export default OnlineEvent