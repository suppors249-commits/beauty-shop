import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@beaute.com',
      link: 'mailto:hello@beaute.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Beauty Lane, New York, NY 10001',
      link: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-white to-secondary py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-heading mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-accent border border-primary/20 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="Write your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3.5 rounded-full hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-heading mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have a question about our products or need assistance? We're here to help!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  );

                  if (info.link) {
                    return (
                      <a key={index} href={info.link}>
                        {content}
                      </a>
                    );
                  }
                  return <div key={index}>{content}</div>;
                })}
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white mt-8">
                <h3 className="text-xl font-heading mb-3">Need Immediate Help?</h3>
                <p className="opacity-95 mb-4">
                  Our customer service team is available during business hours to assist you 
                  with any questions or concerns.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full hover:bg-white/90 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
