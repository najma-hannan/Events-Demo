import clsx from "clsx";
import { Container } from "react-bootstrap";

export default function PageHeader({ title, actions, className = "" }) {

    return <section className={clsx("py-4 bg-light", className)}>
        <Container className="d-flex justify-content-between">
            <h2 className="fs-3">{title}</h2>

            {
                actions &&
                <div>
                    {actions}
                </div>
            }
        </Container>
    </section>
}
