import { useRouteError, Link } from "react-router-dom"

export default function TicketError() {
    const error = useRouteError()
  return (
        <div className="ticket-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to Homepage</Link>
        </div>
  )
}

