import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const InputSection = () => {
    let ref = useRef(null)
    let passwordRef = useRef(null)
    let urlRef = useRef(null)
    let usernameRef = useRef(null)

    const [form, setform] = useState({ url: '', username: '', password: '' })

    const [passwordArray, setPasswordArray] = useState([])

    let handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
        //   console.log(form)
    }
    let handleSave = () => {
      if((form.url.length < 3) || (form.username.length < 3) || (form.password.length < 3)){
       toast('Error: Password not Saved!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
        });
      }
      else{
         //   console.log(form)
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem('password', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        // console.log([...passwordArray, form])
        setform({ url: '', username: '', password: '' })
        toast('Saved Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
        });
      }
    }

    useEffect(() => {
        let passwords = localStorage.getItem('password')
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const passwordManager = () => {
        if (passwordRef.current.type === "password") {
            passwordRef.current.type = "text";
            ref.current.src = "/openeye.png";
        } else {
            passwordRef.current.type = "password";
            ref.current.src = "/closedeye.png";
        }
    };

    const handleCopy = (e) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
        });

        navigator.clipboard.writeText(e)
    }

    const handleEdit = (id) => {
        //   passwordRef.current.value = passwordArray[idx].password
        //   usernameRef.current.value = passwordArray[idx].username
        //   urlRef.current.value = passwordArray[idx].url
        console.log('handling edit with id: ' + id)
        setform(passwordArray.filter((i) => {
            if (i.id === id)
                return i
        })[0])
        setPasswordArray(passwordArray.filter((i) => {
            if (i.id !== id)
                return i
        }))

    }

    const handleDelete = (id) => {
        //    let arr = passwordArray.filter((item)=>{
        //         if(item !== passwordArray[idx])
        //             return item
        //     })
        //     setPasswordArray(arr)

        // console.log('handling delete with id: '+id)
        toast('Deleted Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
        });
        setPasswordArray(passwordArray.filter((item) => {
            if (item.id !== id)
                return item
        }))
        localStorage.setItem('password', JSON.stringify(passwordArray.filter((item) => {
            if (item.id !== id)
                return item
        })))

    }





    return (
        <div className='min-h-[70vh]'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            // transition={Bounce}
            />

            <div className='w-3/4 flex flex-col gap-2 xl:gap-12 m-auto mt-6 h-[20vh] '>
                <div className=''>
                    <input ref={urlRef} onChange={handleChange} name='url' type="text" className='bg-amber-50 outline-none w-full px-4 py-1 rounded-2xl border-2 border-purple-400' placeholder='Enter Website URL' value={form.url} /></div>
                <div className='flex xl:flex-row flex-col items-center gap-2 w-full'>
                    <input ref={usernameRef} value={form.username} onChange={handleChange} name='username' type="text" className='bg-amber-50 outline-none w-4/5 px-4 py-1 rounded-2xl border-2 border-purple-400' placeholder='Enter Username' />
                    <div className='xl:w-1/5 relative flex justify-center'>
                        <input value={form.password} onChange={handleChange} ref={passwordRef} name='password' type="password" className=' outline-none xl:w-full border-none bg-amber-50 px-4 py-1 rounded-2xl border-2 border-purple-400' placeholder='Enter Password' />
                        <img ref={ref} className='w-6 absolute bottom-0.5 right-3' src="public/closedeye.png" alt="" onClick={() => {
                            passwordManager()
                        }} />
                    </div>
                </div>
            </div>
            <button onClick={handleSave} className='bg-[#22c55e] flex gap-1 items-center px-3 py-1 m-auto mt-6 rounded-3xl text-lg'>
                <span className='font-semibold'>Save</span>
                <lord-icon
                    src="https://cdn.lordicon.com/eaegfqtv.json"
                    trigger='click'
                >
                </lord-icon>
            </button>




            {(passwordArray.length === 0) && <p className='text-fuchsia-600 text-2xl w-3/4 mt-3 m-auto'>No Passwords to show</p>}
            {(passwordArray.length !== 0) && <div>

                <h1 className='text-white text-xl font-bold w-3/4 m-auto'>Your Passwords</h1>
                <div className='w-3/4 overflow-x-auto [box-shadow:2px_2px_4px_black] m-auto my-6 rounded-2xl overflow-hidden'>

                    <div className='w-full flex min-w-[700px] px-4 py-2 text-lg bg-purple-800'>
                        <p className='text-white font-bold w-4/12'>Site</p>
                        <p className='text-white font-bold w-3/12'>Username</p>
                        <p className='text-white font-bold w-3/12'>Password</p>
                        <p className='text-white font-bold w-2/12'>Actions</p>
                    </div>
                    {passwordArray.map((e, idx) => {
                        return <div className='w-full min-w-[700px] bg-[#371c82] flex justify-around px-4 py-2 font-semibold' key={idx}>
                            <p className='text-[#c7b1b1] break-all flex-wrap flex justify-between px-4 py-2 w-4/12'>
                                <a href={e.url} className='' target='_blank'>{e.url}</a>
                                <lord-icon onClick={() => handleCopy(e.url)}
                                    src="https://cdn.lordicon.com/hmpomorl.json"
                                    trigger="click"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                    style={{ "width": "25px", height: "25px" }}>
                                </lord-icon>
                            </p>
                            <p className='text-[#c7b1b1] break-all flex justify-between flex-wrap px-4 py-2 w-3/12'>{e.username}
                                <lord-icon onClick={() => handleCopy(e.username)}
                                    src="https://cdn.lordicon.com/hmpomorl.json"
                                    trigger="click"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                    style={{ "width": "25px", height: "25px" }}>
                                </lord-icon>
                            </p>
                            <p className='text-[#c7b1b1] break-all w-3/12 flex justify-between flex-wrap px-4 py-2'>{e.password}
                                <lord-icon onClick={() => handleCopy(e.password)}
                                    src="https://cdn.lordicon.com/hmpomorl.json"
                                    trigger="click"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                    style={{ "width": "25px", "height": "25px" }}>
                                </lord-icon>
                            </p>
                            <p className='flex px-2 gap-2 break-all w-2/12'>
                                <lord-icon onClick={() => handleEdit(e.id)}
                                    src="https://cdn.lordicon.com/exymduqj.json"
                                    trigger="click"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                    style={{ width: "30px", height: "25px" }}>
                                </lord-icon>

                                <lord-icon onClick={() => handleDelete(e.id)}
                                    src="https://cdn.lordicon.com/jzinekkv.json"
                                    trigger="hover"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                    style={{ width: "25px", height: "25px" }}>
                                </lord-icon>
                            </p>
                        </div>

                    })}

                </div>
            </div>}






        </div>
    )
}

export default InputSection