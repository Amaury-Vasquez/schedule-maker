import { Button } from "./styles";

export const SubmitButton = (props: {text: string}) => {
  return <Button type="submit" > {props.text} </Button>
}