"use client"; //used because we are using the browser's capabilities

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
