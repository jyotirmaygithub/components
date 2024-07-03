import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [colors, setColors] = useState('');
  const [cost, setCost] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productFeatures, setProductFeatures] = useState('');
  const [actualPrice, setActualPrice] = useState('');
  const [dealerPrice, setDealerPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [productType, setProductType] = useState('');
  const [itemWeight, setItemWeight] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [publishTime, setPublishTime] = useState('');
  const [publishedStatus, setPublishedStatus] = useState('');
  const [productTags, setProductTags] = useState('');
  const [availability, setAvailability] = useState('');
  const [productImages, setProductImages] = useState([]);
  const [warrantyDocuments, setWarrantyDocuments] = useState([]);

  const handleImageUpload = (e, setter) => {
    const files = Array.from(e.target.files);
    setter(files);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            maxLength="30"
            className="focus:ring-custom focus:ring-2 w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          >
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          >
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          >
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Brand</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          >
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Colors</label>
          <input
            type="text"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Cost</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Product Description</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            maxLength="500"
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Product Features</label>
          <ReactQuill
            value={productFeatures}
            onChange={setProductFeatures}
            className="w-full border border-transparent focus-within:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Actual Price</label>
          <input
            type="number"
            value={actualPrice}
            onChange={(e) => setActualPrice(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Dealer Price</label>
          <input
            type="number"
            value={dealerPrice}
            onChange={(e) => setDealerPrice(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Discount</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Product Type</label>
          <input
            type="text"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Item Weight (in gms)</label>
          <input
            type="number"
            value={itemWeight}
            onChange={(e) => setItemWeight(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Product Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => handleImageUpload(e, setProductImages)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Warranty Documents</label>
          <input
            type="file"
            multiple
            onChange={(e) => handleImageUpload(e, setWarrantyDocuments)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Publish Date</label>
          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Publish Time</label>
          <input
            type="time"
            value={publishTime}
            onChange={(e) => setPublishTime(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Published Status</label>
          <select
            value={publishedStatus}
            onChange={(e) => setPublishedStatus(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          >
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Product Tags</label>
          <input
            type="text"
            value={productTags}
            onChange={(e) => setProductTags(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Availability</label>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full p-2 border border-transparent focus:border-blue-500 rounded"
          >
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add Product</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">Save Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
