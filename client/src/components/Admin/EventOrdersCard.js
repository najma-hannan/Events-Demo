import { Alert, Card, Stack, Table } from "react-bootstrap";

export default function EventOrdersCard({event, orders}) {

    return (
        <Card>
            <Card.Header>Orders</Card.Header>
            <Card.Body>
                {
                    orders.length === 0 ? <Alert className="col-sm-8" variant="info">
                        No orders made for this event yet.
                    </Alert> : <Table striped bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer</th>
                                <th>Tickets</th>
                                <th>Amount (KES)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (<tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.user.name}</td>
                                    <td>
                                        <Stack direction="horizontal" gap={2}>
                                            {order.order_items.map(orderItem => (<span key={orderItem.id}>
                                                {`${orderItem.ticket.name}: ${orderItem.quantity} @ ${orderItem.price}`}
                                            </span>))}
                                        </Stack>
                                    </td>
                                    <td>{order.total_amount}</td>
                            </tr>))}
                        </tbody>
                    </Table>
                }
            </Card.Body>
        </Card>
    )
}
