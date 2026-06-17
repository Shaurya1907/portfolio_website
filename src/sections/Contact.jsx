import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await emailjs.send(
                'service_6y9cntj',
                'template_meavuqk',
                {
                    from_name: form.name,
                    to_name: 'Shaurya Goyal',
                    from_email: form.email,
                    to_email: 'shauryagoyal1907@gmail.com',
                    message: form.message
                },
                'LemjMObUY2hx4VTsF'
            )

            alert('Your message has been sent!')

            setForm({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            console.log(error)
            alert('Something went wrong!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="c-space my-15">
            <div className="relative max-w-5xl mx-auto">

                {/* Background Terminal */}
                <img
                    src="/assets/terminal.png"
                    alt="terminal background"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
                />

                {/* Content */}
                <div className="relative z-10 px-6 sm:px-30 pt-16 pb-10 sm:pt-18 sm:pb-15">

                    <h3 className="head-text">Let's talk</h3>

                    <p className="text-lg text-white-600 mt-3 max-w-2xl">
                        Whether you're hiring game development, graphics programming,
                        or rendering interns, I'm eager to contribute to your team.
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-10 flex flex-col gap-6"
                    >
                        <label className="space-y-2">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Your Name"
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="youremail@gmail.com"
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input resize-none"
                                placeholder="Hi, I want to give you a job..."
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={loading}
                            className="field-btn"
                        >
                            {loading ? 'Sending...' : 'Send Message'}

                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow-up"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact