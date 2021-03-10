import { useState, useEffect } from 'react';
import Dialog from '../../components/Dialog/Dialog';
import Pagination from '../../components/Pagination/Pagination';
import Table from '../../components/Table/Table';
import { http_get } from '../../services';
import { httpDelete, httpGet, httpPatch } from '../../utils/index';

import './Home.scss';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalTodo, setModalTodo] = useState({});
  const [modalId, setModalId] = useState('');
  const [isAsc, setIsAsc] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const requestUsers = await http_get('/users');
        const requestTodos = await http_get('/todos');

        const { data: dataTodos, status: statusTodos } = requestTodos;
        const { data: dataUsers, status: statusUsers } = requestUsers;

        if (statusTodos === 200 && statusUsers === 200) {
          const arr = [];
          for (let i in dataTodos) {
            for (let j in dataUsers) {
              if (dataTodos[i]?.userId === dataUsers[j]?.id) {
                arr.push({ ...dataTodos[i], assignee: dataUsers[j].name });
              }
            }
          }
          setTodos(arr);
        } else {
          console.log(requestTodos);
          console.log(requestUsers);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getTodos();
  }, []);

  const handleModalClose = () => setOpen(false);

  const handleModalShow = (id) => {
    setModalTodo(todos.find((todo) => todo?.id === id));
    setOpen(true);
    setModalId(id);
  };

  const changeTodo = () => {
    // PATCH REQUEST
    httpPatch(modalId, modalTodo);
  };

  const deleteTodo = (id) => {
    const filterTodos = todos?.filter((todo) => todo.id !== id);
    setTodos(filterTodos);

    // DELETE REQUEST
    //  httpDelete(id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setModalTodo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleCheckboxChange = () => {
    setModalTodo((prevState) => {
      return {
        ...prevState,
        completed: !prevState.completed,
      };
    });
  };

  const todosPerPage = 10;
  const pagesVisited = pageNum * todosPerPage;

  const displayTodos = todos
    ?.slice(pagesVisited, pagesVisited + todosPerPage)
    ?.map((todo) => todo);

  const pageCount = Math.ceil(todos?.length / todosPerPage);

  const onPageChange = ({ selected }) => {
    setPageNum(selected);
  };

  const sortStatus = () => {
    setIsAsc((prevState) => !prevState);
    setTodos(
      isAsc
        ? todos?.sort((a, b) => a.completed - b.completed)
        : todos?.sort((a, b) => b.completed - a.completed)
    );
  };

  return (
    <div className="home-container">
      <Table
        displayTodos={displayTodos}
        handleModalShow={handleModalShow}
        deleteTodo={deleteTodo}
        sortStatus={sortStatus}
        isAsc={isAsc}
      />
      <Pagination pageCount={pageCount} onPageChange={onPageChange} />
      {open && (
        <Dialog
          modalTodo={modalTodo}
          open={open}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          handleModalClose={handleModalClose}
          changeTodo={changeTodo}
        />
      )}
    </div>
  );
};

export default Home;
