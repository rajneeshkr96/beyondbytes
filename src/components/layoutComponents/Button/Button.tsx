
import React, { ReactNode } from 'react';
import { useAppSelector,useAppDispatch } from '@/redux/hooks';
import {setIsClicked} from "@/redux/action/themeSlice"

type Props = {
  icon?:ReactNode, bgColor?:string,className?:string, color?:string, bgHoverColor?:string, size?:string, text?:string, borderRadius?:string, width?:string,onClicked?:()=>void
}
const Button:React.FC<Props> = ({ icon, bgColor,className, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { isClicked } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch()

  return (
    <button
      type="button"
      onClick={() => dispatch(setIsClicked(isClicked))}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`${className} text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
