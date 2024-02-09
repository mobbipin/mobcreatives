export default function Meeting() {
  return (
    <div className="m-auto mt-14 flex h-[30rem] max-w-screen-lg  flex-col items-center justify-center gap-10 rounded-3xl bg-[url('/meeting.jfif')]">
      <h2 className="text-center text-4xl font-bold text-white">
        LET'S BUILD SOMETHING TOGETHER
      </h2>

      <a className="rounded bg-red-800 bg-opacity-75 px-5 py-4 text-white backdrop-blur-md">
        Apply for Meeting
      </a>
    </div>
  );
}
