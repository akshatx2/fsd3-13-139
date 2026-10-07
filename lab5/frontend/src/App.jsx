const Hello = () => {
  return (
    <>
      <h2>Welcome to React 19</h2>
    </>
  );
};
const Book = () => {
  return (
    <>
      <h1 className="text-red-600 text-3xl">Lets React</h1>
      <h2>Price : 799</h2>
      <h3>Rating : 4.09</h3>
    </>
  )
}

export default function App() {
  return (
    <>
      <h1 className="text-6xl text-center bg-gray-600 text-white my-2 p-2">
        Akshat Gupta
      </h1>

      <Hello />
      <Book/>
    </>
  );
}