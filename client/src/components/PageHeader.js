import clsx from "clsx";
import { Container } from "react-bootstrap";

export default function PageHeader({ title, className = "" }) {

    return <section className={clsx("py-4 bg-light", className)}>
        <Container>
            <h2 className="fs-3">{title}</h2>
        </Container>
    </section>
}
