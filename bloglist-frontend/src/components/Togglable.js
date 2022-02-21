import React, { useImperativeHandle, useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Togglable = React.forwardRef((props, ref) => {
  const { children, buttonText, openByDefault } = props;
  const [visible, setVisible] = useState(openByDefault);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return { toggleVisibility };
  });

  return (
    <>
      <div style={hideWhenVisible} className="my-2">
        <Button variant="primary" onClick={toggleVisibility}>
          {buttonText}
        </Button>
      </div>
      <div style={showWhenVisible} className="my-2">
        {children}
        <Button variant="secondary" onClick={toggleVisibility}>
          Cancel
        </Button>
      </div>
    </>
  );
});

Togglable.displayName = "Togglable";

Togglable.propTypes = {
  children: PropTypes.element.isRequired,
  buttonText: PropTypes.string.isRequired,
  openByDefault: PropTypes.bool.isRequired,
};

export default Togglable;
