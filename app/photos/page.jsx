import { Image } from "lucide-react";

function Photos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Photos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={`/placeholder.svg?height=200&width=300`}
              alt={`Restaurant photo ${index}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                Photo {index}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Description of photo {index}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
