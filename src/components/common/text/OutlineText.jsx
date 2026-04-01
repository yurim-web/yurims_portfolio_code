const OutlineText = ({ text }) => {
  return (
    <h1
      style={{
        fontSize: "8vw",
        color: "transparent",
        WebkitTextStroke: "3px #00adb4",
        fontFamily: "Bold",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </h1>
  );
};

export default OutlineText;
