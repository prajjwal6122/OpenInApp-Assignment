import { useState } from "react";
import * as XLSX from 'xlsx';
import { FaRegFileExcel } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

function App() {
  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  // onchange event
  const handleFile = (e) => {
    let fileTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
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

  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  };

  return (
    <div className="flex items-center justify-center">

      <div className="wrapper bg-white p-4 mt-4 rounded-md w-full max-w-2xl border-primary relative border border-solid">
        <div className="border border-solid border-gray-300">
          <h1 className="text-2xl font-bold m-8">Upload & View Excel Sheets</h1>

          {/* upper part */}
          <div className="pb-20 relative">
            <form className="form-group custom-form w-full" onSubmit={handleFileSubmit}>
              <div className="flex flex-col items-center w-full">
                <input type="file" className="form-control mb-6" required onChange={handleFile} />
                <span className="pb-8 size-xl"><FaRegFileExcel /> </span>
                <span className="text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">Drop your Excel sheet or <span className=" text-primary">Browse</span></span>
              </div>
            </form>
          </div>

        </div>

        {/* lower part */}
        <div className="py-8">
          <button
            type="submit"
            className="btn bg-primary text-white px-8 py-4 rounded-md w-full flex items-center justify-center"
            onClick={handleFileSubmit}
          >
            <span className="mr-2"><FiUpload /></span> UPLOAD
          </button>

          {typeError && (
            <div className="alert alert-danger mt-4" role="alert">
              {typeError}
            </div>
          )}
        </div>
      </div>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			{excelData!==''?
      <>
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Product ID</th>
							<th>Customer Name</th>
							<th>Order Date</th>
							<th>Order Total</th>
							<th>Shipping Address</th>
							<th>Order Status</th>
						</tr>
					</thead>
					<tbody>
						{excelData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
      </>
      :''}
		</div>
    </div>
  );
}

export default App;
