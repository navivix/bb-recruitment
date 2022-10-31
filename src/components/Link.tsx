import { Link as RouterLink } from "react-router-dom";

export default function Link(props: any) {
  return (
    <RouterLink style={{ textDecoration: "none", color: "black" }} {...props} />
  );
}
