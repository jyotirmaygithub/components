import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { PlusIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';


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
    <div className=' bg-gray-100 p-4'>
      <div className='flex justify-between px-5'>
        <h1 className='text-2xl font-bold mb-4'>Add Product</h1>
        <div className='flex justify-center items-center space-x-2 text-sm font-semibold'>
          <p className='text-violet-500'>Ecommerce</p>
          <ChevronDoubleRightIcon  className='h-4 text-gray-400'/>
          <p>Add Product</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-between bg-white p-6 m-5 rounded-lg gap-4'>
        <div className='flex-col flex-wrap w-[45vw] space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>
              Product Name
            </label>
            <input
              className='w-full p-2 border rounded focus:outline-none focus:border-focusBorder'
              type='text'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              maxLength='30'
            />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex-grow mr-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Category
              </label>
              <div className='relative'>
                <select
                  id='category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className='block appearance-none w-full bg-white border border-gray-200 px-4 py-2 pr-10 rounded focus:outline-none'
                >
                  <option value=''>Select an option</option>
                  <option value='Material Tailwind HTML'>
                    Material Tailwind HTML
                  </option>
                  <option value='Material Tailwind React'>
                    Material Tailwind React
                  </option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <ChevronDownIcon className='h-5 w-5' />
                </div>
              </div>
            </div>
            <div className='flex-grow'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Gender
              </label>
              <div className='relative'>
                <select
                  id='gender'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className='block appearance-none w-full bg-white border border-gray-200 px-4 py-2 pr-10 rounded focus:outline-none focus:border-focusBorder'
                >
                  <option value=''>Select an option</option>
                  <option value='Material Tailwind HTML'>
                    Material Tailwind HTML
                  </option>
                  <option value='Material Tailwind React'>
                    Material Tailwind React
                  </option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <ChevronDownIcon className='h-5 w-5' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex-grow mr-4'>
              <label className='block text-sm font-medium mb-1'>Size</label>
              <div className='relative'>
                <select
                  id='size'
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className='block appearance-none w-full bg-white border border-gray-200 px-4 py-2 pr-10 rounded focus:outline-none focus:border-focusBorder'
                >
                  <option value=''>Select an option</option>
                  <option value='Material Tailwind HTML'>
                    Material Tailwind HTML
                  </option>
                  <option value='Material Tailwind React'>
                    Material Tailwind React
                  </option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <ChevronDownIcon className='h-5 w-5' />
                </div>
              </div>
            </div>
            <div className='flex-grow'>
              <label className='block text-sm font-medium mb-1'>Brand</label>
              <div className='relative'>
                <select
                  id='brand'
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className='block appearance-none w-full bg-white border border-gray-200 px-4 py-2 pr-10 rounded focus:outline-none focus:border-focusBorder'
                >
                  <option value=''>Select an option</option>
                  <option value='Material Tailwind HTML'>
                    Material Tailwind HTML
                  </option>
                  <option value='Material Tailwind React'>
                    Material Tailwind React
                  </option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <ChevronDownIcon className='h-5 w-5' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex-grow mr-4'>
              <label className='block text-sm font-medium mb-1'>Colors</label>
              <input
                type='text'
                value={colors}
                onChange={(e) => setColors(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
            <div className='flex-grow'>
              <label className='block text-sm font-medium mb-1'>Cost</label>
              <input
                type='number'
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>
              Product Description
            </label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              maxLength='500'
              className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
            ></textarea>
            <p className='text-xs text-gray-500 mt-1'>
              *Description should not exceed 500 letters
            </p>
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>
              Product Features
            </label>
            <ReactQuill
              value={productFeatures}
              onChange={setProductFeatures}
              className='w-full border border-transparent focus-within:border-blue-500 rounded'
            />
          </div>
        </div>
        <div className='flex-col flex-wrap w-[45vw] space-y-4'>
          <div className='flex justify-between items-center'>
            <div className='flex-grow mr-4'>
              <label className='block text-sm font-medium mb-1'>
                Actual Price
              </label>
              <input
                type='number'
                value={actualPrice}
                onChange={(e) => setActualPrice(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
            <div className='flex-grow mr-4'>
              <label className='block text-sm font-medium mb-1'>
                Dealer Price
              </label>
              <input
                type='number'
                value={dealerPrice}
                onChange={(e) => setDealerPrice(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
            <div className='flex-grow'>
              <label className='block text-sm font-medium mb-1'>Discount</label>
              <input
                type='number'
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
            {/* </div> */}
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex-grow mr-4'>
              <label className='block text-sm font-medium mb-1'>
                Product Type
              </label>
              <input
                type='text'
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
            <div className='flex-grow'>
              <label className='block text-sm font-medium mb-1'>
                Item Weight
              </label>
              <input
                type='number'
                value={itemWeight}
                onChange={(e) => setItemWeight(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
          </div>

          <div>
            <div>
              <label className='block text-sm font-medium mb-1'>
                Product Images
              </label>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='dropzone-file'
                  className='flex flex-col items-center justify-center w-full h-28 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer'
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      <span className='font-semibold'>Click to upload</span> or
                      drag and drop
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id='dropzone-file'
                    type='file'
                    multiple
                    onChange={handleImageUpload}
                    className='hidden'
                  />
                </label>
              </div>
              <div className='mt-4'>
                {productImages.length > 0 && (
                  <div>
                    <p className='font-medium text-sm mb-1'>Uploaded Images:</p>
                    <ul>
                      {productImages.map((file, index) => (
                        <li key={index} className='text-sm'>
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                Minimum of 6 images are needed to be uploaded. Make sure the
                image size matches the proper background size, and all images
                should be uniformly maintained with width and height to fit the
                image container. Image size should not exceed 2MB. Once
                uploaded, to change the image, you need to wait a minimum of 24
                hours.
              </p>
            </div>
          </div>
          <div>
            <div>
              <label className='block text-sm font-medium mb-1'>
                Warranty Documents
              </label>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='dropzone-warranty'
                  className='flex flex-col items-center justify-center w-full h-28 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer '
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      <span className='font-semibold'>Click to upload</span> or
                      drag and drop
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      PDF, DOCX, TXT (MAX. 5MB each)
                    </p>
                  </div>
                  <input
                    id='dropzone-warranty'
                    type='file'
                    multiple
                    // onChange={(e) => handleWarrantyUpload(e)}
                    className='hidden'
                  />
                </label>
              </div>
            </div>
            <div className='mt-4'>
              {warrantyDocuments.length > 0 && (
                <div>
                  <p className='font-medium text-sm mb-1'>
                    Uploaded Documents:
                  </p>
                  <ul>
                    {warrantyDocuments.map((file, index) => (
                      <li key={index} className='text-sm'>
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex-grow mr-4'>
              <label
                htmlFor='publishDate'
                className='block text-sm font-medium mb-1'
              >
                Publish Date
              </label>
              <input
                id='publishDate'
                type='date'
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
            <div className='flex-grow'>
              <label
                htmlFor='publishTime'
                className='block text-sm font-medium mb-1'
              >
                Publish Time
              </label>
              <input
                id='publishTime'
                type='time'
                value={publishTime}
                onChange={(e) => setPublishTime(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
          </div>

          <div className='flex justify-between items-center mb-4'>
            <div className='flex-grow mr-4'>
              <label
                htmlFor='publishedStatus'
                className='block text-sm font-medium mb-1'
              >
                Published Status
              </label>
              <div className='relative'>
                <select
                  id='publishedStatus'
                  value={publishedStatus}
                  onChange={(e) => setPublishedStatus(e.target.value)}
                  className='block appearance-none w-full bg-white border border-gray-200 px-4 py-2 pr-10 rounded focus:outline-none focus:border-focusBorder'
                >
                  <option value=''>Select an option</option>
                  <option value='Material Tailwind HTML'>
                    Material Tailwind HTML
                  </option>
                  <option value='Material Tailwind React'>
                    Material Tailwind React
                  </option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <svg
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className='flex-grow'>
              <label
                htmlFor='productTags'
                className='block text-sm font-medium mb-1'
              >
                Product Tags
              </label>
              <input
                id='productTags'
                type='text'
                value={productTags}
                onChange={(e) => setProductTags(e.target.value)}
                className='w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-focusBorder'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>
              Availability
            </label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className='w-full p-2 border border-transparent focus:border-focusBorder rounded'
            >
              <option value=''>Select</option>
              {/* Add options here */}
            </select>
          </div>
          <div className='mt-4 flex justify-end'>
            <button className='flex items-center bg-violet-200 text-violet-600 px-4 py-2 gap-2 rounded mr-2'>
              Add Product
              <PlusIcon className='h-5 w-5 mr-1' />
            </button>
            <button className='flex items-center bg-green-200 text-green-600 px-4 py-2 gap-2 rounded'>
              Save Product
              <ArrowDownTrayIcon className='h-5 w-5 mr-1' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
