import { createRoot } from 'react-dom/client';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

const App = () => {
  return (<span>Rspack</span>);
};

if (root) {
  root.render(
      <App />
  );
}
