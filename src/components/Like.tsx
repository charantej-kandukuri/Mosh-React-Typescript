import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toogle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FcLike color="red" size={40} onClick={toogle} />;
  return <FcLikePlaceholder size={40} onClick={toogle} />;
};

export default Like;
