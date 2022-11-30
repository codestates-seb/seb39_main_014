import React, { PropsWithChildren } from "react";
import { AiOutlineDown } from "react-icons/ai";
import * as S from "./styled";

type Props = {
  isState: boolean;
  setIsState: React.Dispatch<React.SetStateAction<boolean>>;
} & PropsWithChildren;

const DropDownButton = ({ ...props }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setIsState(!props.isState);
  };
  return (
    <S.Container>
      <S.Button onClick={handleClick}>{props.children}</S.Button>
      <AiOutlineDown
        className="AiOutlineDown"
        onClick={() => props.setIsState(!props.isState)}
      />
    </S.Container>
  );
};

export default DropDownButton;
