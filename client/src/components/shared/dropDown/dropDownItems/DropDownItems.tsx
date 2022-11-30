import React, { PropsWithChildren } from "react";
import * as S from "./styled";

type Props = {
  isState: boolean;
  setIsState: React.Dispatch<React.SetStateAction<boolean>>;
  list: { [prop: string]: number | string }[];
  abc: string;
} & PropsWithChildren;

const DropdownItems = ({ ...props }: Props) => {
  const handleClick = <T extends { [key: string]: string | number }>(el: T) => {
    props.setIsState(!props.isState);
  };
  return (
    <S.Container>
      {props.isState && (
        <S.ItemUList>
          {props.list.map(el => (
            <S.ItemList key={el.id} onClick={() => handleClick(el)}>
              {el[props.abc]}
            </S.ItemList>
          ))}
        </S.ItemUList>
      )}
    </S.Container>
  );
};

export default DropdownItems;
