import Layer from "../layer/Layer";
import OutlineText from "./OutlineText";
import SolidlineText from "./SolidlineText";

const SlideText = ({ className, text, justifyContent }) => {
  const alignRight = justifyContent === "end";
  return (
    <div
      className="slide_text_item"
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      <Layer className={className} zIndex={3} alignRight={alignRight}>
        <OutlineText className={className} text={text} />
      </Layer>
      <Layer className={className} zIndex={1} alignRight={alignRight}>
        <SolidlineText className={className} text={text} />
      </Layer>
    </div>
  );
};

export default SlideText;
