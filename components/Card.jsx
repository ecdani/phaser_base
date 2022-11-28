import React from "react";
import PropTypes from "prop-types";

function Card({ title, children }) {
  return (
    <div className="rounded-xl border flex flex-col gap-3 p-6">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Card;
