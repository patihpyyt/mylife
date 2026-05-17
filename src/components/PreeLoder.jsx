import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#060609]">
      <div className="w-8 h-8 border-4 border-[#10d9a0] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default PreLoader;