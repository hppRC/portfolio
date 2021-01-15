import Div100vh from 'react-div-100vh';

import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC = ({ children }) => (
  <Div100vh className="flex flex-col">
    <Header />
    <main className="flex-grow w-full h-full">{children}</main>
    <Footer />
  </Div100vh>
);
