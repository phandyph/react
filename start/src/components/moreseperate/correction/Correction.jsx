import { useState } from "react";

const data = [
  { id: 0, name: "a", mess: "mess_0" },
  { id: 1, name: "b", mess: "mess_1" },
  { id: 2, name: "c", mess: "mess_2" },
  { id: 3, name: "d", mess: "mess_3" },
  { id: 4, name: "e", mess: "mess_4" },
  { id: 5, name: "f", mess: "mess_5" },
  { id: 6, name: "g", mess: "mess_6" },
  { id: 7, name: "h", mess: "mess_7" },
  { id: 8, name: "i", mess: "mess_8" },
  { id: 9, name: "j", mess: "mess_9" }
];
export default function App() {
  const [da, setDa] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getData = (id) => {
    // different between filter and (map or forEach):
    // filter: show only the different from condition.
    // forEach or map: show or display all without condition.
    setDa(data.filter((d) => d.id === id));
  };



  /**
   * Different between Math.ceil and Array.from:
   * => Math.ceil: start from 1 to 5 [1,2,3,4,5] and use loop.
   * => Array.from: start from 0 to 4 [0,1,2,3,4] no need loop.
   */

//   const pageNumber = [];
//   for (let i = 1; i <= 5; i++) {
//     pageNumber.push(i);
//   }
//   console.log('Use Math.ceil', pageNumber)

  const pages = Array.from(Array(data.length / 2).keys());
  console.log('Array form: ', pages)
  const rowsPerPage = Array.from(Array(data.length / 5).keys());

  return (
    <div className="App">
      <div>
        
        <button // one button is : previous page.
          disabled={currentPage <= 0}
          onClick={() => setCurrentPage(currentPage - 1)}
          className='pagi'
        >
          {`<`}
        </button>

        {pages.map((page) => { // one button is: current page. [0,1,2,3,4]
          return (
            <button className="pagi" onClick={() => setCurrentPage(page)}>{page + 1}</button>
          );
        })}

        <button // one button is: next page.
          disabled={currentPage === 4}
          onClick={() => setCurrentPage(currentPage + 1)}
          className='pagi'
        >
          {`>`}
        </button>

      </div>
      <br />

        
      <div>
        {rowsPerPage.map((d, i) => { // Here is the place that show two by two datas. [0,1]
          const idx = currentPage * 2 + i;
          /**
           * i has 0,1
           * currentPage has 0,1,2,3,4
           * [
           *    {0*2+0, 0*2+1} = {0,1},
           *    {1*2+0, 1*2+1} = {2,3},
           *    {2*2+0, 2*2+1} = {4,5},
           *    {3*2+0, 3*2+1} = {6,7},
           *    {4*2+0, 4*2+1} = {8,9},
           * ]
           */
          return (
            <div style={{ marginLeft: "50px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px"
                }}
              >
                <span>id: {data[idx].id}</span>
                <span>name: {data[idx].name}</span>
                <button onClick={() => getData(data[idx].id)}>show</button>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <div>{da[0]?.mess}</div>
    </div>
  );
}