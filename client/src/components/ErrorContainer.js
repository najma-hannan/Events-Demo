import { Alert } from "react-bootstrap";

export default function ErrorContainer({ errors, className, clearErrors }) {
    return errors?.length > 0 ? <Alert className={className} variant="danger">
        <ul className="">
            {errors.map((error, idx) => (
                <li key={idx} className=''>{error}</li>
            ))}
        </ul>
    </Alert> : <></>
}
