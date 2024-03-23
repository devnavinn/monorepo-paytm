import Image from "next/image";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/db/client";
const prisma = new PrismaClient();

export default async function Page(): JSX.Element {
  const user = await prisma.user.create({
    data: {
      email: "navin@gmail.com",
      name: "Navin Kumar",
      password: "12679876",
    },
  });
  console.log(user);
  return <main className={styles.main}></main>;
}
