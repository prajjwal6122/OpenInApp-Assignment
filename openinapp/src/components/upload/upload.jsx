import { useState } from 'react';
import * as XLSX from 'xlsx';
import { FaRegFileExcel, FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

function Upload() {
  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleFile = (e) => {
    let fileTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv'
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError('Please select only excel file types');
        setExcelFile(null);
      }
    } else {
      console.log('Please select your file');
    }
  };

  const handleTagSelection = (e, rowIndex) => {
    const selectedTag = e.target.value;
    setExcelData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex].selectedTags = newData[rowIndex].selectedTags || [];
      if (!newData[rowIndex].selectedTags.includes(selectedTag)) {
        newData[rowIndex].selectedTags.push(selectedTag);
      }
      return newData;
    });
  };

  const handleRemoveTag = (rowIndex, tagIndex) => {
    setExcelData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex].selectedTags.splice(tagIndex, 1);
      return newData;
    });
  };

  const handleFileSubmit = () => {
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      data.map((val) => {
        val.select_tags = val.select_tags.split(', ');
      });

      setExcelData(data);
    }
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = excelData?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col bg-zinc-100 items-center justify-center h-screen">
      <div className="wrapper bg-white p-4 mt-4 rounded-md w-full max-w-2xl border-primary relative border border-solid mb-4">
        <div className="border border-solid border-gray-300">
          <h1 className="text-2xl font-bold m-8">Upload & View Excel Sheets</h1>

          {/* upper part */}
          <div className="pb-20 relative">
            <form className="form-group custom-form w-full">
              <div className="flex flex-col items-center w-full">
                <input type="file" className="form-control mb-6" required onChange={handleFile} />
                <span className="pb-8 size-xl">
                  <FaRegFileExcel />{' '}
                </span>
                <span className="text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">
                  Drop your Excel sheet or <span className=" text-primary">Browse</span>
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* lower part */}
        <div className="py-8">
          <button
            type="button"
            className="btn bg-primary text-white px-8 py-4 rounded-md w-full flex items-center justify-center"
            onClick={handleFileSubmit}
          >
            <span className="mr-2">
              <FiUpload />
            </span>{' '}
            UPLOAD
          </button>

          {typeError && (
            <div className="alert alert-danger mt-4" role="alert">
              {typeError}
            </div>
          )}
        </div>
      </div>
      <div className="items-left"><strong className="items-left text-gray-700 text-2xl font-bold">Uploads</strong></div>
      {currentItems && (
        
        <div className="wrapper  w-full  ">
          <div>
            <div >
              <table className="table-auto w-full bg-stone-200 p-4 rounded-xl mt-5 border-separate border-spacing-y-3 ">
                <thead className='text-left  tracking-wider'>
                  <tr>
                    <th className='p-4 '>SL No.</th>
                    <th className='p-4'>Links</th>
                    <th className='p-4'>Prefix</th>
                    <th className='p-4'>Add Tags</th>
                    <th className='p-4'>Selected Tags</th>
                  </tr>
                </thead>
                <tbody >
                  {currentItems.map((data, idx) => (
                    <tr tabindex="0" className='focus:outline-none h-14  bg-card rounded-3xl text-black bg-white' key={data.id}>
                      <td className='p-4 '> {idx + 1}</td>
                      <td className='p-4 '>
                        <a href={data?.links} className='underline text-blue-400 hover:text-blue-800 visited:text-purple-600' target="_blank">
                          {data.links}
                        </a>
                      </td>
                      <td className='p-4 '>{data?.prefix}</td>
                      <td className='p-4 '>
                        <select className='rounded-lg bg-gray-100 p-1' onChange={(e) => handleTagSelection(e, idx)}>
                          {data.select_tags?.map((tag) => (
                            <option key={tag} value={tag}>
                              {tag}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className='p-4 '>
                        <div className="flex">
                          {data.selectedTags?.map((tag, tagIndex) => (
                            <div key={tagIndex} className="tag-container h-7">
                              {tag}{' '}
                              <span onClick={() => handleRemoveTag(idx, tagIndex)} className="cursor-pointer">
                                <FaTimes />
                              </span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            {Array.from({ length: Math.ceil(excelData?.length / itemsPerPage) }, (_, i) => (
              <button key={i} onClick={() => paginate(i + 1)} className="mx-1 px-3 py-1 bg-gray-200 rounded-md">
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;
