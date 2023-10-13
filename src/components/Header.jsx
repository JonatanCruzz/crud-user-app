import { IconPlus } from "@tabler/icons-react";

const Header = ({ handleOpenModal }) => {
  return (
    <header className="flex justify-between p-2">
      <h1 className="text-5xl font-bold m-4 text-white">Usuarios</h1>
      <button
        onClick={handleOpenModal}
        className="flex justify-center items-center gap-2 bg-blue-500 text-lg text-white p-2 px-4 font-semibold rounded-md hover:bg-blue-600 transition-colors"
      >
        <span>
          <IconPlus />
        </span>
        <span className="hidden md:inline-block">Crear nuevo usuario</span>
      </button>
    </header>
  );
};
export default Header;
