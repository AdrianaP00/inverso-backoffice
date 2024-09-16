"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, Plus, Trash2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function MenuComposer() {
  const [selectedMenu, setSelectedMenu] = useState("default");
  const [menus, setMenus] = useState(["default", "summer", "winter"]);
  const [newMenuName, setNewMenuName] = useState("");
  const [isNewMenuDialogOpen, setIsNewMenuDialogOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    photo: "",
  });
  const [photos] = useState([
    {
      id: 1,
      name: "Pizza",
      url: "/placeholder.svg?height=200&width=300",
      date: "2023-06-01",
    },
    {
      id: 2,
      name: "Pasta",
      url: "/placeholder.svg?height=200&width=300",
      date: "2023-06-02",
    },
    {
      id: 3,
      name: "Salad",
      url: "/placeholder.svg?height=200&width=300",
      date: "2023-06-03",
    },
    {
      id: 4,
      name: "Burger",
      url: "/placeholder.svg?height=200&width=300",
      date: "2023-06-04",
    },
    {
      id: 5,
      name: "Steak",
      url: "/placeholder.svg?height=200&width=300",
      date: "2023-06-05",
    },
    {
      id: 6,
      name: "Fish",
      url: "/placeholder.svg?height=200&width=300",
      date: "2023-06-06",
    },
  ]);
  const [photoFilter, setPhotoFilter] = useState("");
  const [photoSortBy, setPhotoSortBy] = useState("name");

  const handleAddNewMenu = () => {
    if (newMenuName && !menus.includes(newMenuName)) {
      setMenus([...menus, newMenuName]);
      setSelectedMenu(newMenuName);
      setNewMenuName("");
      setIsNewMenuDialogOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewItem((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddMenuItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      setMenuItems((prev) => [
        ...prev,
        { ...newItem, id: Date.now(), menu: selectedMenu },
      ]);
      setNewItem({
        name: "",
        description: "",
        price: "",
        category: "",
        photo: "",
      });
    }
  };

  const handleDeleteMenuItem = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePhotoSelect = (photoUrl) => {
    setNewItem((prev) => ({ ...prev, photo: photoUrl }));
  };

  const filteredPhotos = photos
    .filter((photo) =>
      photo.name.toLowerCase().includes(photoFilter.toLowerCase())
    )
    .sort((a, b) => {
      if (photoSortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Menu Items
      </h2>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="w-64">
            <Select value={selectedMenu} onValueChange={setSelectedMenu}>
              <SelectTrigger className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <SelectValue placeholder="Select a menu" />
              </SelectTrigger>
              <SelectContent>
                {menus.map((menu) => (
                  <SelectItem key={menu} value={menu}>
                    {menu.charAt(0).toUpperCase() + menu.slice(1)} Menu
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Dialog
            open={isNewMenuDialogOpen}
            onOpenChange={setIsNewMenuDialogOpen}
          >
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center bg-yellow-500 text-white hover:bg-yellow-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Menu
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white dark:bg-gray-800">
              <DialogHeader>
                <DialogTitle className="text-gray-900 dark:text-white">
                  Add New Menu
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <Label
                  htmlFor="newMenuName"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Menu Name
                </Label>
                <Input
                  id="newMenuName"
                  value={newMenuName}
                  onChange={(e) => setNewMenuName(e.target.value)}
                  placeholder="Enter new menu name"
                  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={handleAddNewMenu}
                  className="bg-yellow-500 text-white hover:bg-yellow-600"
                >
                  Add Menu
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <form onSubmit={handleAddMenuItem}>
          <div className="mb-4">
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
              Item Name
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter item name"
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={newItem.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="description"
              className="text-gray-700 dark:text-gray-300"
            >
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Enter item description"
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={newItem.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="price" className="text-gray-700 dark:text-gray-300">
              Price
            </Label>
            <Input
              type="number"
              id="price"
              placeholder="Enter price"
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={newItem.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="category"
              className="text-gray-700 dark:text-gray-300"
            >
              Category
            </Label>
            <Input
              type="text"
              id="category"
              placeholder="Enter category"
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={newItem.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <Label className="text-gray-700 dark:text-gray-300">Photo</Label>
            <div className="mt-2 p-4 border rounded-md bg-gray-50 dark:bg-gray-700">
              <div className="flex justify-between items-center mb-4">
                <Input
                  type="text"
                  placeholder="Filter photos"
                  className="w-64 bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                  value={photoFilter}
                  onChange={(e) => setPhotoFilter(e.target.value)}
                />
                <RadioGroup
                  defaultValue="name"
                  onValueChange={setPhotoSortBy}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="name" id="sort-name" />
                    <Label
                      htmlFor="sort-name"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="date" id="sort-date" />
                    <Label
                      htmlFor="sort-date"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      Date
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className={`cursor-pointer border-2 rounded-md overflow-hidden ${
                      newItem.photo === photo.url
                        ? "border-yellow-500"
                        : "border-transparent"
                    }`}
                    onClick={() => handlePhotoSelect(photo.url)}
                  >
                    <Image
                      src={photo.url}
                      alt={photo.name}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-2 bg-white dark:bg-gray-600">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {photo.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {photo.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-yellow-500 text-white hover:bg-yellow-600"
          >
            Add Menu Item
          </Button>
        </form>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Menu Items List
        </h3>
        {menuItems.filter((item) => item.menu === selectedMenu).length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">
            No items in this menu yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {menuItems
              .filter((item) => item.menu === selectedMenu)
              .map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    {item.photo && (
                      <Image
                        src={item.photo}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    )}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Price: ${item.price}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Category: {item.category}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleDeleteMenuItem(item.id)}
                    variant="ghost"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MenuComposer;
