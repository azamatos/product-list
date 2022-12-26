import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

//styles
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
