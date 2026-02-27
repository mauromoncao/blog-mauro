import { Switch, Route } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { CookieBanner } from "./components/CookieBanner";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Blog} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route component={Blog} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </div>
  );
}
