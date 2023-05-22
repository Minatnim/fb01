import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import EditProfileModal from '../pages/EditProfileModal';
import CreatePostModal from '../pages/CreatePostModal';
import LoadingScreen from '../pages/LoadingScreen';
import RegisterModal from '../pages/RegisterModal';
import FriendPage from '../pages/FriendPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
  {
    path: 'edit-profile',
    element: <EditProfileModal />
  },
  {
    path: 'create-post',
    element: <CreatePostModal />
  },
  {
    path: 'loading',
    element: <LoadingScreen />
  },
  {
    path: 'register',
    element: <RegisterModal />
  },
  {
    path: 'friends',
    element: <FriendPage />
  },
  {
    path: '',
    element: <HomePage />
  },
  {
    path: 'profile/:userId',
    element: <ProfilePage />
  },
  {
    path: 'login',
    element: <LoginPage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
