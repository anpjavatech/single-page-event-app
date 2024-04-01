import { RouterProvider, createBrowserRouter } from "react-router-dom"

import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import {loader as eventDetailsLoader} from "./pages/EventDetails";
import EventDetailsPage from "./pages/EventDetails";
import NewEventsPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error"
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import {action as eventActionHandler} from "./components/EventForm";
import {action as deleteEvent} from "./pages/EventDetails";
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';


function App() {

  const router = createBrowserRouter([
    {
      path:"/", 
      errorElement:<ErrorPage />, 
      element:<RootLayout />,
      children:[
        {index:true, element:<HomePage />},
        {path:"events", element:<EventsRootLayout />, children:[
          {index:true, element:<EventsPage />, loader:eventsLoader},
          {path:"new", element:<NewEventsPage />, action:eventActionHandler},
          {id:"event-detail-loader", path:":id", loader:eventDetailsLoader, children:[
            {index:true, element:<EventDetailsPage />, action:deleteEvent},
            {path:"edit", element:<EditEventPage />, action:eventActionHandler},
          ]},
        ]},
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ]
    }
  ])

  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
