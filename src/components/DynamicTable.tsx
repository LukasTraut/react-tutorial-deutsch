import React, { useState } from "react";

interface DynamicTableProps {
  initialRows?: number;
  initialColumns?: number;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  // wie viele Spalten, Reihen am anfang
  initialRows = 1,
  initialColumns = 1,
}) => {
  const [rows, setRows] = useState(initialRows); // zeigt die Spalten, Reihen an
  const [columns, setColumns] = useState(initialColumns);

  // Generiere Array für Zeilen und Spalten
  const rowArray = Array.from({ length: rows }, (_, index) => index); // speicher wie viel Spalten, Reihen
  const columnArray = Array.from({ length: columns }, (_, index) => index);

  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000); // einzigartige ID zwischen 1-1000
  };

  return (
    <div>
      <br></br>
      <label htmlFor="rows">Anzahl der Zeilen:</label>
      <input
        id="rows"
        type="number" //label von zeilen
        min="1"
        value={rows}
        onChange={(e) => setRows(Math.max(1, parseInt(e.target.value) || 1))}
      />
      <br></br>
      <label htmlFor="cols">Anzahl der Spalten:</label>
      <input
        id="columns"
        type="number" //label von Spalten
        min="1"
        value={columns}
        onChange={(e) => setColumns(Math.max(1, parseInt(e.target.value) || 1))}
      />
      <table className="dynamic">
        <br></br>
        <thead>
          <tr>
            <th></th>
            {columnArray.map((col) => (
              <th key={`header-${col}`}>Spalte {col + 1}</th> // zeigt die obersten Spalten an mit Spalte(zahl)
            ))}
          </tr>
        </thead>
        <tbody>
          {rowArray.map((row) => (
            <tr key={`row-${row}`}>
              <th>Zeile {row + 1}</th>
              {columnArray.map((col) => {
                // Zeile 57 zeigt die seitlichen reihen an mit Zeile(zahl)
                const id = generateUniqueId(); // speichert die id die in der url benutzt wird
                const url = `https://picsum.photos/200/${id}?blur`; // speichert die url mit der zuvor generierten id
                return (
                  <td key={`cell-${row}-${col}`}>
                    <img src={url} />
                  </td> // gibt an in welchem tabellen feld und macht dann das bild rein
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
