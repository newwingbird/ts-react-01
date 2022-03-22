import Saysomething from "./Saysomething";

const root: HTMLElement | null = document.getElementById("root");

// インスタンス化
const saySomething = new Saysomething("hello TypeScript ");
saySomething.sayText(root);
