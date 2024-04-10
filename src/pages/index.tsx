import SEOHead from "@/components/SEOHead";
import { useState } from "react";

export default function Home() {
  const [rm100, setRM100] = useState(0);
  const [rm50, setRM50] = useState(0);
  const [rm20, setRM20] = useState(0);
  const [rm10, setRM10] = useState(0);
  const [rm5, setRM5] = useState(0);
  const [rm1, setRM1] = useState(0);

  return (
    <div className="w-full flex flex-col items-center py-20 max-w-sm mx-auto space-y-10 px-2">
      <SEOHead
        title="Kira Duit Raya"
        description="Calculator untuk kira duit raya"
        path="/"
        ogPath="/og.png"
      />
      <h1 className="font-bold text-2xl">Kira Duit Raya</h1>
      <div className="w-full space-y-5">
        <div className="flex w-full items-center space-x-2 justify-between">
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => (rm100 < 1 ? rm100 : setRM100(rm100 - 1))}
          >
            -
          </button>
          <img className="w-16" src="./100.png" />
          <span>RM100</span>
          <span>x</span>
          <span>{rm100}</span>
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => setRM100(rm100 + 1)}
          >
            +
          </button>
        </div>
        <div className="flex w-full items-center space-x-2 justify-between">
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => (rm50 < 1 ? rm50 : setRM50(rm50 - 1))}
          >
            -
          </button>
          <img className="w-16" src="./50.png" />
          <span>RM50</span>
          <span>x</span>
          <span>{rm50}</span>
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => setRM50(rm50 + 1)}
          >
            +
          </button>
        </div>
        <div className="flex w-full items-center space-x-2 justify-between">
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => (rm20 < 1 ? rm20 : setRM20(rm20 - 1))}
          >
            -
          </button>
          <img className="w-16" src="./20.png" />
          <span>RM20</span>
          <span>x</span>
          <span>{rm20}</span>
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => setRM20(rm20 + 1)}
          >
            +
          </button>
        </div>
        <div className="flex w-full items-center space-x-2 justify-between">
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => (rm10 < 1 ? rm10 : setRM10(rm10 - 1))}
          >
            -
          </button>
          <img className="w-16" src="./10.png" />
          <span>RM10</span>
          <span>x</span>
          <span>{rm10}</span>
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => setRM10(rm10 + 1)}
          >
            +
          </button>
        </div>
        <div className="flex w-full items-center space-x-2 justify-between">
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => (rm5 < 1 ? rm5 : setRM5(rm5 - 1))}
          >
            -
          </button>
          <img className="w-16" src="./5.png" />
          <span>RM5</span>
          <span>x</span>
          <span>{rm5}</span>
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => setRM5(rm5 + 1)}
          >
            +
          </button>
        </div>
        <div className="flex w-full items-center space-x-2 justify-between">
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => (rm1 < 1 ? rm1 : setRM1(rm1 - 1))}
          >
            -
          </button>
          <img className="w-16" src="./1.png" />
          <span>RM1</span>
          <span>x</span>
          <span>{rm1}</span>
          <button
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => setRM1(rm1 + 1)}
          >
            +
          </button>
        </div>
      </div>
      <p>
        Jumlah:{" "}
        <span>
          RM
          {rm100 * 100 + rm50 * 50 + rm20 * 20 + rm10 * 10 + rm5 * 5 + rm1 * 1}
        </span>
      </p>
      <p className="text-gray-300 absolute bottom-4 text-[12px]">
        Illustration by{" "}
        <a
          href="https://lovepik.com/photographer/2053792p"
          target="_blank"
          className="hover:underline"
        >
          HappySnow
        </a>{" "}
        on{" "}
        <a
          href="https://lovepik.com/images/png-malaysia.html"
          target="_blank"
          className="hover:underline"
        >
          LovePik
        </a>
      </p>
    </div>
  );
}
