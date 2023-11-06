import { EMAIL_VALIDATIONS, FIRST_NAME_VALIDATIONS, LAST_NAME_VALIDATIONS, PASSWORD_VALIDATIONS } from "../constants/formValidations";
import { IconSquareRoundedXFilled } from "@tabler/icons-react";

const Modal = ({
    isShowModal,
    handleClosedModal,
    handleSubmit,
    submit,
    register,
    idUserToEdit,
    errors,
}) => {
    console.log(errors);

    return (
        <section
            className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-300 z-10 ${isShowModal ? "visible opacity-100" : "invisible opacity-0"
                }`}
        >
            <form
                onSubmit={handleSubmit(submit)}
                className="bg-[#181a1b] p-3 rounded-md grid gap-3 w-[min(100%,_320px)] relative"
            >
                <h2 className="text-center text-lg text-white font-semibold">
                    {idUserToEdit ? "Update user" : "Create user"}
                </h2>
                <button
                    onClick={handleClosedModal}
                    type="button"
                    className="text-red-500 hover:text-red-600 transition-colors absolute top-2 right-2"
                >
                    <IconSquareRoundedXFilled />
                </button>

                {/* Name */}
                <div className="grid gap-1">
                    <label className="font-light text-white" htmlFor="first_name">
                        Names
                    </label>
                    <input
                        className="outline-none border border-[#26292b] px-2 py-1 rounded-sm 
                        bg-[#26292b] text-white"
                        id="first_name"
                        type="text"
                        autoComplete="off"
                        {...register("first_name", FIRST_NAME_VALIDATIONS)}
                    />
                    {errors.first_name && (
                        <span className="text-xs text-red-500">{errors.first_name.message}</span>
                    )}
                </div>

                {/* Last name */}
                <div className="grid gap-1">
                    <label className="font-light text-white" htmlFor="last_name">
                        Last names
                    </label>
                    <input
                        className="outline-none border border-[#26292b] px-2 py-1 rounded-sm 
                        bg-[#26292b] text-white bg-clip-padding"
                        id="last_name"
                        type="text"
                        {...register("last_name", LAST_NAME_VALIDATIONS)}
                    />
                    {errors.last_name && (
                        <span className="text-xs text-red-500">{errors.last_name.message}</span>
                    )}
                </div>

                {/* Email */}
                <div className="grid gap-1">
                    <label className="font-light text-white" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="outline-none border border-[#26292b] px-2 py-1 rounded-sm 
                        bg-[#26292b] text-white"
                        id="email"
                        type="text"
                        {...register("email", EMAIL_VALIDATIONS)}
                    />
                    {errors.email && (
                        <span className="text-xs text-red-500">{errors.email.message}</span>
                    )}
                </div>

                {/* Password */}
                <div className="grid gap-1">
                    <label className="font-light text-white" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="outline-none border border-[#26292b] px-2 py-1 rounded-sm 
                        bg-[#26292b] text-white"
                        id="password"
                        type="password"
                        {...register("password", PASSWORD_VALIDATIONS)}
                    />
                    {errors.password && (
                        <span className="text-xs text-red-500">{errors.password.message}</span>
                    )}
                </div>

                {/* Birthday */}
                <div className="grid gap-1">
                    <label className="font-light text-white" htmlFor="birthday">
                        Birthday
                    </label>
                    <input
                        className="outline-none border border-[#26292b] px-2 py-1 rounded-sm 
                        bg-[#26292b] text-white"
                        id="birthday"
                        type="date"
                        {...register("birthday")}
                    />
                </div>

                {/* Campo de imagen */}
                <div className="grid gap-1">
                    <label className="font-light text-white" htmlFor="image_url">
                        Image Url
                    </label>
                    <input
                        className="outline-none border border-[#26292b] px-2 py-1 rounded-sm bg-[#26292b] text-white"
                        id="image_url"
                        type="text"
                        {...register("image_url")}
                    />
                </div>

                <button
                    className="bg-blue-500 text-white p-2 px-4 uppercase font-semibold rounded-sm mt-4"
                    type="submit"
                >
                    {idUserToEdit ? "Save user changes" : "Add new user"}
                </button>
            </form>
        </section>
    );
};

export default Modal;
