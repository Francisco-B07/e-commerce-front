import { ImageCard } from "@/ui/card";
import styled from "styled-components";

export const Root = styled.div`
  min-height: 88vh;
  width: 100%;
  padding: 66px 35px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 370px;
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

export const ImageProduct = styled(ImageCard)`
  @media (min-width: 1280px) {
    width: 808px;
    min-height: 384px;
    margin-right: 50px;
    object-fit: contain;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    min-width: 421px;
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  padding-left: 20px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
