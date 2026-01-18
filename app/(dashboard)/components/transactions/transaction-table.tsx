import PriceFormatter from "@/app/utils/price-formatter";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const data = [
  {
    date: "23/02/2026 19:32",
    customer: "John Doe",
    contact: "081234567890",
    total: 1500000,
    status: "pending",
  },
  {
    date: "26/02/2026 14:20",
    customer: "Jane Smith",
    contact: "089876543210",
    total: 2500000,
    status: "paid",
  },
  {
    date: "26/02/2026 19:45",
    customer: "Alice Johnson",
    contact: "082233445566",
    total: 300000,
    status: "rejected",
  },
];

type TTransactionTableProps = {
  onViewDetail?: () => void;
};

const TransactionsTable = ({ onViewDetail }: TTransactionTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-300";
    }
  };
  return (
    <div>
      <div className="bg-white rounded-xl border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 font-semibold">Date</th>
              <th className="px-6 py-4 font-semibold">Customer</th>
              <th className="px-6 py-4 font-semibold">Contact</th>
              <th className="px-6 py-4 font-semibold">Total</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="px-6 py-4 font-medium">{data.date}</td>
                <td className="px-6 py-4 font-medium">{data.customer}</td>
                <td className="px-6 py-4 font-medium">{data.contact}</td>
                <td className="px-6 py-4 font-medium">
                  {PriceFormatter(data.total)}
                </td>
                <td className="px-6 py-4 font-medium ">
                  <div
                    className={`px-4 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(data.status)}`}
                  >
                    {data.status}
                  </div>
                </td>
                <td className="flex gap-3 px-6 py-7.5 items-center h-full">
                  <button
                    onClick={onViewDetail}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 w-fit py-1 px-2 rounded-md"
                  >
                    <FiEye size={18} />
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
