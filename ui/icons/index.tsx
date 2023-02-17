import LogoIcon from "./Logo.svg";
import styled from "styled-components";

export function Logo({ className }: any) {
  return <LogoIcon className={className} />;
}

export const LogoHeader = styled(Logo)`
  width: 153px;
  height: 34px;
  fill: var(--blanco);
`;
