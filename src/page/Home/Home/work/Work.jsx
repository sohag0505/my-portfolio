import img from "../../../../assets/Screenshot (220).png";
import img2 from "../../../../assets/Screenshot (221).png";
import img3 from "../../../../assets/Screenshot (224).png";

const Work = () => {
  return (
    <div className="  bg-slate-400">
      <h2 className="font-bold text-5xl text-center ">My Project</h2>
      <div className="md:flex md:pt-24 pt-8  md:mx-52">
        <div className="card md:w-96 w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MIU Portal</h2>
          </div>
        </div>
        <div className="card md:w-96 w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Animal-Toys</h2>
          </div>
        </div>
        <div className="card md:w-96 w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Chef-receipe-of-diganto</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
