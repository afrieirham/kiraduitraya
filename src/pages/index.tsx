import SEOHead from "@/components/SEOHead";
import { useState } from "react";

export default function Home() {
  const [rm100, setRM100] = useState<any>("");
  const [rm50, setRM50] = useState<any>("");
  const [rm20, setRM20] = useState<any>("");
  const [rm10, setRM10] = useState<any>("");
  const [rm5, setRM5] = useState<any>("");
  const [rm1, setRM1] = useState<any>("");

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
        <div className="flex w-full items-center space-x-2">
          <span className="w-full flex items-center space-x-2">
            <img className="w-16" src="./100.png" />
            <span>RM100</span>
          </span>
          <span>x</span>
          <input
            className="w-full border px-3 py-1 rounded"
            value={rm100}
            onChange={(e) => setRM100(Number(e.target.value))}
          />
        </div>
        <div className="flex w-full items-center space-x-2">
          <span className="w-full flex items-center space-x-2">
            <img className="w-16" src="./50.png" />
            <span>RM50</span>
          </span>
          <span>x</span>
          <input
            className="w-full border px-3 py-1 rounded"
            value={rm50}
            onChange={(e) => setRM50(Number(e.target.value))}
          />
        </div>
        <div className="flex w-full items-center space-x-2">
          <span className="w-full flex items-center space-x-2">
            <img className="w-16" src="./20.png" />
            <span>RM20</span>
          </span>
          <span>x</span>
          <input
            className="w-full border px-3 py-1 rounded"
            value={rm20}
            onChange={(e) => setRM20(Number(e.target.value))}
          />
        </div>
        <div className="flex w-full items-center space-x-2">
          <span className="w-full flex items-center space-x-2">
            <img className="w-16" src="./10.png" />
            <span>RM10</span>
          </span>
          <span>x</span>
          <input
            className="w-full border px-3 py-1 rounded"
            value={rm10}
            onChange={(e) => setRM10(Number(e.target.value))}
          />
        </div>
        <div className="flex w-full items-center space-x-2">
          <span className="w-full flex items-center space-x-2">
            <img className="w-16" src="./5.png" />
            <span>RM5</span>
          </span>
          <span>x</span>
          <input
            className="w-full border px-3 py-1 rounded"
            value={rm5}
            onChange={(e) => setRM5(Number(e.target.value))}
          />
        </div>
        <div className="flex w-full items-center space-x-2">
          <span className="w-full flex items-center space-x-2">
            <img className="w-16" src="./1.png" />
            <span>RM1</span>
          </span>
          <span>x</span>
          <input
            className="w-full border px-3 py-1 rounded"
            value={rm1}
            onChange={(e) => setRM1(Number(e.target.value))}
          />
        </div>
      </div>
      <p>
        Jumlah:{" "}
        <span>
          RM
          {rm100 * 100 + rm50 * 50 + rm20 * 20 + rm10 * 10 + rm5 * 5 + rm1 * 1}
        </span>
      </p>
    </div>
  );
}
