import { Outlet } from 'react-router-dom';
import { Controls } from './Controls';

export function App() {
  return (
    <div className="container-fluid">
      <Controls />

      <header>
        <h1>Test NONAME DIGITAL</h1>
        <p>CRM для пасажирських перевезень</p>
      </header>

      {/* <AuthProvider /> */}

      <main>
        <Outlet />
      </main>
    </div>
  );
}
