import {
  FaFacebookF,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaWhatsappSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-slate-400">
      <h2 className="font-bold text-5xl text-center pt-20">Contact</h2>
      <div className="md:flex md:px-56 px-6 pt-6 md:pt-24 pb-10 md:gap-80 ">
        <div>
          <div>
            <p>
              I believe that good communication and collaboration are essebtial
              in any development project.
            </p>
            <p className="mt-6 font-semibold">
              Email: sohaghossain0505@gmail.com
            </p>
            <p className="font-semibold"> WhatsApp: +8801721853600</p>
          </div>
          <div className="flex gap-20 pb-12 pt-12">
            <p>
              <FaFacebookF />
            </p>
            <p>
              <FaLinkedinIn />
            </p>
            <p>
              <FaWhatsappSquare />
            </p>

            <p>
              <FaFacebookMessenger />
            </p>
          </div>
        </div>
        <div className="border p-8">
          <form>
            <p className="text-lg font-bold"> Name:</p>
            <input
              className="p-1 rounded-sm"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <br /> <br />
            <p className="text-lg font-bold"> Email:</p>
            <input
              className="p-1 rounded-sm"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <br /> <br />
            <button className="btn-primary rounded p-2">
              <input type="submit" value="submit" />
            </button>
          </form>
        </div>
      </div>
      <small className="flex justify-center items-center font-semibold">
        copyright@2023.All rights reserve.
      </small>
    </div>
  );
};

export default Contact;
