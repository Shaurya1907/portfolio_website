import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef= useRef();

    const [loading, setloading] = useState(false)
    const [form, setForm ] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = ({ target: {name, value }}) => {
        setForm({...form, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);

        try{
            await emailjs.send('service_6y9cntj', 
                'template_meavuqk', {
                from_name: form.name, 
                to_name: 'Shaurya Goyal',
                from_email: form.email,
                to_email: 'shauryagoyal1907@gmail.com',
                message: form.message
            }, 'LemjMObUY2hx4VTsF')

            setloading(false);
            alert('Your message has been sent!')
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch(error){
            setloading(false);
            console.log(error);
            alert('Something went wrong!')
        }
        
    }

  return (
    <section id ="contact" className="c-space my-20">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
            <div className="contact-container">
                <h3 className="head-text">Let's talk</h3>
                <p className="text-lg text-white-600 mt-3">
                    Whether you're hiring game development, graphics programming, or rendering interns, I'm eager to contribute to your team.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className='space-y-3'>
                        <span className="field-label">Full Name</span>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="Your Name" />
                    </label>
                    <label className='space-y-3'>
                        <span className="field-label">Email</span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="youremail@gmail.com" />
                    </label>
                    <label className='space-y-3'>
                        <span className="field-label">Your message</span>
                        <input type="message" name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hi, I wanna give you a job..." />
                    </label>
                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}

                        <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
        </div>
        
    </section>
  )
}

export default Contact
