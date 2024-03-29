import { NavLink } from "react-router-dom"

const DUMMY_EVENTS = [
    {id:1, name:"First Event"},
    {id:2, name:"Second Event"},
    {id:3, name:"Third Event"},
    {id:4, name:"Fourth Event"}
]

export default function EventsPage(){
    return <>
        <h1>Events Page.</h1>
        <ul>
            {DUMMY_EVENTS.map(eventEle => 
                <li key={eventEle.id}>
                    <NavLink to={`/events/${eventEle.id}`}>{eventEle.name}</NavLink>
                </li>    
            )}
        </ul>
    </>
}