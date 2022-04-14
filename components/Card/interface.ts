import { HtmlHTMLAttributes } from "react";

export interface CardProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: JSX.Element;
}
