import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterInnerWrap>
          <FooterLeft>
            <div>
              <img
                className="Logo-img"
                alt="logo"
                src="/assets/logo/logo_white.png"
              />
            </div>
            <div className="Copyright">
              Copyright 2022.soopool. All rights reserved.
            </div>
          </FooterLeft>
          <FooterRight>
            <Repository
              href="https://github.com/codestates-seb/seb39_main_014"
              target="_blank"
              aria-label="Github"
            >
              Repository&nbsp;
              <AiFillGithub />
            </Repository>
            <GithubLinkWrap>
              <GithubLink
                href="https://github.com/yeojoo1224"
                target="_blank"
                aria-label="Github"
              >
                <GithubIcon>
                  <AiFillGithub />
                </GithubIcon>
                <TeamMember>나여주</TeamMember>
              </GithubLink>
              <GithubLink
                href="https://github.com/Shaa-code"
                target="_blank"
                aria-label="Github"
              >
                <GithubIcon>
                  <AiFillGithub />
                </GithubIcon>
                <TeamMember>신승윤</TeamMember>
              </GithubLink>
              <GithubLink
                href="https://github.com/euncheol-kim"
                target="_blank"
                aria-label="Github"
              >
                <GithubIcon>
                  <AiFillGithub />
                </GithubIcon>
                <TeamMember>김은철</TeamMember>
              </GithubLink>
              <GithubLink
                href="https://github.com/hopak-e"
                target="_blank"
                aria-label="Github"
              >
                <GithubIcon>
                  <AiFillGithub />
                </GithubIcon>
                <TeamMember>박상호</TeamMember>
              </GithubLink>
              <GithubLink
                href="https://github.com/so0112"
                target="_blank"
                aria-label="Github"
              >
                <GithubIcon>
                  <AiFillGithub />
                </GithubIcon>
                <TeamMember>신상오</TeamMember>
              </GithubLink>
            </GithubLinkWrap>
          </FooterRight>
        </FooterInnerWrap>
      </FooterWrap>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #595959;
  display: flex;
  min-height: 7rem;
  position: relative;
  justify-content: center;
`;

const FooterWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const FooterInnerWrap = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
  .Logo-img {
    width: 10rem;
    @media screen and (max-width: 768px) {
      display: flex;
      width: 8rem;
    }
  }
  .Copyright {
    font-size: 1em;
    padding-top: 0.9rem;
    padding-left: 1rem;
    color: white;
    @media screen and (max-width: 768px) {
      display: flex;
      font-size: 0.8em;
      padding-top: 0.4rem;
    }
  }
`;

const Repository = styled.a`
  display: flex;
  padding-top: 1rem;
  padding-right: 0.2rem;
  font-size: 2rem;
  text-decoration: none;
  color: white;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    justify-content: center;
  }
`;

const FooterRight = styled.div``;
const GithubLinkWrap = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: center;
    > a {
      padding: 0.3rem 0.3rem;
    }
  }
`;
const GithubLink = styled.a`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 0.5rem 0.8rem;
  color: white;
  text-decoration: none;
`;
const GithubIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TeamMember = styled.div`
  font-size: 1rem;
  margin-top: 0.6rem;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    margin-top: 0.4rem;
  }
`;
export default Footer;
