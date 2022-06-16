import type { FC, ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { EmotionCache } from "@emotion/react";
import { SessionProvider } from "next-auth/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import PageProvider from "../src/components/helpers/PageProvider";
import AuthWrapper from "../src/components/helpers/AuthWrapper";

import "../src/styles/styles.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const App: FC<AppPropsWithLayout> = ({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache
}) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <PageProvider emotionCache={emotionCache}>
          <SessionProvider session={session}>
            <AuthWrapper>{getLayout(<Component {...pageProps} />)}</AuthWrapper>
          </SessionProvider>
        </PageProvider>
      </LocalizationProvider>
    </Provider>
  );
};

export default App;
