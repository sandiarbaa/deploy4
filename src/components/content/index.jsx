import book1 from "../../../public/images/books.jpeg";
import book2 from "../../../public/images/fly-book.jpeg";
import book3 from "../../../public/images/read-a-book.jpeg";

function Content() {
  return (
    <div className="w-[1000px] h-96 mx-auto p-5">
      <h1 className="text-3xl font-semibold mb-5 text-center">I Love Books</h1>
      <div className="flex justify-around">
        <div className="w-72 border shadow rounded-md p-3 bg-slate-300">
          <img src={book1} alt="book1" className="w-full rounded-md" />
          <h2 className="text-lg font-semibold my-2">Book it's Amazing</h2>
          <p className="text-sm text-slate-900">
            Lorem ipsum dolor sit amet, lkdg dd consectetur adipisicing elit.
            saihd hd Temporibus, ducimus dicta. lau saiyu.
          </p>
        </div>
        <div className="w-72 border shadow rounded-md p-3 bg-slate-300">
          <img src={book2} alt="book1" className="w-full rounded-md" />
          <h2 className="text-lg font-semibold my-2">Book it's Amazing</h2>
          <p className="text-sm text-slate-900">
            Lorem ipsum dolor sit amet, lkdg dd consectetur adipisicing elit.
            saihd hd Temporibus, ducimus dicta. lau saiyu.
          </p>
        </div>
        <div className="w-72 border shadow rounded-md p-3 bg-slate-300">
          <img src={book3} alt="book1" className="w-full rounded-md" />
          <h2 className="text-lg font-semibold my-2">Book it's Amazing</h2>
          <p className="text-sm text-slate-900">
            Lorem ipsum dolor sit amet, lkdg dd consectetur adipisicing elit.
            saihd hd Temporibus, ducimus dicta. lau saiyu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
