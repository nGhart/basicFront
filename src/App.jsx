import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/global.scss';
import AnimalTable from './pages/AnimalTable.jsx';
import Menu from './components/menu/Menu.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Footer from './components/footer/Footer.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import FeedPage from './pages/FeedPage.jsx';
import MatingPage from './pages/MatingPage.jsx';
import HealthPage from './pages/HealthPage.jsx';
import QuarantinePage from './pages/QuarantinePage.jsx';
import VaccinationPage from './pages/VaccinationPage.jsx';
import DiseasePage from './pages/DiseasePage.jsx';
import MedicationPage from './pages/MedicationPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Chat from './components/chat/Chat';

const Layout = () => {
  return (
    <div className="mainSection">
      <Navigation />
      <div className="midSection">
        <div className="menuSection">
          <Menu />
        </div>
        <div className="contentSection">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="animals" element={<AnimalTable />}></Route>
        <Route path="mating" element={<MatingPage />} />
        <Route path="disease" element={<DiseasePage />} />
        <Route path="quarantine" element={<QuarantinePage />} />
        <Route path="vaccination" element={<VaccinationPage />} />
        <Route path="health" element={<HealthPage />}>
          <Route index element={<DiseasePage />} />
          <Route path="disease" element={<DiseasePage />} />
          <Route path="quarantine" element={<QuarantinePage />} />
          <Route path="vaccination" element={<VaccinationPage />} />
        </Route>
        <Route path="feed" element={<FeedPage />} />
        <Route path="meds" element={<MedicationPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
      <Chat />
    </>
  );
}

export default App;
