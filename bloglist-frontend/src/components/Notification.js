import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

const Notification = () => {
  const info = useSelector((state) => state.info);
  if (info) {
    return <Alert variant="warning">{info}</Alert>;
  }

  return <></>;
};

export default Notification;
