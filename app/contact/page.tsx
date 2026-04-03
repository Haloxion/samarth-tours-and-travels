import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or need help with a booking? Our team is available 24/7 to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details Cards */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <Phone className="text-primary mb-4" size={32} />
               <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
               <p className="text-gray-500 mb-4">Available 24/7 for urgent inquiries.</p>
               <p className="font-semibold text-gray-800 text-lg">Local Office Support</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <Mail className="text-primary mb-4" size={32} />
               <h3 className="text-xl font-bold text-gray-900 mb-2">Email Address</h3>
               <p className="text-gray-500 mb-4">Send us an email and we'll reply within 24 hours.</p>
               <p className="font-semibold text-gray-800 text-lg">support@samarthtravels.com</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <MapPin className="text-primary mb-4" size={32} />
               <h3 className="text-xl font-bold text-gray-900 mb-2">Headquarters</h3>
               <p className="text-gray-500 mb-4">Visit us for corporate queries.</p>
               <p className="font-semibold text-gray-800 text-md leading-relaxed">
                 123, Samarth Tower, Cyber City<br />
                 Bangalore, Karnataka, 560001
               </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input type="text" placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"></textarea>
              </div>

              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-colors w-full md:w-auto">
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
