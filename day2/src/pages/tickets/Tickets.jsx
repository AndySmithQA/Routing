import { useLoaderData, Link } from "react-router-dom"

export default function Tickets() {
        const tickets = useLoaderData()
        
    return(
        <div className="tickets">
            {tickets.map(ticket => (
                <Link to={ticket.id.toString()} key={ticket.id}>
                    <p>{ticket.title}</p>
                    <p>From{ticket.user}</p>
                </Link>
            ))}
        </div>
    )
}

export const ticketsLoader = async () => {
    const res = await fetch('http://localhost:4000/tickets')

    if (!res.ok) {
        throw Error('Could not fetch tickets')
    }

    return res.json()
}

