import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../slice/todoSlice";

function DevList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (data.isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="animate-spin size-24 border-[3px] border-current  border-t-transparent text-green-600 rounded-full dark:text-green-600"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <ul role="list" className="divide-y flex flex-col gap-8 divide-gray-100">
      {data.data.map((devlist) => (
        <li
          key={devlist.id}
          className="flex shadow-lg rounded justify-between items-center gap-x-6 px-4 py-5"
        >
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex flex-col justify-start items-start flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">
                {devlist.name}
              </p>
              <p className="mt-1 truncate text-sm/6 text-gray-500">
                {devlist.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{devlist.website}</p>
            <p className="mt-1 text-xs/5 text-gray-500">
              Phone: {devlist.phone}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DevList;
