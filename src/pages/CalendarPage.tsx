import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
import '/ts/style.css'; // 添加 /ts/ 前缀，指向 GitHub Pages 上的路径

const CalendarPage: React.FC = () => {
  return (
    <div>
      <h2>行事曆頁面</h2>
      <Calendar />
      <br />
    </div>
  );
}

export default CalendarPage;

