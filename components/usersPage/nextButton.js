import React from "react";
import { Button } from "react-bootstrap";

function NextButton({ totalPages, getUsersData, currentPage }) {
  const isButtonDisabled = currentPage >= totalPages;

  const handleClick = () => {
    getUsersData({ page: currentPage + 1 });
  };

  if (totalPages <= currentPage) {
    return null;
  }

  return (
    <center style={{ marginTop: "10px" }}>
      <Button variant="secondary"
        onClick={handleClick}
        disabled={isButtonDisabled}
      >Load More</Button>
    </center>
  );
}

export default NextButton;