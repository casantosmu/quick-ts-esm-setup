import { env } from "node:process";

export const hello = () => env["HELLO_WORLD"];
