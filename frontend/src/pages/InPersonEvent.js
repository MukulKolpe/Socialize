import { useState , useEffect } from "react";
import { Grid } from "@mui/material";
import EventCard from "../component/Event/EventCard";

const InPersonEvent = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
          const response = await fetch(
            `http://localhost:5000/api/filtermode?mode=In-Person`
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

export default InPersonEvent;