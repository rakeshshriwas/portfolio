import Section from "../components/section";
import { User, Mail } from "lucide-react";
import type { FormEvent } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  const onsubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", accessKey as string);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Form Submitted Successfully");
        form.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <Section title="Get In Touch">
      <div
        className="w-full border border-gray-200 p-6 rounded-xl"
        id="getInTouch"
      >
        <p className="text-muted-foreground mt-3 text-sm text-center mb-10">
          Please contact me directly at{" "}
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors"
            href="mailto:rakesh.shriwas88"
          >
            rakesh.shriwas88@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <form
          className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
          onSubmit={onsubmit}
        >
          <div>
            <p className="mb-2 text-sm font-medium">Your Name</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <User className="mt-2 pt-1" />
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 text-sm outline-none"
                name="name"
                required
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Email id</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <Mail className="mt-2 pt-1" />
              <input
                type="text"
                placeholder="hello@gmail.com"
                className="w-full p-3 text-sm outline-none"
                name="email"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Message</p>
            <textarea
              // type="text"
              placeholder="Hello! What's up?"
              name="message"
              rows={8}
              className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-max flex gap-2 bg-indigo-600 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
}
