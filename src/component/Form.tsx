import  { useForm } from "react-hook-form"
import type { User } from "../model/user"
import { UserState } from "../shared/userState"



export default function UserForm() {
  const { register, handleSubmit, formState:{errors} } = useForm()
  const addUser = UserState((state) => state.addUser)


    function onSubmit(data:any) {
        const newUser: User = {
            name:data.name,
            age:data.age
        }

        addUser(newUser)
    }


    return <>
                    <div className="p-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 gap-4 mb-5">
                                <div>
                                    <label className="block text-sm text-z=white-500 mb-2">Nom</label>
                                    <input type="text" {...register("name",
                                                        {required:"Ton nom est requis"}
                                    )}
                                    
                                    placeholder="Mets ton nom frerot , tmtccc" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                                    {errors.name && (
                                                <p role="alert" className="text-red-500 text-sm mt-1">
                                                {errors.name.message?.toString()}
                                                </p>
                                            )}
                                </div>
                                <div>
                                <label className="block text-sm text-white-500 mb-2">
                                    Age
                                </label>

                                <input
                                    type="number"
                                    placeholder="ton age mon reuf"
                                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"
                                    {...register("age", {
                                    required: "Ton age est requis",
                                    valueAsNumber: true,
                                    validate: (value) =>
                                        !isNaN(value) || "Le montant doit être un nombre",
                                    })}
                                />

                                {errors.age && (
                                    <p role="alert" className="text-red-500 text-sm mt-1">
                                    {errors.age.message?.toString()}
                                    </p>
                                )}
                                </div>
                            </div>

                            <button type="submit" className="w-full py-3.5 bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-lg text-sm cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)]" >
                                Ajouter un utilisateur
                            </button>
                        </form>
                    </div>

    

           </>


}
