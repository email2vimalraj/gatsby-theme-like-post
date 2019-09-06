import React from "react";

const LikeButton = ({ postId }) => {
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    setClicked(localStorage.getItem(postId));
  }, [postId]);

  const handleClick = e => {
    e.preventDefault();

    localStorage.setItem(postId, "true");
    setClicked(true);
  };

  return (
    <button type="button" onClick={handleClick} disabled={clicked}>
      Like
    </button>
  );
};

export default LikeButton;
