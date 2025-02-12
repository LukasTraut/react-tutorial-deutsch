import React from "react";

const MemoryTable: React.FC<{
  handleImageClick: (event: React.MouseEvent<HTMLImageElement>) => void;
}> = ({ handleImageClick }) => {
  return (
    <div>
      <h1>Memory Table</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/90?blur"
                onClick={handleImageClick}
              />
            </td>
            <td>
              <img
                src="https://picsum.photos/200/100?blur"
                onClick={handleImageClick}
              />
            </td>
            <td>
              <img
                src="https://picsum.photos/200/200?blur"
                onClick={handleImageClick}
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/300?blur"
                onClick={handleImageClick}
              />
            </td>
            <td>
              <img
                src="https://picsum.photos/200/400?blur"
                onClick={handleImageClick}
              />
            </td>
            <td>
              <img
                src="https://picsum.photos/200/500?blur"
                onClick={handleImageClick}
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/600?blur"
                onClick={handleImageClick}
              />
            </td>
            <td>
              <img
                src="https://picsum.photos/200/700?blur"
                onClick={handleImageClick}
              />
            </td>
            <td>
              <img
                src="https://picsum.photos/200/800?blur"
                onClick={handleImageClick}
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/900?blur"
                onClick={handleImageClick}
              />
            </td>
            <td>
              <img
                src="https://picsum.photos/200/1000?blur"
                onClick={handleImageClick}
              />
            </td>
            <td>
              <img
                src="https://picsum.photos/200/1100?blur"
                onClick={handleImageClick}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MemoryTable;
