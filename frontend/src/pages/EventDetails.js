import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailsPage(){

    const data = useRouteLoaderData("event-detail-loader");
    return <EventItem event={data.event}/>
}

export async function loader({request, params}){
    const id = params.id;
    const response = await fetch(`http://localhost:8080/events/${id}`);

    if(!response.ok){
        throw new json({message:"Could not fetch the details for selected event !."}, {status:500});
    }

    return response;
}

export async function action({request, params}){
    const id = params.id;
    const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: request.method
    });

    if(!response.ok){
        throw new json({message:"Could not delete the event !."}, {status:500});
    }

    return redirect("/events");
}