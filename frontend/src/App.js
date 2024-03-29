// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailsPage from "./pages/EventDetails";
import NewEventsPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error"
import RootLayout from "./pages/RootLayout";


function App() {

  const router = createBrowserRouter([
    {
      path:"/", 
      errorElement:<ErrorPage />, 
      element:<RootLayout />,
      children:[
        {index:true, element:<HomePage />},
        {path:"events", element:<EventsPage />},
        {path:"events/:id", element:<EventDetailsPage />},
        {path:"events/new", element:<NewEventsPage />},
        {path:"events/:id/edit", element:<EditEventPage />},
      ]
    }
  ])

  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
