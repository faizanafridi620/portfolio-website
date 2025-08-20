import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


function Contacts() {
  const [form, setForm] = useState(({
    name: "",
    email: "",
    message: "",
  }))
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const formref = useRef();

   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

   const handleSubmit = (e) => {
    e.preventDefault()
     emailjs
      .sendForm('service_78vlc7u', 'template_lfvz549', formref.current, {
        publicKey: 'MpdTWmwpTnrTMFShZ',
      })
      .then(
        () => {
          setSuccess('SUCCESS!');
        },
        (error) => {
          setError(error.text);
        },
      );
    alert('Thank you for contacting me!')
    setForm({ name: '', email: '', message: '' })
  }
  
  return (
    <div id='contact' className="mx-auto max-w-6xl p-4 text-blue-900 sm:p-10 flex flex-col gap-10 sm:gap-16 items-center justify-center">
      <h3 className='text-4xl sm:text-7xl text-black'>Contact Me</h3>
      <div className='grid grid-col-1 sm:grid-cols-2 gap-10 w-full items-center justify-center'>

      <div>
        <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-4xl font-extrabold'>
          Let's Work Together</motion.h1>
        <h2 className='text-xl'>Email:

        </h2>
        <a href="mailto:faizanafridi676@gmail.com" className='text-amber-700 hover:text-amber-100 font-bold'>faizanafridi676@gmail.com</a>
      </div>
      <motion.div
      initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <form ref={formref} onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg bg-slate-200 p-6 rounded-2xl shadow-lg">
          <h2 className='text-xl text-black font-bold'>Send me a message </h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 rounded-lg bg-sky-200 border border-sky-700 text-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 rounded-lg bg-sky-200 border border-sky-700 text-black"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-2 rounded-lg bg-sky-200 border border-sky-700 text-black resize-none"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-indigo-700 hover:bg-indigo-800 cursor-pointer text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
      </motion.div>
      </div>

    </div>
  )
}

export default Contacts