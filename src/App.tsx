import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import { About } from './pages/About.tsx'
import { Blog } from './pages/Blog.tsx'
import { BlogPost } from './pages/BlogPost.tsx'
import { Home } from './pages/Home.tsx'
import { Moments } from './pages/Moments.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { Projects } from './pages/Projects.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="moments" element={<Moments />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
