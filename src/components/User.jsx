import { IconPencil, IconGift, IconTrash } from "@tabler/icons-react";

const User = ({ userInfo, deleteUser, handleClickUpdate }) => {
    return (
        <article className='border-2 p-4 rounded-lg grid gap-3 relative'>
            <h2 className='flex gap-2 items-center text-lg font-bold'> 
            {userInfo.image_url && (
                <div className="flex items-center">
                    <img className="w-8 h-8 mr-1 rounded-lg" src={userInfo.image_url} alt={`Imagen de ${userInfo.first_name} ${userInfo.last_name}`}  />
                </div>
            )} {userInfo.first_name} {userInfo.last_name} </h2> <hr />

            <ul className='grid gap-1'>
                <li><span className="text-gray-400">CORREO: </span><br />  {userInfo.email}</li>
                <li className="flex flex-col">
                    <span className="text-gray-400">CUMPLEAÑOS:</span>
                    <div className="flex items-center gap-2">
                        <IconGift />
                        {userInfo.birthday}
                    </div>
                </li>
            </ul>
            <hr />
            <div className="flex justify-end gap-2">
                <button onClick={() => deleteUser(userInfo.id)} className='bg-red-400 hover:bg-red-500 transition-colors  text-white p-1 rounded-md'>
                    <IconTrash />
                </button>
                <button onClick={() => handleClickUpdate(userInfo)} className='bg-gray-400 hover:bg-gray-500 transition-colors  text-white p-1 rounded-md'>
                    <IconPencil />
                </button>

            </div>
        </article >
    )
}

export default User