import { useEffect, useState } from 'react';
import cls from 'classnames';

const PageCount = ({ data, handlePage }) => {
  const { current_page, total_page } = data;
  const [pages, setPages] = useState([]);
  const [current, setCurrent] = useState(Number(current_page));

  const createArrayObject = (pages, current, start) => {
    let total = [];
    for (let index = start; index <= pages; index++) {
      if (index === current) {
        total.push({
          current: true,
          index,
        });
      } else {
        total.push({
          current: false,
          index,
        });
      }
    }

    setPages(total);
  };

  const setNewPage = (index) => {
    setCurrent(index);
    handlePage(index);
  };

  useEffect(() => {
    createArrayObject(total_page, current, 1);
  }, []);

  return (
    <aside className="flex justify-end items-center gap-2 uppercase text-sm">
      <p>Pages</p>
      <ul className="flex">
        {pages.map((page, id) => (
          <li
            className={
              page.index === current
                ? cls(
                    'border px-3 py-1 cursor-pointer hover:text-blue-400',
                    ' border-blue-400 text-blue-400'
                  )
                : cls('border px-3 py-1 cursor-pointer hover:text-blue-400')
            }
            key={id}
            onClick={() => setNewPage(page.index)}
          >
            {page.index}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PageCount;
