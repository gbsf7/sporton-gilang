import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const data = [
  {
    name: "SportOn Product 1",
    imageUrl: "/images/categories/category-badminton.png",
    descripton: "This is product 1 description",
  },
  {
    name: "SportOn Product 2",
    imageUrl: "/images/categories/category-running.png",
    descripton: "This is product 2 description",
  },
];

const CategoryTable = () => {
  return (
    <div>
      <div className="bg-white rounded-xl border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 font-semibold">Category Name</th>
              <th className="px-6 py-4 font-semibold">Description</th>
              <th className="px-6 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="px-6 py-4 font-medium">
                  <div className="flex gap-2">
                    <div className="aspect-square bg-gray-100 rounded-md">
                      <Image
                        src={data.imageUrl}
                        width={52}
                        height={52}
                        alt={data.name}
                        className="aspect-square object-contain"
                      />
                    </div>
                    <span>{data.name}</span>
                  </div>
                </td>

                <td className="px-6 py-4 font-medium">{data.descripton}</td>
                <td className="flex gap-3 px-6 py-7.5 items-center h-full">
                  <button>
                    <FiEdit2 size={20} />
                  </button>
                  <button>
                    <FiTrash2 size={20} />
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

export default CategoryTable;
