import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 引入 App.tsx
import './style.css'; // 導入自訂的 style.css


// 確保 'root' 不為 null
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App /> {/* 渲染 App 組件 */}
  </React.StrictMode>
);
