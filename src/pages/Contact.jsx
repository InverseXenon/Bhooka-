import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can later integrate API here (email/Firebase/etc.)
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800 px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-3 tracking-tight">
          Get in <span className="text-blue-500">Touch</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have a question, feedback, or collaboration idea? I’d love to hear from you 💬
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            className={`w-full border ${
              errors.name ? "border-red-400" : "border-gray-300"
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            placeholder="Enter your email"
            className={`w-full border ${
              errors.email ? "border-red-400" : "border-gray-300"
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            {...register("message", {
              required: "Message cannot be empty",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters long",
              },
            })}
            placeholder="Write your message..."
            rows="4"
            className={`w-full border ${
              errors.message ? "border-red-400" : "border-gray-300"
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message ✉️"}
        </button>

        {/* Success Message */}
        {isSubmitSuccessful && (
          <p className="text-green-600 text-center mt-4 font-medium animate-fade-in">
            ✅ Your message has been sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
