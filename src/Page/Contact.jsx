import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto">
      <div className='cover w-full py-10'>
        <h1 className="text-4xl font-bold mb-5 text-center">Contact Us</h1>
      </div>
      <div className='flex justify-between w-full px-6 py-10 gap-5'>
        <div className='w-[50%] px-10'>
           <h2 className='text-2xl font-bold font-mono capitalize py-2'>helllo React</h2>
           <h2 className='text-xl font-medium font-mono py-2'>01701229301</h2>
           <h2 className='text-xl font-medium font-mono py-2'>01701121314</h2>
           <h2 className='text-xl font-medium font-mono py-2'>inforeact@2024.com</h2>
           <p className='text-base font-mono font-normal py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi rerum est esse, obcaecati expedita vero illum impedit commodi, reprehenderit laboriosam! Nemo, accusamus officia. Vitae, velit? Eligendi autem libero magnam!</p>
        </div>
       <form onSubmit={handleSubmit} className="space-y-5 w-[50%]">
        <div>
          <label className="block text-lg mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-3 rounded"
            placeholder='your Name'
            required
          />
        </div>
        <div>
          <label className="block text-lg mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-3 rounded"
            placeholder='your Email'
            required
          />
        </div>
        <div>
          <label className="block text-lg mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-3 rounded"
            placeholder='Message'
            rows="5"
            required
          ></textarea>
        </div>
          <button type="submit" className="bg-black text-white px-5 py-3 rounded w-full hover:bg-[#f68f3d] uppercase"> Submit  </button>
       </form>
      </div>
    </div>
  );
};

export default Contact;

