import React from 'react';
import './OurSolutions.css'; // Import your CSS file

const courses = [


    
  {
    title: 'UI/Web & Graph',
    startDate: '04.11.2022',
  },
  {
    title: 'Mobile Design',
  },
  {
    title: 'Annual package',
    startDate: '04.11.2022',
  },
  {
    title: 'Graphic Design',
    startDate: '04.11.2022',
  },
  {
    title: 'Motion Design',
    startDate: '30.11.2022',
  },
  {
    title: 'Front-end development',
  },
  {
    title: 'Digital Marketing',
  },
  {
    title: 'Interior Design',
    startDate: '31.10.2022',
  },
];

const OurSolutions = () => {
    const itemsRef = React.useRef([]);

    React.useEffect(() => {
      const handleScroll = () => {
        itemsRef.current.forEach((item, index) => {
          const itemTop = item.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
  
          if (itemTop < windowHeight * 0.75) {
            item.classList.add('show');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className="ag-format-container">
    <h2 style={{ textAlign: 'center' }}>Our Solutions</h2>
    <div className="ag-courses_box">
      {courses.map((course, index) => (
        <div className="ag-courses_item" key={index} ref={(el) => (itemsRef.current[index] = el)}>
          <a className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>
            <div className="ag-courses-item_title">{course.title}</div>
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};

export default OurSolutions;
