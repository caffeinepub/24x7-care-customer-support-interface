import { ServiceCenterPage } from './pages/ServiceCenterPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <ServiceCenterPage />
      <Footer />
    </div>
  );
}

export default App;
