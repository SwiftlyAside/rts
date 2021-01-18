import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log("man")}></ChildAsFC>;
};

export default Parent;
