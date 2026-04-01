const Layer = ({ className, children, zIndex, alignRight }) => {
  return (
    <div
      className={`${className} layer`}
      style={{
        position: "absolute",
        top: "0px",
        zIndex: zIndex,
        ...(alignRight ? { right: "0px" } : { left: "0px" }),
      }}
    >
      {children}
    </div>
  );
};

export default Layer;
