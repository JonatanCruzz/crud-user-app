import { IconPencil, IconGift, IconTrash } from "@tabler/icons-react";
import ImageDisplay from "./ImageDisplay";
import ConfirmationModal from './ConfirmationModal';
import { useState } from "react";

const User = ({ userInfo, deleteUser, handleClickUpdate }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const confirmDelete = () => {
        deleteUser(userInfo.id);
        setShowModal(false);
    };

    const cancelDelete = () => {
        setShowModal(false);
    };

    return (
        <article className='border-2 p-4 rounded-lg grid gap-3 bg-[#898888] border-[#898888] relative'>
            <h2 className="flex gap-2 items-center text-lg font-bold">
                <ImageDisplay imageUrl={userInfo.image_url} firstName={userInfo.first_name} lastName={userInfo.last_name} />
                {userInfo.first_name} {userInfo.last_name}
            </h2> <hr />

            <ul className='grid gap-1'>
                <li><span className="text-white">CORREO: </span><br />  {userInfo.email}</li>
                <li className="flex flex-col">
                    <span className="text-white">CUMPLEAÑOS:</span>
                    <div className="flex items-center gap-2">
                        <IconGift />
                        {userInfo.birthday}
                    </div>
                </li>
            </ul>
            <hr />
            <div className="flex justify-end gap-2">
                <button
                    onClick={handleDeleteClick}
                    className="bg-red-400 hover:bg-red-500 transition-colors  text-white p-1 rounded-md"
                >
                    <IconTrash />
                </button>
                <button
                    onClick={() => handleClickUpdate(userInfo)}
                    className="bg-gray-400 hover:bg-gray-500 transition-colors  text-white p-1 rounded-md"
                >
                    <IconPencil />
                </button>
            </div>

            {showModal && (
                <ConfirmationModal
                    message="¿Estás seguro de que deseas eliminar este usuario?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </article>
    );
}

export default User