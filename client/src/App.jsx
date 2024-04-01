import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import LandAcknowledgement from './pages/LandAcknowledgement';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsandConditions from './pages/TermsandConditions';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route path='/landacknowledgement' element={<LandAcknowledgement />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/termsandconditions' element={<TermsandConditions />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>

        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}