import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  margin: 20px 0px;
`;

export const SubTitle = styled(Title).attrs({
  as: "h2",
})`
  font-size: 32px;
  margin: 15px 0px;
`;

export const Large = styled.p`
  font-weight: 400;
  font-size: 20px;
`;

export const LargeBold = styled(Large)`
  font-weight: 700;
`;

export const Body = styled(Large)`
  font-size: 16px;
`;

export const BodyBold = styled(LargeBold)`
  font-size: 16px;
`;

export const Tiny = styled(Large)`
  font-size: 12px;
`;
