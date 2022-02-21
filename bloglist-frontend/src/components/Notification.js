import { useSelector } from "react-redux";

const Notification = () => {
  const info = useSelector((state) => state.info);

  return <div>{info && <h3>{info}</h3>}</div>;
};

export default Notification;
