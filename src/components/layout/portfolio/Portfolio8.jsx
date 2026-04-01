import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";
import "../../../css/Portfolio.css";

// imele 클론 코딩 포트폴리오

const Portfolio8 = () => {
  return (
    <section className="port8">
      <article className="port_container">
        <h1 className="port_title">PORTFOLIO.</h1>
        <div className="port_content_box">
          <ImgBox img={"IMELE.png"} />
          <div className="port_content">
            <h1 className="port_name">IMELE 클론 코딩</h1>
            <div
              className="port_line"
              style={{ backgroundColor: "black" }}
            ></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2025.01.02 ~ 2025.01.06"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 IMILE 공식 사이트를 코딩하여 만든 작품입니다. 반응형 웹 디자인을 다양한 크기에서 최적화된 사용자 환경을 제공했으며, GSAP.js를 활용해 애니메이션적인 효과를 구현했습니다."
              }
            />

            <div className="port_stack_box">
              <h3>기술스텍</h3>
              <div className="port_stack_content">
                <Stack stack={"HTML"} bgcolor={"#FFC0C1"} />
                <Stack stack={"CSS"} bgcolor={"#C0D6FF"} />
                <Stack stack={"Javascript"} bgcolor={"#C3FFC0"} />
                <Stack stack={"Gsap.js"} bgcolor={"#C0FFF0"} />
              </div>
            </div>
            <a href="https://yurim-web.github.io/imele_clone_renew/" target="_blank">
              <button
                className="port_link_btn"
                style={{ backgroundColor: "black", color: "white" }}
              >
                LINK
              </button>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Portfolio8;
