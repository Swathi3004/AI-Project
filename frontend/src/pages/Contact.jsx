import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              Get in Touch
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-600 text-2xl" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-2xl" />
                <span>support@studentassistant.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-green-600 text-2xl" />
                <span>Bengaluru, Karnataka, India</span>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              Send Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full border rounded-lg p-3"
              ></textarea>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;