import {
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Kb from './pages/help/Kb'
import Contact from './pages/help/Contact'
import Tickets, {ticketsLoader} from './pages/tickets/Tickets'
import TicketDetail, {ticketDetailLoader} from './pages/tickets/TicketDetail'
import TicketError from './pages/tickets/TicketError'

import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import NotFound from './pages/NotFound'
import TicketsLayout from './layouts/TicketsLayout'






const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="help" element={<HelpLayout/>}>
        <Route path="kb" element={<Kb/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      <Route path="tickets" element={<TicketsLayout/>} errorElement={<TicketError/>}>
          <Route 
            index 
            element={<Tickets/>} 
            loader={ticketsLoader}
          />

        <Route 
            path=':id'
            element={<TicketDetail />} 
            loader={ticketDetailLoader}
          />

      </Route>

     

      <Route path="*" element={<NotFound/>} />
    </Route>
  
  )
)

function App() {
  return (
        <RouterProvider router={router} />
  )
}

export default App

