import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";
import "../../../css/Portfolio.css";
const Portfolio1 = () => {
  return (  
    <section
      className="port1" style={{
        width: "100%",
        backgroundColor: "#ff540f",
        height: "100%",
        color: "white",
        padding: "10% 0%",
        position: "absoulte",
        justifyContent: "center",
        top: "0px",
        transform: "translateY(1000px)",
      }}>
      <article className="port_container">
        <h1 className="port_title">PORTFOLIO.</h1>
        <div className="port_content_box">
          <ImgBox img={"강남언니.png"} />
          <div className="port_content">
            <h1 className="port_name">
              강남언니 클론코딩
            </h1>
            <div className="port_line"></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2024.10.25 ~ 2024.10.28"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 강남언니 공식 사이트의 PC 버전을 클론 코딩한 작품입니다. HTML과 CSS만을 사용하여 메인 페이지와 두 개의 서브페이지를 구성하였습니다."
              }
            />

            <div className="port_stack_box">
              <h3>기술스텍</h3>
              <div className="port_stack_content">
                <Stack stack={"HTML"} bgcolor={"#FFC0C1"} />
                <Stack stack={"CSS"} bgcolor={"#C0D6FF"} />
              </div>
            </div>
            <a
              href="https://yurim-web.github.io/gangnam/index.html"
              target="_blank"
            >
              <button className="port_link_btn">
                LINK
              </button>
            </a>
          </div>
        </div>
      </article>
    </section>

  );
}
 
export default Portfolio1;