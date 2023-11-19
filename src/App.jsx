import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/feed/Home";
import Login from "./pages/auth/Login";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./pages/routes/ProtectedRoute";
import AppLayout from "./pages/AppLayout";
import AddPost from "./components/addPost/AddPost";
import SinglePost from "./pages/feed/SinglePost";
import Welcome from "./pages/Welcome";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}>
              <Route path="/" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/home" element={<Home />} />
              <Route path="/addpost" element={<AddPost />} />
              <Route path="/post/:id" element={<SinglePost />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
