import Image from "next/image";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/db/client";
import Balance from "./Balance";
const prisma = new PrismaClient();

export default async function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Balance />
    </main>
  );
}
