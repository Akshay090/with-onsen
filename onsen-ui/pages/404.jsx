import Link from "next/link";

const NotAuth = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <div className="font-bold text-blue-800 text-2xl">404: You Got lost</div>
        <div className="text-center mt-3">
          <Link href="/">
            <button className=" px-4 py-2 bg-blue-600 text-blue-100 rounded-md">
              Go Home &rarr;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotAuth;
