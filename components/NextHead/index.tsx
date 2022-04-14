import Head from "next/head";

import { NextHeadProps } from "./interface";

export function NextHead({ title }: NextHeadProps): JSX.Element {
  return (
    <Head>
      <title>
        {!title ? "Meritum" : `${title} | Meritum`}
      </title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap" rel="stylesheet" />
    </Head>
  );
}
