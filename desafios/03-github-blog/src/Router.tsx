import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { Detail } from './pages/Detail'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Blog />}/>
        <Route path='/post/:id' element={<Detail />}/>
      </Route>
    </Routes>
  )
}

