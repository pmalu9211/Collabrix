"use client";

import Loading from "@/components/auth/loading";
import RedirectToSignin from "@/components/auth/redirectToSignin";
import { ClerkProvider, SignIn, SignInButton, useAuth } from "@clerk/nextjs";
import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading></Loading>
        </AuthLoading>
        <Unauthenticated>
          <RedirectToSignin></RedirectToSignin>
        </Unauthenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
