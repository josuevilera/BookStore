const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-indigo-100 via-pink-100 to-yellow-100 flex flex-col items-center">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 bg-emerald-300 rounded-full animate-bounce"></div>
        </div>
        <p className="text-xl font-semibold text-gray-700">Cargando...</p>
      </div>
    </div>
  );
};

export default Loading;
