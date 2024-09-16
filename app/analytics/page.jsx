function Analytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Analytics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Total Orders
          </h3>
          <p className="text-3xl font-bold text-yellow-500">1,234</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Revenue
          </h3>
          <p className="text-3xl font-bold text-yellow-500">$15,678</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Average Order Value
          </h3>
          <p className="text-3xl font-bold text-yellow-500">$12.70</p>
        </div>
      </div>
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Popular Items
        </h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">
              Margherita Pizza
            </span>
            <span className="text-yellow-500 font-semibold">243 orders</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">
              Chicken Alfredo
            </span>
            <span className="text-yellow-500 font-semibold">198 orders</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">
              Caesar Salad
            </span>
            <span className="text-yellow-500 font-semibold">165 orders</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Analytics;
