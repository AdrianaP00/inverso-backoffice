import { BarChart2, Coffee, FileImage, X } from "lucide-react";
import Link from "next/link";

const Sidebar = ({ isSidebarOpen, closeSidebar, activeTab, setActiveTab }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-20 border-b border-gray-200 dark:border-gray-700 px-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Inverso Backoffice
        </h1>
        <button
          onClick={closeSidebar}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 lg:hidden"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-5">
        <Link
          className={`flex items-center mt-4 py-2 px-6 ${
            activeTab === "analytics"
              ? "bg-yellow-100 dark: bg-yellow-900 text-yellow-900 dark:text-yellow-100"
              : "text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          }`}
          href="/analytics"
          onClick={() => {
            setActiveTab("analytics");
            closeSidebar();
          }}
        >
          <BarChart2 className="h-5 w-5" />
          <span className="mx-3">Analytics</span>
        </Link>
        <Link
          className={`flex items-center mt-4 py-2 px-6 ${
            activeTab === "menu"
              ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100"
              : "text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          }`}
          href="/menu"
          onClick={() => {
            setActiveTab("menu");
            closeSidebar();
          }}
        >
          <Coffee className="h-5 w-5" />
          <span className="mx-3">Menu Items</span>
        </Link>
        <Link
          className={`flex items-center mt-4 py-2 px-6 ${
            activeTab === "photos"
              ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100"
              : "text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          }`}
          href="/photos"
          onClick={() => {
            setActiveTab("photos");
            closeSidebar();
          }}
        >
          <FileImage className="h-5 w-5" />
          <span className="mx-3">Photos</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
